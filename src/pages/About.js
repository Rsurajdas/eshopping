import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import { useResolvedPath } from "react-router-dom";
import capitalize from "lodash.capitalize";
import TextBlock from "../components/TextBlock/TextBlock";
import Teams from "../components/team/Teams";
import Features from "../components/feature/Features";

const About = () => {
  const { pathname } = useResolvedPath();
  return (
    <>
      <Breadcrumb slug={capitalize(pathname.slice(1))} />
      <TextBlock />
      <Teams />
      <Features />
    </>
  );
};

export default About;
