import React, { useEffect, useState } from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link, useLocation } from "react-router-dom";
import MailIcon from "@mui/icons-material/Mail";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="flex flex-col justify-between items-center w-full py-8 relative gap-8"
    >
      <div className="relative flex flex-col w-full justify-center items-center">
        <img
          src="/assets/footerboxergif.gif"
          alt=""
          className="w-3/4 md:w-11/12"
        />
        <div className="footer-div1-div1 flex gap-16">
          <p className="footer-div1-div1-text">PUNCH BLAST</p>
          <p className="footer-div1-div1-text">PUNCH BLAST</p>
          <p className="footer-div1-div1-text">PUNCH BLAST</p>
          <p className="footer-div1-div1-text">PUNCH BLAST</p>
          <p className="footer-div1-div1-text">PUNCH BLAST</p>{" "}
          <p className="footer-div1-div1-text">PUNCH BLAST</p>
          <p className="footer-div1-div1-text">PUNCH BLAST</p>
          <p className="footer-div1-div1-text">PUNCH BLAST</p>
          <p className="footer-div1-div1-text">PUNCH BLAST</p>
          <p className="footer-div1-div1-text">PUNCH BLAST</p>{" "}
          <p className="footer-div1-div1-text">PUNCH BLAST</p>
          <p className="footer-div1-div1-text">PUNCH BLAST</p>
          <p className="footer-div1-div1-text">PUNCH BLAST</p>
          <p className="footer-div1-div1-text">PUNCH BLAST</p>
          <p className="footer-div1-div1-text">PUNCH BLAST</p>{" "}
          <p className="footer-div1-div1-text">PUNCH BLAST</p>
          <p className="footer-div1-div1-text">PUNCH BLAST</p>
          <p className="footer-div1-div1-text">PUNCH BLAST</p>
          <p className="footer-div1-div1-text">PUNCH BLAST</p>
          <p className="footer-div1-div1-text">PUNCH BLAST</p>
        </div>
      </div>
      <div className="flex w-3/4 md:w-11/12 justify-between items-center md:items-start footer-div2-div2 mt-36 md:mt-16 md:flex-col md:gap-6">
        <p className="footer-title w-1/3">$PUNCH</p>
        <div className="flex flex-col w-2/3 gap-8 md:items-start">
          <ul className="flex justify-around items-center md:flex-col md:gap-6">
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
          <div className="flex gap-8 items-center justify-center">
            <a href="https://twitter.com/BlstPunch">
              <img src="/assets/twitter.png" alt="" />
            </a>
            <a href="https://t.me/BlastPnch">
              <img src="/assets/telegram.png" alt="" />
            </a>
          </div>
        </div>
      </div>
      <img src="/assets/footergif.gif" alt="" className="w-full" />
    </footer>
  );
}
