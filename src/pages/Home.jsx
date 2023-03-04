import {Hero,Trending,Blogs,Members,Contact} from "../components/home"

const Home = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <Trending />
      <Blogs />
      <Members />
      <Contact />
    </div>
  );
};

export default Home;