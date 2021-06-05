import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './nav/Nav';
import TrustAndExperience from './TrustAndExperience';
import Particles from 'react-particles-js';
export default function Hero() {
  return (
    <div className="hero">
      <div className="heroDarkLayer d-flex container-fluid">
        <Nav />
        <div className="heroText text-center w-100 h-50  d-flex flex-column text-white justify-content-center">
          <p className="font-weight-bold h5">Get in touch</p>
          <TrustAndExperience />

          <p className="mb-4 h6">
            Tailored to your career goals and busy schedule
          </p>
          <Link to="/register">
            <button className="btn EnrolButton ">Enrol now</button>
          </Link>
        </div>
        <Particles
          width={'100%'}
          height={'100%'}
          params={{
            particles: {
              number: {
                value: 90,
                density: {
                  enable: true,
                  value_area: 1000,
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
}
