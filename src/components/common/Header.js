import React from "react";

function Header({ search, searchBoxRef, searchHandler }) {
  return (
    <header class="header">
      <div class="container flex">
        <a href="##" class="brand">
          <strong>TutorBin Task</strong>
        </a>

        <input type="checkbox" id="toggle" />
        <nav class="nav">
          <input
            type="text"
            id="search"
            name="search"
            ref={searchBoxRef}
            placeholder="Enter a word (ctrl + /)"
            value={search}
            onChange={searchHandler}
          />
        </nav>
      </div>
    </header>
  );
}

export default Header;
