import React from 'react';
import Layout from '../components/layout';
import { Link } from 'gatsby';

import logo from '../images/logo-500x500.png';

const AboutPage = () => (
    <Layout>
      <h1>About</h1>
      <div align="center"><img src={logo} alt="Civic Hackathons Logo" /></div>
      <p>
        Civic Hackathons was created to help give you the resources and information needed to run a successful civic-oriented hackathon. 
        These hackathons are a great opportunity to engage with your community and tackle challenging civic issues together.
        The information and resources on this site are compiled from other organizations that have successfully run civic hackathons.
      </p>
      <p>Want to help? Check out our <a href="https://github.com/civichackathons">github</a> or <Link to="/contact">send us a message</Link>!</p>
    </Layout>
  )
  
export default AboutPage