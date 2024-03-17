import React from "react";

export default function Roadmap() {
  return (
    <section
      id="Roadmap"
      className="flex items-center justify-center py-24 relative md:py-16"
    >
      <div className="w-4/5 flex flex-col gap-4 md:w-11/12">
        <p className="roadmap-title">ROADMAP</p>
        <p className="roadmap-description w-3/4 md:w-11/12">
          In the electrifying arena of meme coins, our ultimate quest is clear:
          to outmaneuver, outlast, and out PUNCH them all. We're not just
          throwing jabs in the dark; we're crafting a legacy of strength,
          strategy, and unity.
        </p>
        <div className="flex justify-between md:flex-col">
          <div className="flex justify-between mt-6 w-1/4 flex-col md:w-full md:gap-6">
            <div className="flex gap-4 h-2/5 items-center">
              <p className="roadmap-card-title">1</p>
              <p className="roadmap-card-description">
                Training Wheels Off (Launch)
              </p>
            </div>
            <div className="flex gap-4 h-2/5 items-center">
              <p className="roadmap-card-title">2</p>
              <p className="roadmap-card-description">
                Lock Horns with CEX (Exchange Listing){" "}
              </p>
            </div>
          </div>
          <img src="/assets/roadmapimg.png" alt="" className="w-1/4 h-full md:w-full" />
          <div className="flex justify-between mt-6 w-1/4 flex-col md:w-full md:gap-6">
            <div className="flex gap-4 h-2/5 items-center">
              <p className="roadmap-card-title">3</p>
              <p className="roadmap-card-description">
                Punch the Moon (Rapid Growth){" "}
              </p>
            </div>
            <div className="flex gap-4 h-2/5 items-center">
              <p className="roadmap-card-title">4</p>
              <p className="roadmap-card-description">
                Training for the Main Event (Preparation for Final){" "}
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-4 self-center items-center md:w-full">
          <p className="roadmap-card-title">5</p>
          <p className="roadmap-card-description">
            Uppercut to Victory<br/> (Champion of Blast Memecoins){" "}
          </p>
        </div>
      </div>
    </section>
  );
}
