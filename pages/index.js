import Head from "next/head";
import Hero from "../components/hero";
import WhySection from "../components/why";
import AnalysisSection from "../components/analysis";
import Services from "./services";
import FooterSection from "../components/footer";

import classes from "../styles/Home.module.css";

function Home() {
  return (
    <div>
      <Head>
        <title>Prior Solutions LLC</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.jpg" />
        <link
          href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,300;0,400;0,700;1,100&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={classes.mainContainer}>
        <Hero />

        <div className={classes.stickyBox}>
          <div className={classes.background1}>
            <WhySection />
            <AnalysisSection />
          </div>
        </div>
        <div className={classes.stickyBox}>
          <Services />
          <FooterSection />
        </div>
      </div>
    </div>
  );
}

export default Home;
