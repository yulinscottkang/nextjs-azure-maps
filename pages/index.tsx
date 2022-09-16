import type { NextPage } from "next";
import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("../components/Map"), {
  ssr: false,
});

const Home: NextPage = () => <DynamicMap />;

export default Home;
