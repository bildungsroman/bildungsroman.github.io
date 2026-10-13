import { useEffect } from "react";
import data from "../data/data";

const setMeta = (selector, attribute, value) => {
  const element = document.head.querySelector(selector);
  if (element) {
    element.setAttribute(attribute, value);
  }
};

// Updates the static tags in index.html rather than rendering new ones, so
// crawlers that don't run JavaScript still see the defaults.
export const usePageMeta = ({ title, description, path }) => {
  useEffect(() => {
    const fullTitle = title
      ? `${title} | ${data.SiteTitle}`
      : `${data.SiteTitle} | ${data.SiteTagline}`;
    const url = `${data.SiteUrl}${path}`;
    document.title = fullTitle;
    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:title"]', "content", fullTitle);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:url"]', "content", url);
    setMeta('link[rel="canonical"]', "href", url);
  }, [title, description, path]);
};
