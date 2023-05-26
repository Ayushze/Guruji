import React from "react";
import Navbar from "./Navbar";

function NavbarPage() {
  return (
    <>
      <div className="nb">
        <Navbar title="Guruji" home="Home" contact="Contact" />
        <h1 className="head1">Astrology for clarity</h1>
        <pre className="para1">
          The name is vedic astrologer and has expertise in vasstu and mantra
          therapy
        </pre>
        <button type="button" class="btn btn-warning">
          Consult now
        </button>
      </div>
    </>
  );
}

export default NavbarPage;
