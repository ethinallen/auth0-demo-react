import React from 'react';
import { Link } from 'react-router-dom';

import { PATH_CDN } from '../utils/Constants';

const Home = () => (
  <div className="row">
    <div className="col-lg-8">
      <h1>
        Secure access for everyone.
        <br />
        But not just anyone.
      </h1>
      <p className="lead mb-4">
        Auth0 is an industry-leading identity management platform that provides secure user 
        authentication and authorization services for web, mobile, and legacy applications. 
        With support for social logins and integration with various programming languages and 
        frameworks, Auth0 enables developers and security professionals to easily implement 
        multifactor authentication and other advanced security features. With Auth0, you can 
        ensure secure access for everyone, but not just anyone.
      </p>
      <Link className="btn btn-pill btn-primary" role="button" to="/">
        Learn more
      </Link>
    </div>
    <div className="col-lg-4">
      <img
        className="d-none d-lg-block float-right"
        width="100%"
        src={PATH_CDN + '/images/exp_univ_login_hero.svg'}
        alt=""
      />
    </div>
  </div>
);

export default Home;
