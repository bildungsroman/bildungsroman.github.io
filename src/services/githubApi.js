/**
 * GitHub API service for fetching repository data
 * Uses GraphQL API with fetch-based HTTP client
 */

const GITHUB_API_URL = "https://api.github.com/graphql";
const MAX_RETRIES = 3;
const RETRY_DELAY = 1000; // 1 second

/**
 * Sleep utility for retry delays
 */
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * GitHub API client class
 */
class GitHubApiService {
  constructor() {
    // Handle both Vite (import.meta.env) and Node.js (process.env) environments
    this.token =
      typeof import.meta !== "undefined" && import.meta.env
        ? import.meta.env.VITE_GITHUB_API_TOKEN
        : process.env.VITE_GITHUB_API_TOKEN;

    if (!this.token) {
      console.warn(
        "GitHub API token not found. Set VITE_GITHUB_API_TOKEN environment variable."
      );
    }
  }

  /**
   * Make a GraphQL request to GitHub API with retry logic
   */
  async makeRequest(query, variables = {}, retryCount = 0) {
    try {
      const response = await fetch(GITHUB_API_URL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${this.token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query,
          variables,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      // Check for GraphQL errors
      if (data.errors) {
        throw new Error(
          `GraphQL error: ${data.errors.map((e) => e.message).join(", ")}`
        );
      }

      return data;
    } catch (error) {
      // Retry logic for network errors or rate limiting
      if (retryCount < MAX_RETRIES && this.shouldRetry(error)) {
        console.warn(
          `GitHub API request failed, retrying... (${retryCount + 1}/${MAX_RETRIES})`
        );
        await sleep(RETRY_DELAY * Math.pow(2, retryCount)); // Exponential backoff
        return this.makeRequest(query, variables, retryCount + 1);
      }

      throw error;
    }
  }

  /**
   * Determine if an error should trigger a retry
   */
  shouldRetry(error) {
    // Retry on network errors, rate limiting, or server errors
    return (
      error.message.includes("fetch") ||
      error.message.includes("network") ||
      error.message.includes("status: 5") ||
      error.message.includes("status: 429")
    );
  }

  /**
   * Fetch pinned repositories from GitHub profile
   */
  async getPinnedRepositories() {
    const query = `
      query {
        viewer {
          name
          avatarUrl
          isHireable
          resourcePath
          pinnedItems(first: 6, types: [REPOSITORY]) {
            nodes {
              ... on Repository {
                name
                description
                homepageUrl
                forkCount
                createdAt
                updatedAt
                resourcePath
                languages(last: 1, orderBy: { field: SIZE, direction: ASC }) {
                  edges {
                    node {
                      name
                      color
                    }
                  }
                }
                licenseInfo {
                  name
                }
                stargazers {
                  totalCount
                }
              }
            }
          }
        }
      }
    `;

    try {
      const response = await this.makeRequest(query);
      return {
        viewer: {
          ...response.data.viewer,
          repositories: {
            nodes: response.data.viewer.pinnedItems.nodes,
          },
        },
      };
    } catch (error) {
      console.error("Failed to fetch pinned repositories:", error);
      throw new Error(`Failed to fetch pinned repositories: ${error.message}`);
    }
  }

  /**
   * Fetch repositories using the same GraphQL query as the original site
   * This method is kept for backward compatibility
   */
  async getRepositories(numberOfRepos = 10) {
    const query = `
      query ($number_of_repos: Int!) {
        viewer {
          name
          avatarUrl
          isHireable
          resourcePath
          repositories(last: $number_of_repos, privacy: PUBLIC, orderBy: { field: STARGAZERS, direction: ASC }) {
            nodes {
              name
              description
              homepageUrl
              forkCount
              createdAt
              updatedAt
              resourcePath
              languages(last: 1, orderBy: { field: SIZE, direction: ASC }) {
                edges {
                  node {
                    name
                    color
                  }
                }
              }
              licenseInfo {
                name
              }
              stargazers {
                totalCount
              }
            }
          }
        }
      }
    `;

    const variables = {
      number_of_repos: numberOfRepos,
    };

    try {
      const response = await this.makeRequest(query, variables);
      return response.data;
    } catch (error) {
      console.error("Failed to fetch GitHub repositories:", error);
      throw new Error(`Failed to fetch repositories: ${error.message}`);
    }
  }
}

// Create and export a singleton instance
const githubApiService = new GitHubApiService();

export default githubApiService;
