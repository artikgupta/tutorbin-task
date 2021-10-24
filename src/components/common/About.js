import React from 'react'

function About ({ aboutRef}) {
  return (
    <section class="about padding">
      <div class="container flex wrap">
        <div class="flex-40">
          <img class="flexible-img" src="/about.png" alt="idea" />
        </div>
        <div class="flex-50 about-content">
          <h2 class="abt-heading">ABOUT THE EVENT</h2>
          <p class="abt-text" ref={aboutRef}>World's richest person Elon Musk on Twitter said that he'll become the first Dogecoin trillionaire. Responding to a tweet which said, "Musk is predicted to become the world's first trillionaire, thanks to SpaceX", the CEO of Tesla and SpaceX wrote, "In Dogecoin". Earlier, Musk had revealed that he personally owned Bitcoin, Ether and the meme-inspired cryptocurrency Dogecoin.</p>
          <a class="btn" href="##">Know More</a>
        </div>
      </div>
    </section>

  )
}

export default About
