import { Link } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Repository from "../components/works/github";
import { graphql } from "gatsby";
import { RepoGrid, Intro } from "../components/styled/repository";
import SectionIntro from "../components/sectionIntro";
import { ContainerLayout } from "../components/common";

const CodingPage = ({ data }) => {
  const { repositories } = data.githubData.data.viewer;

  return (
    <>
      <Layout>
        <Seo title="Coding" />
        <ContainerLayout>
          <SectionIntro
            title="Coding"
            subtitle="Frontend is my jam, teaching is my passion"
          />
          <Intro>
            I'm a dedicated full-stack engineer with a passion for frontend
            development and serverless technologies. Recently, I've been
            expanding my skills in developer advocacy and sharing what I've
            learned with the community{" "}
            <Link
              to="/speaking"
              className="lined-link"
              activeClassName="active"
            >
              on stages
            </Link>{" "}
            and online. I love good documentation and am committed to empowering
            others by creating user experiences that feel natural and intuitive,
            even for beginners.
          </Intro>
          <Intro>
            My main stack consists of JavaScript frameworks: React, Gatsby, and
            NodeJS. I upgraded to TypeScript in 2021 and haven't looked back at
            plain JS since. I've worked with Python and Golang in the past, but
            have forgotten much of the former and wasn't a huge fan of the
            latter.
          </Intro>
          <Intro>
            I've worked on serverless applications since 2018, primarily using
            AWS services such as Lambda, API/HTTP Gateway, DynamoDB, SQS, SES,
            and S3. I'm very familiar with serverless architecture and have
            worked on both the frontend and backend of serverless applications.
            If you don't believe me, ask Jeremy Daly - I was named a{" "}
            <a
              href="https://offbynone.io/issues/105/"
              target="_blank"
              rel="noreferrer"
            >
              Serverless Star
            </a>{" "}
            ⭐ in his Off-by-none newsletter. I'm an AWS Certified Cloud
            Practitioner (which, TBH, I only got to get access to the
            certification lounge at re:Invent 🤷‍♀️☕). One day I hope AWS makes a
            serverless developer certification, which I will eagerly get.
          </Intro>
          <Intro>Check out some of my public repositories below:</Intro>
          <RepoGrid>
            {repositories.nodes
              .map((repo, index) => <Repository key={index} repo={repo} />)
              .reverse()}
          </RepoGrid>
        </ContainerLayout>
      </Layout>
    </>
  );
};
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
