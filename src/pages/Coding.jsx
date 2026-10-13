import { Link } from "react-router";
import SectionIntro from "../components/SectionIntro";
import Repository from "../components/Repository";
import AppCard from "../components/AppCard";
import { CardGrid } from "../components/common";
import { RepoGrid, Intro } from "../components/styled/repository";
import repositories from "../data/repos.json";
import apps from "../data/apps";
import { usePageMeta } from "../hooks/usePageMeta";

const Coding = () => {
  usePageMeta({
    title: "Coding",
    description:
      "Apps Anna Spysz has built, plus her featured GitHub repositories and the stack she works in: React, TypeScript, Next.js, and AWS serverless.",
    path: "/coding",
  });
  return (
    <>
      <SectionIntro
        title="Coding"
        subtitle="Frontend is my jam, teaching is my passion"
      />
      <section>
        <Intro>
          I'm a dedicated full-stack engineer with a passion for frontend
          development and serverless technologies. Recently, I've been expanding
          my skills in developer advocacy and sharing what I've learned with the
          community{" "}
          <Link to="/speaking" className="lined-link">
            on stages
          </Link>{" "}
          and online. I love good documentation and am committed to empowering
          others by creating user experiences that feel natural and intuitive,
          even for beginners.
        </Intro>
        <Intro>
          My main stack consists of JavaScript frameworks: React, NextJS, and
          NodeJS. I upgraded to TypeScript in 2021 and haven't looked back at
          plain JS since. I've worked with Python and Golang in the past, but
          have forgotten much of the former and wasn't a huge fan of the latter.
        </Intro>
        <Intro>
          I've worked on serverless applications since 2018, primarily using AWS
          services such as Lambda, API/HTTP Gateway, DynamoDB, SQS, SES, and S3.
          I'm very familiar with serverless architecture and have worked on both
          the frontend and backend of serverless applications. If you don't
          believe me, ask Jeremy Daly - I was named a{" "}
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
      </section>

      <section id="apps" aria-labelledby="apps-heading">
        <h2 id="apps-heading">My apps</h2>
        <Intro>Things I've built and shipped that you can use right now:</Intro>
        <CardGrid>
          {apps.map((app) => (
            <AppCard key={app.url} app={app} />
          ))}
        </CardGrid>
      </section>

      <section id="repositories" aria-labelledby="repositories-heading">
        <h2 id="repositories-heading">Featured repositories</h2>
        <Intro>A few of my pinned repositories on GitHub:</Intro>
        <RepoGrid>
          {repositories.map((repo) => (
            <Repository key={repo.name} repo={repo} />
          ))}
        </RepoGrid>
      </section>
    </>
  );
};

export default Coding;
