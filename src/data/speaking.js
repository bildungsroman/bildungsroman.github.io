// To add a video, paste its YouTube ID (the part after "watch?v=") into the
// matching list. Optional fields: date, description. Also add it to
// public/llms.txt so agents see it.
//
// Upcoming talks have no video yet. Each entry needs title, event, and date.
// location and url are optional.

export const upcomingTalks = [
  {
    title: "Content's not dead, but agents should pay for it",
    event: "Agentic dev day",
    date: "November 11, 2026",
    location: "Dublin",
    url: "https://stripe.events/agenticdevday",
  },
  {
    title: "Teaching agents to pay",
    event: "droidCon London",
    date: "December 10, 2026",
    location: "London",
    url: "https://london.droidcon.com/",
  },
];

export const talks = [
  {
    title: "Teaching agents to pay",
    youtubeId: "A-zeQiYkmXk",
    event: "AI Engineer",
    description:
      "With a global daily user base in the hundreds of millions, AI agents are rapidly becoming a primary interface for how people discover, evaluate, and purchase products. Enabling those products to be listed and paid for directly through agents opens an entirely new - and enormous - commerce channel.",
  },
  {
    title: "Good vibes, smooth payments. Tailoring Stripe to any UI",
    youtubeId: "c-ryv1GgQgA",
    event: "Commit Your Code",
    description:
      "Stripe Developer Advocate Anna Spysz demonstrates how to integrate and customize the Stripe checkout flow into any website design - even a chaotic 1990s GeoCities-inspired UI.",
  },
  {
    title: "The best features of Application Composer you aren't using",
    youtubeId: "uF-vTM6wTY0",
    event: "Believe In Serverless",
    description:
      "A tour of the lesser-known AWS Application Composer features that make building serverless apps faster.",
  },
  {
    title: "Serverless is for Pragmatists: CI/CD in the Age of IaC",
    youtubeId: "NFRJuFlBFzc",
    event: "Six Feet Up",
    description:
      "With Chase Douglas: how infrastructure as code changes continuous integration and delivery for serverless teams.",
  },
];

export const interviews = [
  {
    title: "Agents compete for your purchase inside M11 Labs' Open Market",
    youtubeId: "fdqsoT-lrHI",
    event: "Stripe Developers",
    description:
      "David from M11 Labs walks us through Open Market, a research preview platform where AI agents compete to sell you products. Instead of traditional ads and marketing, seller agents pitch products based on hard facts while a referee agent verifies claims using research reports and trusted sources. The platform narrows down millions of products to a personalized top five, then agents battle it out to win your purchase.",
  },
  {
    title: "AI Agents That Pay: AgentCore Payments + Stripe Privy Demo",
    youtubeId: "FJCkq4lHMVQ",
    event: "Stripe Developers",
    description:
      "What happens when an AI research agent hits a paywall? In this hands-on demo, Hasan Tariq, an AWS Solutions Architect, demonstrates how Amazon Bedrock AgentCore Payments enables an agent to pay for access using Stripe Privy.",
  },
  {
    title: "Supabase + Stripe Projects: build in a weekend, scale to millions",
    youtubeId: "-mIQWM7rMVM",
    event: "Stripe Sessions",
    description:
      "As a co-design partner with Stripe Projects, Supabase helps developers get from idea to running app in minutes, not hours. Gregor Vand describes how Supabase was built CLI-first and API-first from day one, for human developers who wanted to move fast. It turns out that's exactly what agents need as well.",
  },
  {
    title: "Chroma + Stripe Projects: a database built for agentic workflows",
    youtubeId: "tyaPM7GUsnM",
    event: "Stripe Sessions",
    description:
      "Products should make intentional design choices to improve agent experience, and Chroma is leading that charge. We talk with engineering lead Philip Thomas about efforts within Chroma to make the product agent-friendly.",
  },
  {
    title: "Infinite agents, infinite databases with Turso",
    youtubeId: "aHQDdPriMvA",
    event: "Stripe Sessions",
    description:
      "Agents produce an unfathomable amount of state. Each state is independent. If we see an explosion of agents, we will see an explosion of databases. Glauber Costa, CEO of Turso, talks about this agentic future.",
  },
  {
    title: "How Neon powers database workflows for AI agents",
    youtubeId: "24cuaxwWwvo",
    event: "Stripe Sessions",
    description:
      "We explore how AI agents change database workflows (from instant provisioning and branching to snapshots) and how Neon's serverless Postgres is designed for that style of work. We then tie those patterns to Stripe Projects: what builders need for their database as they ship projects using Stripe's CLI, and how Neon partners in that context.",
  },
  {
    title:
      "Building with Stripe: from core invoicing to custom actions and embedded components",
    youtubeId: "dsH7xAQzsy8",
    event: "Stripe Sessions",
    description:
      "Thibau De Rooze and Kjell Vermeersch discuss how Billit implemented Stripe's new Custom Workflows for Stripe Apps to give merchants more control while reducing operational complexity. They dive into how merchant empowerment shaped the technical design on both the Billit and Stripe sides, and how embedded components - such as invoice page views and full-page Stripe apps—allowed Billit to build features directly inside the Stripe ecosystem.",
  },
  {
    title: "OpenRouter + Stripe Projects: One API key, 300+ models, one bill",
    youtubeId: "w8fFgLpl4Mk",
    event: "Stripe Sessions",
    description:
      "One command, one key, 300+ models. Chris Watts of OpenRouter talks about how Stripe Projects makes adding OpenRouter to your app a non-event.",
  },
  {
    title: "Why MCP is the key to building with Supabase",
    youtubeId: "6pIiR7-TbJo",
    event: "Stripe Tour Singapore",
    description:
      "At Stripe Tour Singapore, we catch up with Gregor Vand from Supabase about life since launching as a Stripe Projects launch partner. We dig into how agents are adopting Supabase, from provisioning full accounts end to end to paying for them on their own, and why payments remains the biggest use case.",
  },
  {
    title:
      "How Imagine Art built a real-time collaborative AI content platform",
    youtubeId: "24GDj0cFPJY",
    event: "Stripe Tour Singapore",
    description:
      "In this interview from Stripe Tour Singapore, Ahmed Abubakar, Co-founder and CEO of ImagineArt, shares how his team evolved from a mobile app developer to building a comprehensive AI-powered content creation platform.",
  },
  {
    title:
      "Inside minions: how Stripe uses autonomous one-shot AI coding agents",
    youtubeId: "YXdBAaKC-Co",
    event: "Stripe",
    description:
      "In this video, Mark Doyle from Stripe's dev productivity for AI team explains how Stripe uses “minions,” its internal one-shot coding agents, to handle small, well-scoped engineering tasks from start to finish. The conversation covers how these agents work, when they're useful, how they differ from interactive coding tools, and the safeguards Stripe uses to keep them secure. You'll also see a live example of a minion making a simple UI change, opening a pull request, and preparing the change for review.",
  },
  {
    title: "Share a full app stack with Stripe Projects",
    youtubeId: "Zl1b0sAoErM",
    event: "Stripe Tour London",
    description:
      "We caught up with engineer Carl Flood at Tour London to talk all things Stripe Projects and how developers can stand up real infrastructure in just a few CLI commands.",
  },
  {
    title: "Bringing Stripe docs to agents",
    youtubeId: "PYUuaiumTh4",
    event: "Stripe",
    description:
      "Stripe is reimagining its documentation for a new kind of reader: the AI agent. In this conversation, we explore how the docs team keeps the same high bar for humans while making it dramatically easier for agents to find, parse, and act on the latest information.",
  },
  {
    title:
      "AWS On Air: Code Corner ft. Anna Spysz, TypeScript, App Composer, and Generative AI!",
    youtubeId: "lzRyDTdkCSU",
    event: "AWS On Air",
    description:
      "Live coding with TypeScript, Application Composer, and generative AI on the AWS Events channel.",
  },
];

