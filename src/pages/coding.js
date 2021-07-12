import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
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
        <Seo title='Coding'/>
        <ContainerLayout>
          <SectionIntro title='Coding' subtitle='JS and serverless all the things!' />
            <Intro>
              My main stack consists of JavaScript frameworks: React, Gatsby, and NodeJS. I've worked with Python and Golang in the past, but have forgotten much of the former and wasn't a huge fan of the latter.
            </Intro>
            <Intro>
              I've worked on serverless applications since 2018, primarily using AWS services such as Lambda, API/HTTP Gateway, DynamoDB, SQS, SES, and S3. I'm very familiar with serverless architecture and have worked on both the frontend and backend of serverless applications. If you don't believe me, ask Jeremy Daly - I was named a <a href="https://offbynone.io/issues/105/" target="_blank" rel="noreferrer">Serverless Star</a> ⭐ in his Off-by-none newsletter. I'm an AWS Certified Cloud Practitioner (which, TBH, I only got to get access to the certification lounge at re:Invent).
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
