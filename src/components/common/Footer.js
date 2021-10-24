import React from 'react';

function Footer () {
  return (
    <><footer class="padding">
      <div class="container flex column">
        <a href="##" class="brand"><strong>TutorBin Task</strong></a>
        <nav>
          <h5>Quick Links</h5>
          <ul class="flex footer-nav column">
            <li><a href="##">Program</a></li>
            <li><a href="##">About Us</a></li>
            <li><a href="##">Contact Us </a></li>
            <li><a href="##">Services</a></li>
          </ul>
        </nav>

        <div class="social-links text-center">
          <h5>Follow Us</h5>
          <div class="social">
            <a href="##"><i class="fab fa-facebook-square"></i></a>
            <a href="##"><i class="fab fa-twitter-square"></i></a>
          </div>

        </div>
      </div>
    </footer>
      <div class="sub-footer">
        <small>&copy;TutorBin 2021-present</small>
      </div>
    </>
  );
}

export default Footer;
