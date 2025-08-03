import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { Intro } from "../components/styled/repository";
import SectionIntro from "../components/sectionIntro";
import { ContainerLayout } from "../components/common";

const SpeakingPage = () => {
  return (
    <>
      <Layout>
        <Seo title="Speaking" />
        <ContainerLayout>
          <SectionIntro
            title="Speaking"
            subtitle="Occasional Serverless Thought-Haver&trade;"
          />
          <Intro>
            I'm passionate about making modern application development
            accessible to users at all levels, particularly beginners and those
            from non-traditional backgrounds. Since joining AWS, I've had the
            privilege of speaking at several internal conferences such as
            WebDevCon in 2022, 2023, and 2024. I hope to branch out to external
            events soon.
          </Intro>
          <h2>Selected Talks and Demos</h2>
          <iframe
            width="100%"
            height="700"
            src="https://www.youtube-nocookie.com/embed/lzRyDTdkCSU"
            title="AWS On Air: Code Corner ft. Anna Spysz, TypeScript, App Composer, and Generative AI!"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <br />
          <br />
          <iframe
            width="100%"
            height="700"
            src="https://www.youtube-nocookie.com/embed/uF-vTM6wTY0"
            title="The best features of Application Composer you aren't using"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <br />
          <br />
          <iframe
            width="100%"
            height="700"
            src="https://www.youtube-nocookie.com/embed/NFRJuFlBFzc"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <br />
          <h2>Podcast/Twitch appearances</h2>
          <Intro>
            <ul>
              <li>
                <a
                  href="https://devopspartygames.com/episodes/s02e08"
                  target="_blank"
                  rel="noreferrer"
                >
                  DevOps Party Games - The Final Countdown
                </a>{" "}
                by{" "}
                <a
                  href="https://devopspartygames.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  DevOps Party Games
                </a>
              </li>
              <li>
                <a
                  href="https://podcasts.apple.com/us/podcast/episode-62-serverless-storytelling-with-anna-spysz/id1361244178?i=1000440051998"
                  target="_blank"
                  rel="noreferrer"
                >
                  Screaming in the Cloud
                </a>{" "}
                with Corey Quinn
              </li>
              <li>
                <a
                  href="https://open.spotify.com/episode/3ftNup9rzqRzYzMSYk3dPc"
                  target="_blank"
                  rel="noreferrer"
                >
                  Talking Serverless
                </a>{" "}
                with Ryan Jones
              </li>
            </ul>
          </Intro>
          <h2>Selected Blog Posts</h2>
          <Intro>
            In addition to speaking, I love developing and writing tutorials,
            the sillier the better. You can see a lot of my work on the{" "}
            <a
              href="https://www.stackery.io/blog/"
              target="_blank"
              rel="noreferrer"
            >
              Stackery Blog
            </a>
            , and here's a few select posts:
            <ul>
              <li>
                <a
                  href="https://aws.amazon.com/blogs/compute/using-generative-infrastructure-as-code-with-application-composer/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Using generative infrastructure as code with Application
                  Composer
                </a>{" "}
                @ the AWS Compute Blog
              </li>
              <li>
                <a
                  href="https://dev.to/annaspies/entering-the-world-of-ai-mechanics-3776"
                  target="_blank"
                  rel="noreferrer"
                >
                  Entering the World of AI Mechanics
                </a>{" "}
                @ Dev
              </li>
              <li>
                <a
                  href="https://dev.to/annaspies/global-state-in-gatsby-or-having-and-eating-your-cake-too-3bjj"
                  target="_blank"
                  rel="noreferrer"
                >
                  Global State in Gatsby, or Having and Eating Your Cake, Too
                </a>{" "}
                @ Dev
              </li>
              <li>
                <a
                  href="https://dev.to/annaspies/alexa-how-can-i-win-an-echo-and-learn-to-build-an-alexa-app-52c"
                  target="_blank"
                  rel="noreferrer"
                >
                  Alexa, How Can I Win an Echo (and learn to build an Alexa
                  app)?
                </a>{" "}
                @ Dev
              </li>
              <li>
                <a
                  href="https://dev.to/annaspies/i-used-cypress-as-an-xbox-web-scraper-and-i-regret-nothing-1bn4"
                  target="_blank"
                  rel="noreferrer"
                >
                  I used Cypress as an Xbox web scraper and I regret
                  nothing{" "}
                </a>{" "}
                @ Dev
              </li>
              <li>
                <a
                  href="https://www.stackery.io/blog/top-10-deployment-errors/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Top 10 Serverless Deployment Errors (and How to Fix Them)
                </a>{" "}
                @ Stackery
              </li>
              <li>
                <a
                  href="https://www.stackery.io/blog/serverless-gong/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Building Slack Bots for Fun: A Serverless Release Gong
                </a>{" "}
                @ Stackery
              </li>
            </ul>
          </Intro>
        </ContainerLayout>
      </Layout>
    </>
  );
};
export default SpeakingPage;
