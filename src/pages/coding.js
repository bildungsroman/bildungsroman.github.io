import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Repository from '../components/works/github';
import { graphql } from 'gatsby';
import { RepoGrid, Intro } from '../components/styled/repository';
import SectionIntro from '../components/sectionIntro';
import { ContainerLayout } from '../components/common';

const CodingPage = ({data}) => { 
  const {
    repositories,
  } = data.githubData.data.viewer;

  return (
    <>
      <Layout> 
        <SEO title='Coding'/>
        <ContainerLayout>
          <SectionIntro title='Coding' subtitle='JS and serverless all the things!' />
            <Intro>
              My main stack consists of JavaScript frameworks: React, Gatsby, and NodeJS. I've worked with Python and Golang in the past, but have forgotten much of the former and wasn't a huge fan of the latter.
            </Intro>
            <Intro>
              Check out some of my public repositories below:
            </Intro>
            <RepoGrid>
              {repositories.nodes.map((repo, index) => <Repository key={index} repo={repo} />).reverse()}
            </RepoGrid>
        </ContainerLayout>
      </Layout>
    </>
  )
}
export default CodingPage;

export const gitHubQuery = graphql`
  {
    githubData {
      data {
        viewer {
          name
          avatarUrl
          repositories {
            nodes {
              name
              description
              homepageUrl
              resourcePath
              forkCount
              createdAt
              updatedAt
              languages {
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
  }
`;
