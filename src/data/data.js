const currentDate = new Date();

module.exports = {
  SiteTitle: "Anna Spysz",
  Sitelogo: "#",
  SiteLogoText: "Anna Spysz",
  SiteAuthor: "Anna Spysz",
  SiteDescription: "Full-stack software engineer",
  defaultDescription: "Full-stack software engineer",
  githubApiQuery: `query ($number_of_repos: Int!) {
    viewer {
      name
      avatarUrl
      isHireable
      resourcePath
      repositories(last: $number_of_repos, privacy: PUBLIC, orderBy: { field: STARGAZERS, direction:ASC } ) {
        nodes {
          name
          description
          homepageUrl
          forkCount
          createdAt
          updatedAt
          resourcePath
          languages(last: 1, orderBy: { field: SIZE, direction:ASC } ) {
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
  }`,
  githubApiVariables: {
    number_of_repos: 10,
  },
  SiteSocialLinks: {
    twitter: "https://twitter.com/annaspies",
    github: "https://github.com/bildungsroman",
    linkedin: "https://www.linkedin.com/in/annaspysz/",
    stackoverflow:
      "https://stackoverflow.com/users/9245716/bildungsroman?tab=profile",
  },
  SiteAddress: {
    city: "Portland",
    region: "Pacific Northwest",
    country: "United States",
    zipCode: "ZipCode",
  },
  SiteContact: {
    email: "anna@annaspysz.com",
    phone: "phone number",
  },
  SiteCopyright: currentDate.getFullYear(),
};
