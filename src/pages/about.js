import React from 'react';
import Layout from '../components/layout';

import logo from '../images/logo-500x500.png';

const AboutPage = () => (
    <Layout>
      <h1>About</h1>
      <div align="center"><img src={logo} alt="Civic Hackathons Logo" /></div>
      <p>Dedicated to helping civic organizations engage with their community and tackle challenging civic issues.</p>
    </Layout>
  )
  
  export default AboutPage