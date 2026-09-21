
import React from "react";

function Awards() {
  return (
    <div className="container p-5 mt-5">
      <div className="row">
        <div className="col-6 p-5">
          <h1 className="fs-2">Largest stock broker in India</h1>

          <p className="text-muted mt-4">
            1+ crore Zerodha clients contribute to over 15% of all retail
            trading volumes in India.
          </p>

          <p className="text-muted">
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
        </div>

        <div className="col-6 p-5 text-center">
          <img
            src="media/images/pressLogos.png"
            alt="Press logos"
            style={{ width: "90%" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Awards;