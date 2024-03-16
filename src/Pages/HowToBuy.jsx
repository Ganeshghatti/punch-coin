import React from "react";

export default function HowToBuy() {
  return (
    <section id="HowToBuy" className="flex flex-col items-center relative">
      <p className="HowToBuy-title w-3/4 md:w-11/12 ml-16 md:ml-0">How To Buy</p>
      <div className="w-11/12 md:w-11/12 flex md:flex-col justify-between items-center">
        <div className="flex flex-col w-3/4 items-center md:items-stretch justify-center md:flex-row md:w-11/12 md:justify-between">
          <img src="./assets/HowToBuyArt.png" className="md:hidden w-11/12 object-cover" alt="" />
          <img
            src="./assets/HowToBuyArtphone.png"
            className="hidden md:block object-cover custom-width-30"
            alt=""
          />
          <div className="flex justify-evenly md:pb-12 md:flex-col md:w-2/3 custom-width-88 self-end md:self-auto">
            <p className="howtobuytext">
              <a href="https://radium.io/swap/">
                {" "}
                Open https://
                <br />
                radium.io/swap/
              </a>
            </p>
            <p className="howtobuytext">Connect your Solana wallet</p>
            <p className="howtobuytext">Click the Swap button</p>
          </div>
        </div>
        <img
          src="./assets/HowToBuyimg.png"
          className="w-1/4 md:w-11/12"
          alt=""
        />
      </div>
      <img
        src="./assets/Designs/howtobuystar.png"
        alt=""
        className="howtobuy-star"
      />
      <img
        src="./assets/Designs/howtobuystarphone.png"
        alt=""
        className="howtobuy-starphone"
      />
    </section>
  );
}