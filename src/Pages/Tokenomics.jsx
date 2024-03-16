import React from "react";

export default function Tokenomics() {
  return (
    <section
      id="Tokenomics"
      className="w-full h-auto flex flex-col items-center gap-4 relative"
    >
      <div className="flex flex-col gap-6 w-4/5 md:w-11/12">
        <p className="tokenomics-title">Tokenomics</p>
        <p className="tokenomics-description w-3/5 md:w-full">
          Experience the heart of community-driven success with SOLI, where
          equitable distribution reigns supreme. Our tokenomics are designed to
          ensure everyone in our community thrives together, building a
          stronger, more inclusive future
        </p>
      </div>
      <div className="flex w-4/5 md:w-11/12 md:flex-col justify-between">
        <img
          src="./assets/Tokenomicsimg.png"
          alt="tokenomics"
          className="custom-width-55 md:w-full"
        />
        <div className="flex flex-wrap custom-width-45 md:w-full justify-between md:gap-6">
          <div className="tokenomics-card1">
            <img
              src="./assets/Tokenomics/card1.png"
              className="w-full h-full object-contain"
              alt=""
            />
            <p className="tokenomics-card-text">
              Contract
              <br /> renounced
            </p>
          </div>
          <div className="tokenomics-card2">
            <img
              src="./assets/Tokenomics/card2.png"
              className="w-full h-full object-contain"
              alt=""
            />
            <p className="tokenomics-card-text">
              Buy/Sell
              <br /> Tax 0%
            </p>
          </div>
          <div className="tokenomics-card3">
            <img
              src="./assets/Tokenomics/card3.png"
              className="w-full h-full object-contain"
              alt=""
            />
            <p className="tokenomics-card-text">
              Liquidity
              <br /> Burnt
            </p>
          </div>
          <div className="tokenomics-card4">
            <img
              src="./assets/Tokenomics/card4.png"
              className="w-full h-full object-contain"
              alt=""
            />
            <p className="tokenomics-card-text">
              Total Supply
              <br /> 1,000,000,000
              <br /> $SOLI
            </p>
          </div>
        </div>
      </div>
      <div className="w-1/2 md:w-11/12 flex flex-col gap-4 tokenomics-contact-div">
        <p className="tokenomics-contact-title">Contract Address</p>
        <p className="tokenomics-contact-id">
          0x2aD0a7a66E97Ae99Bc7f774
          <br className="hidden md:block" />
          9e753B6E1fed45FBf
        </p>
      </div>
      <img
        src="./assets/Designs/tokenomics1.png"
        alt=""
        className="tokenomics-star1"
      />
      <img
        src="./assets/Designs/tokenomics2.png"
        alt=""
        className="tokenomics-star2"
      />
      <img
        src="./assets/Designs/tokenomics3.png"
        alt=""
        className="tokenomics-star3"
      />
      <img
        src="./assets/Designs/tokenomicsphonestar.png"
        alt=""
        className="tokenomicsphonestar"
      />
    </section>
  );
}
