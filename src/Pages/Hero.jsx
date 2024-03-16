import React, { useState } from "react";

export default function Hero() {
  const [scale, setscale] = useState({ scale: 1 });

  const scalehandleClick = () => {
    setscale((prevState) => ({
      scale: 0.9,
    }));
  };
  return (
    <section
      id="hero"
      className="h-screen w-screen flex items-center md:flex-col md:justify-end"
    >
      <img
        src="./assets/Designs/herostar3.png"
        className="hero-star3 w-fit"
        alt=""
      />
      <p className="hero-scrolldown-text md:hidden">SCROLL DOWN</p>
      <div className="hero-scrollicon-div md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="38"
          height="38"
          viewBox="0 0 38 38"
          fill="none"
          className="md:hidden"
        >
          <path
            d="M9.5 23.75C9.5 26.2696 10.5009 28.6859 12.2825 30.4675C14.0641 32.2491 16.4804 33.25 19 33.25C21.5196 33.25 23.9359 32.2491 25.7175 30.4675C27.4991 28.6859 28.5 26.2696 28.5 23.75V14.25C28.5 11.7304 27.4991 9.31408 25.7175 7.53248C23.9359 5.75089 21.5196 4.75 19 4.75C16.4804 4.75 14.0641 5.75089 12.2825 7.53248C10.5009 9.31408 9.5 11.7304 9.5 14.25V23.75Z"
            stroke="white"
            stroke-width="1.5"
            stroke-linejoin="round"
          />
          <path
            d="M19 26.918V20.5846"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div className="hero-left w-2/5 flex flex-col gap-4 justify-center md:w-11/12" style={{marginLeft:"10vw"}}>
        <p className="hero-left-heading">
          BLAST
          <br />
          <span className="hero-left-heading-yellow">PUNCH</span>
        </p>
        <p className="hero-left-description w-11/12">
          Lorem ipsum dolor sit amet consectetur. Maecenas cursus turpis
          ultrices imperdiet. Facilisis risus elementum tristique nulla enim
          massa sit maecenas.
        </p>
        <a href="https://www.google.com/" onClick={scalehandleClick}>
          <button
            className="button-yellow-filled"
            style={{
              transform: `scale(${scale.scale})`,
              transition: "transform 0.3s ease",
            }}
          >
            Buy Now
          </button>
        </a>
        <a href="https://www.google.com/" onClick={scalehandleClick}>
          <img
            src="./assets/Herobuttonphone.png"
            className="w-fit cursor-pointer hidden md:block absolute right-0"
            alt="buy now"
            style={{
              transform: `scale(${scale.scale})`,
              transition: "transform 0.3s ease",
            }}
          />
        </a>
      </div>
      <img
        src="./assets/Heroimg.png"
        className="md:w-full hero-img right-0 bottom-0 w-3/5 object-conain"
        alt="Punch"
      />
    </section>
  );
}