export const audioInterviews = [
  {
    title: "DevOps Party Games - The Final Countdown",
    url: "https://devopspartygames.com/episodes/s02e08",
    show: "DevOps Party Games",
  },
  {
    title: "Episode 62: Serverless Storytelling with Anna Spysz",
    url: "https://podcasts.apple.com/us/podcast/episode-62-serverless-storytelling-with-anna-spysz/id1361244178?i=1000440051998",
    show: "Screaming in the Cloud with Corey Quinn",
  },
  {
    title: "Talking Serverless",
    url: "https://open.spotify.com/episode/3ftNup9rzqRzYzMSYk3dPc",
    show: "Talking Serverless with Ryan Jones",
  },
];

export const blogPosts = [
  {
    title: "From init to deploy: building with agents and Stripe Projects",
    url: "https://stripe.dev/blog/building-with-agents-stripe-projects",
    publication: "Stripe.dev",
  },
  {
    title: "Learnings from init to deploy",
    url: "https://stripe.dev/blog/learnings-from-building-with-agents-stripe-projects",
    publication: "Stripe.dev",
  },
  {
    title: "From hobby to real world: integrating the hard stuff with agents",
    url: "https://stripe.dev/blog/integrating-services-with-agents-stripe-projects",
    publication: "Stripe.dev",
  },
  {
    title: "Entering the World of AI Mechanics",
    url: "https://dev.to/annaspies/entering-the-world-of-ai-mechanics-3776",
    publication: "DEV",
  },
  {
    title: "My hands-on guide to migrating from CRA to Next.js",
    url: "https://dev.to/annaspies/rip-cra-now-what-1h9a",
    publication: "DEV",
  },
  {
    title: "Global State in Gatsby, or Having and Eating Your Cake, Too",
    url: "https://dev.to/annaspies/global-state-in-gatsby-or-having-and-eating-your-cake-too-3bjj",
    publication: "DEV",
  },
  {
    title: "Alexa, How Can I Win an Echo (and learn to build an Alexa app)?",
    url: "https://dev.to/annaspies/alexa-how-can-i-win-an-echo-and-learn-to-build-an-alexa-app-52c",
    publication: "DEV",
  },
  {
    title: "I used Cypress as an Xbox web scraper and I regret nothing",
    url: "https://dev.to/annaspies/i-used-cypress-as-an-xbox-web-scraper-and-i-regret-nothing-1bn4",
    publication: "DEV",
  },
  {
    title: "Top 10 Serverless Deployment Errors (and How to Fix Them)",
    url: "https://www.stackery.io/blog/top-10-deployment-errors/",
    publication: "Stackery",
  },
  {
    title: "Building Slack Bots for Fun: A Serverless Release Gong",
    url: "https://www.stackery.io/blog/serverless-gong/",
    publication: "Stackery",
  },
];
