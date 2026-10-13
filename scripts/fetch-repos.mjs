// Fetches pinned GitHub repositories at build time and writes them to
// src/data/repos.json, so no API token ever ships in the client bundle.
// Without a token, the committed repos.json is kept as-is.
import { writeFile } from "node:fs/promises";

const GITHUB_LOGIN = "bildungsroman";
const OUTPUT_FILE = new URL("../src/data/repos.json", import.meta.url);

const query = `
  query ($login: String!) {
    user(login: $login) {
      pinnedItems(first: 6, types: [REPOSITORY]) {
        nodes {
          ... on Repository {
            name
            description
            url
            homepageUrl
            stargazerCount
            forkCount
            updatedAt
            primaryLanguage {
              name
              color
            }
            licenseInfo {
              name
            }
          }
        }
      }
    }
  }
`;

const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;

if (!token) {
  console.warn(
    "fetch-repos: no GITHUB_TOKEN or GH_TOKEN set, keeping existing repos.json"
  );
  process.exit(0);
}

const response = await fetch("https://api.github.com/graphql", {
  method: "POST",
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ query, variables: { login: GITHUB_LOGIN } }),
});

if (!response.ok) {
  console.error(`fetch-repos: GitHub API returned HTTP ${response.status}`);
  process.exit(1);
}

const { data, errors } = await response.json();

if (errors) {
  console.error(
    `fetch-repos: GraphQL error: ${errors.map((e) => e.message).join(", ")}`
  );
  process.exit(1);
}

const repos = data.user.pinnedItems.nodes;
await writeFile(OUTPUT_FILE, `${JSON.stringify(repos, null, 2)}\n`);
console.warn(`fetch-repos: wrote ${repos.length} pinned repositories`);
