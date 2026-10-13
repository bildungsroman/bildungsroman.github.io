import iffappLight from "../assets/img/apps/iffapp-light.webp";
import iffappDark from "../assets/img/apps/iffapp-dark.webp";
import contentsNotDeadLight from "../assets/img/apps/contentsnotdead-light.webp";
import contentsNotDeadDark from "../assets/img/apps/contentsnotdead-dark.webp";

// Snapshots are 1280x800. To refresh one, screenshot the live site and run
// `npm run optimize-images -- <file.png> --out src/assets/img/apps --width 1280`.
export default [
  {
    name: "iffapp",
    url: "https://iffapp.com",
    description:
      'A "get-to-do" list rather than a to-do list: you get to do a thing if and only if you complete the tasks you need to do first.',
    tags: ["Next.js", "React", "Clerk", "Prisma", "Stripe"],
    images: { light: iffappLight, dark: iffappDark },
  },
  {
    name: "Content's Not Dead",
    url: "https://contentsnotdead.com",
    description:
      "An open-source, themeable content platform monetized with Stripe subscriptions and per-content Machine Payments Protocol (MPP) payments, for humans and agents alike.",
    tags: ["Stripe", "MPP", "Agents", "Open source"],
    images: { light: contentsNotDeadLight, dark: contentsNotDeadDark },
  },
];
