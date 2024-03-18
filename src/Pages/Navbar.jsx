import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";

export default function Navbar() {
  const [menu, setmenu] = useState(false);
  const [scale, setscale] = useState({ scale: 1 });

  const scalehandleClick = () => {
    setscale((prevState) => ({
      scale: 0.9,
    }));
  };
  const menuf = () => {
    setmenu(!menu);
  };

  return (
    <nav
      id="navbar"
      className="absolute top-0 left-0 w-screen flex justify-between lg:justify-between md:justify-between items-center py-6 lg:px-8 z-50 md:px-6 pl-40 pr-28"
    >
      {menu && (
        <>
          <div
            className="fixed w-screen h-screen top-0 left-0 z-30"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.353)" }}
            onClick={menuf}
          />
          <ul className="flex flex-col fixed z-50 justify-center gap-12 left-0 top-0 items-center navbar-phone-sidemenu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className={`z-50 absolute cursor-pointer  top-8 text-white right-7 ${
                menu ? "block" : "hidden"
              }`}
              onClick={menuf}
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.851 7.00118C18.9366 6.91983 19.0044 6.82324 19.0507 6.71692C19.0971 6.6106 19.1209 6.49664 19.121 6.38153C19.1211 6.26642 19.0974 6.15242 19.0512 6.04605C19.005 5.93967 18.9373 5.843 18.8518 5.76156C18.7664 5.68011 18.665 5.61549 18.5534 5.57137C18.4417 5.52726 18.3221 5.50452 18.2012 5.50445C18.0803 5.50437 17.9606 5.52698 17.849 5.57096C17.7373 5.61495 17.6358 5.67945 17.5502 5.7608L11.9998 11.0469L6.45104 5.7608C6.27833 5.59631 6.04409 5.50391 5.79984 5.50391C5.55559 5.50391 5.32135 5.59631 5.14864 5.7608C4.97593 5.92528 4.87891 6.14837 4.87891 6.38099C4.87891 6.6136 4.97593 6.83669 5.14864 7.00118L10.699 12.2857L5.14864 17.5703C5.06313 17.6518 4.99529 17.7485 4.94901 17.8549C4.90273 17.9613 4.87891 18.0753 4.87891 18.1905C4.87891 18.3057 4.90273 18.4197 4.94901 18.5262C4.99529 18.6326 5.06313 18.7293 5.14864 18.8107C5.32135 18.9752 5.55559 19.0676 5.79984 19.0676C5.92078 19.0676 6.04054 19.0449 6.15227 19.0008C6.264 18.9568 6.36553 18.8921 6.45104 18.8107L11.9998 13.5246L17.5502 18.8107C17.723 18.975 17.9571 19.0672 18.2012 19.0671C18.4453 19.0669 18.6793 18.9744 18.8518 18.8099C19.0243 18.6455 19.1212 18.4224 19.121 18.19C19.1209 17.9575 19.0237 17.7346 18.851 17.5703L13.3006 12.2857L18.851 7.00118Z"
                fill="white"
              />
            </svg>
            <li>
              <a href="/#Tokenomics" onClick={menuf}>
                Tokenomics
              </a>
            </li>
            <li>
              <a href="/#HowToBuy" onClick={menuf}>
                How to buy
              </a>
            </li>
            <li>
              <a href="/#Roadmap" onClick={menuf}>
                Roadmap
              </a>
            </li>
            <div className="flex gap-12 items-center flex-col">
              <div className="flex gap-6">
                <a href="https://twitter.com/BlstPunch">
                  <img src="/assets/twitter.png" alt="" />
                </a>
                <a href="https://t.me/BlastPnch">
                  <img src="/assets/telegram.png" alt="" />
                </a>
              </div>
              <a href="https://www.google.com/" onClick={scalehandleClick}>
                <button
                  className="button-filled"
                  style={{
                    transform: `scale(${scale.scale})`,
                    transition: "transform 0.3s ease",
                  }}
                >
                  Buy Now
                </button>
              </a>
            </div>
          </ul>
        </>
      )}
      <div className="flex items-center" style={{ gap: "6vw" }}>
        <img src="./assets/logo.png" className="navbar-logo cursor-pointer" />
        <ul
          className="flex z-50 justify-around items-center md:hidden navbar-pc-menu"
          style={{ gap: "4vw" }}
        >
          <li>
            <a href="/#Tokenomics">Tokenomics</a>
          </li>
          <li>
            <a href="/#HowToBuy">How to buy</a>
          </li>
          <li>
            <a href="/#Roadmap">Roadmap</a>
          </li>
        </ul>
      </div>

      <div className="flex gap-8 items-center md:hidden">
        <a href="https://twitter.com/Soli_inu">
          <img src="/assets/twitter.png" alt="" />
        </a>
        <a href="http://t.me/soli_inu">
          <img src="/assets/telegram.png" alt="" />
        </a>
        <a href="https://www.google.com/" onClick={scalehandleClick}>
          <button className="button-filled">Buy Now</button>
        </a>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        className={`hidden cursor-pointer md:block text-white ${
          !menu ? "block" : "hidden"
        }`}
        onClick={menuf}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 21.3333H28V24H4V21.3333ZM4 14.6667H28V17.3333H4V14.6667ZM4 8H28V10.6667H4V8Z"
          fill="white"
        />
      </svg>
    </nav>
  );
}
