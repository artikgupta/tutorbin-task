import React from "react";

function Hero({ aboutRef }) {
  return (
    <section class="home">
      <div class="bg flex wrap">
        <div class="container ">
          <article class="flex wrap center ">
            <div class="flex-60">
              <h1>
                Web Developer
                <br /> Conference <span class="active-color">2020</span>
              </h1>
              <p class="hero-text" ref={aboutRef}>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book
              </p>
              <div class="bg-btn">
                <a class="btn bg-btn " href="##">
                  Register Now
                </a>
              </div>
            </div>
            <div class="flex-30 image">
              <img class="flexible-img" src="/hero.png" alt="hero" />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Hero;
