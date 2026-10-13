import About from "../components/About";
import { usePageMeta } from "../hooks/usePageMeta";
import data from "../data/data";

const Home = () => {
  usePageMeta({ description: data.SiteDescription, path: "/" });
  return (
    <>
      <About />
    </>
  );
};

export default Home;
