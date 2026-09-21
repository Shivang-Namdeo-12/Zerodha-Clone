
import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center">
        <h1 className="mt-5">Invest in everything</h1>

        <p className="fs-5 text-muted mt-3">
          Online platform to invest in stocks, derivatives, mutual funds,
          ETFs, bonds, and more.
        </p>

        <div className="mt-4">
          <button className="btn btn-primary px-4">
            Sign up for free
          </button>
        </div>

        <div className="mt-5">
          <img
            src="media/images/homeHero.png"
            alt=""
            style={{ width: "80%" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
