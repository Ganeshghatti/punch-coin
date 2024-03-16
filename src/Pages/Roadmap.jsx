import React from "react";

export default function Roadmap() {
  return (
    <section
      id="Roadmap"
      className="flex items-center justify-center py-24 relative"
    >
      {" "}
      <img
        src="./assets/Designs/roadmapstar1.png"
        alt=""
        className="roadmap-star1"
      />
      <img
        src="./assets/Designs/roadmapstar2.png"
        alt=""
        className="roadmap-star2"
      />
      <img
        src="./assets/Designs/roadmapstar3.png"
        alt=""
        className="roadmap-star3"
      />
      <div className="w-4/5 flex flex-col gap-6 md:w-11/12">
        <p className="roadmap-title">Roadmap</p>
        <p className="roadmap-description">
          Embarking on a journey sprinkled with laughter, creativity, and shared
          milestones, the SOLI roadmap is not just a path but a rollercoaster
          ride through the cosmos of camaraderie and mirth. Picture this: a
          constellation where each star is a giggle, every nebula a burst of
          creativity, and planets are milestones of communal triumphs.
          <br className="hidden md:block" /> Our mission? To weave a tapestry of
          moments that sparkle with humor, unity, and the kind of fun that
          echoes in the infinite digital universe.
        </p>
        <div className="flex justify-between flex-wrap gap-y-12 mt-6">
          <div className="roadmap-card">
            <img
              src="./assets/roadmapcard1.png"
              alt=""
              className="w-full object-cover"
            />
            <div className="flex flex-col gap-2 absolute items-center">
              <p className="roadmap-card-title">Launch Party</p>
              <p className="roadmap-card-description">
                Celebrate SOLI's debut with online festivities and meme
                contests.
              </p>
            </div>
          </div>{" "}
          <div className="roadmap-card">
            <img
              src="./assets/roadmapcard2.png"
              alt=""
              className="w-full object-cover"
            />
            <div className="flex flex-col gap-2 absolute items-center">
              <p className="roadmap-card-title">Moon Mission</p>
              <p className="roadmap-card-description">
                Collective effort to increase SOLI's value and reach a "moon"
                milestone.
              </p>
            </div>
          </div>{" "}
          <div className="roadmap-card">
            <img
              src="./assets/roadmapcard3.png"
              alt=""
              className="w-full object-cover"
            />
            <div className="flex flex-col gap-2 absolute items-center">
              <p className="roadmap-card-title">Meme Marathon</p>
              <p className="roadmap-card-description">
                A global challenge to create and share the funniest SOLI memes.
              </p>
            </div>
          </div>{" "}
          <div className="roadmap-card">
            <img
              src="./assets/roadmapcard4.png"
              alt=""
              className="w-full object-cover"
            />
            <div className="flex flex-col gap-2 absolute items-center">
              <p className="roadmap-card-title">Comedy Night</p>
              <p className="roadmap-card-description">
                A global challenge to create and share the funniest SOLI memes.
              </p>
            </div>
          </div>{" "}
          <div className="roadmap-card">
            <img
              src="./assets/roadmapcard5.png"
              alt=""
              className="w-full object-cover"
            />
            <div className="flex flex-col gap-2 absolute items-center">
              <p className="roadmap-card-title">Treasure Hunt</p>
              <p className="roadmap-card-description">
                Organize a SOLI-themed virtual treasure hunt with clues hidden
                in memes.
              </p>
            </div>
          </div>{" "}
          <div className="roadmap-card">
            <img
              src="./assets/roadmapcard6.png"
              alt=""
              className="w-full object-cover"
            />
            <div className="flex flex-col gap-2 absolute items-center">
              <p className="roadmap-card-title">SOLI Fest</p>
              <p className="roadmap-card-description">
                End with a virtual festival celebrating the community's
                achievements and laughter.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
