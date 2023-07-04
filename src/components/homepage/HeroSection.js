import React from "react";
import { Link } from "react-router-dom";
import heroVideo from "../../img/hero.mp4";

export default function HeroSection() {
  const heroHeight = window.innerHeight - 160;

  console.log("gesamte höhe window", window.innerHeight);

  console.log("berechnete höhe hero element", heroHeight);

  console.log(
    "resultat - muss gleich sein mit window height",
    heroHeight + 160
  );

  return (
    <div>
      <div
        class="relative flex items-center justify-center pb-16 overflow-hidden"
        style={{ height: heroHeight }}
      >
        <div class="flex justify-center z-30 p-5 text-2xl text-white">
          <div className="flex flex-col justify-center items-center max-w-7xl">
            <h1 className="text-9xl font-bold text-primary w-auto">
              Hola Hello Olá Ciao
            </h1>
            <p className=" max-w-3xl py-6 text-5xl text-primary font-bold">
              The only language app you will ever need
            </p>
            <Link
              to="register"
              target="_blank"
              className="btn btn-primary text-lg"
            >
              Get Started
            </Link>
          </div>
        </div>
        <video
          autoPlay
          loop
          muted
          class="absolute z-10 w-auto min-w-full min-h-full max-w-none"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
