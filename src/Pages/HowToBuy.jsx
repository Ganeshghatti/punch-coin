import React from "react";

export default function HowToBuy() {
  return (
    <section id="HowToBuy" className="flex flex-col items-center relative gap-4">
      <div className="gifBackground"></div>

      <p className="HowToBuy-title w-3/4 md:w-11/12 flex items-end md:flex-wrap">
        HOW TO{" "}
        <img
          src="/assets/HowToBuyHeading.png"
          alt="BUY"
          className="md:hidden"
        />
        <img
          src="/assets/HowToBuyHeadingphone.png"
          alt="BUY"
          className="hidden md:block"
        />
      </p>
      <p className="HowToBuy-description w-3/4 md:w-11/12">
        Lace up, step into the ring, and feel the electric buzz of anticipation.
        <br className="md:hidden" />
        Here's how to PUNCH with precision and power.
      </p>
      <div className="w-3/4 md:w-11/12 flex mt-8 flex-col">
        <div className="flex w-3/4 items-center md:w-11/12 justify-between md:hidden HowToBuy-art-div">
          <img src="./assets/HowToBuyimg1.png" alt="" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            className="md:hidden"
          >
            <path
              d="M25 42.5L37.5 30L25 17.5"
              stroke="white"
              stroke-opacity="0.3"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            className="md:hidden"
          >
            <path
              d="M25 42.5L37.5 30L25 17.5"
              stroke="white"
              stroke-opacity="0.6"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            className="md:hidden"
          >
            <path
              d="M25 42.5L37.5 30L25 17.5"
              stroke="white"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>{" "}
          <img src="./assets/HowToBuyimg2.png" alt="" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            className="md:hidden"
          >
            <path
              d="M25 42.5L37.5 30L25 17.5"
              stroke="white"
              stroke-opacity="0.3"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            className="md:hidden"
          >
            <path
              d="M25 42.5L37.5 30L25 17.5"
              stroke="white"
              stroke-opacity="0.6"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            className="md:hidden"
          >
            <path
              d="M25 42.5L37.5 30L25 17.5"
              stroke="white"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <img src="./assets/HowToBuyimg3.png" alt="" />
        </div>
        <div className="md:flex w-11/12 items-start flex-col gap-6 hidden HowToBuy-art-div-phone">
          <img src="./assets/HowToBuyimg1.png" alt="" />
          <a href="https://app.thruster.finance" className="howtobuytext-phone">
            Open https://
            <br />
            app.thruster.finance/
          </a>
          <img src="./assets/HowToBuyimg2.png" alt="" />
          <p className="howtobuytext-phone">
            Connect your
            <br className="md:hidden" /> EVM wallet
          </p>
          <img src="./assets/HowToBuyimg3.png" alt="" />
          <p className="howtobuytext-phone">
            Click the
            <br className="md:hidden" /> Swap button
          </p>
        </div>
        <div className="HowToBuyText-div flex justify-between md:hidden custom-width-88">
          <a href="https://app.thruster.finance" className="howtobuytext">
            Open https://
            <br />
            app.thruster.finance/
          </a>
          <p className="howtobuytext">
            Connect your
            <br className="md:hidden" /> EVM wallet
          </p>
          <p className="howtobuytext">
            Click the
            <br className="md:hidden" /> Swap button
          </p>
        </div>
      </div>
    </section>
  );
}
