import React from 'react';
import { Helmet } from "react-helmet"
import Banner from '../components/banner';
import Projects from '../components/projects';
import Footer from '../components/footer';

export default () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Param's Portfolio</title>
      </Helmet>
      <Banner />
      <Projects />
      <Footer />
    </div>
  );
}