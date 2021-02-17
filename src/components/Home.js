import React from 'react';
import { Link } from 'react-router-dom';

import pic from '../_images/exp_univ_login_hero.svg';

const Home = () => (
  <div className="row">
    <div className="col-lg-8">
      <h1>
        Secure access for everyone.
        <br />
        But not just anyone.
      </h1>
      <p className="lead mb-4">
        Whether you’re a developer looking to innovate or a security
        professional looking to mitigate, we make identity work for everyone.
      </p>
      <Link className="btn btn-pill btn-primary" role="button" to="/">
        Learn more
      </Link>
    </div>
    <div className="col-lg-4">
      <img
        className="d-none d-lg-block float-right"
        width="100%"
        src={pic}
        alt=""
      />
    </div>
  </div>
);

export default Home;
