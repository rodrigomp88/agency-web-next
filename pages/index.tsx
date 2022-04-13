import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/about";
import Contact from "../components/contact";
import Footer from "../components/footer";
import Header from "../components/header";
import Skills from "../components/skills";
import Trusted from "../components/trusted";
import Works from "../components/works";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Agencia Web.</title>
        <meta
          name="agencia web"
          content="agencia web desarrollo programacion correos tecnologia"
        />
        <link rel="icon" href="/icon.ico" />
      </Head>

      <Header />
      <About />
      <Skills />
      <Works />
      <Trusted />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
