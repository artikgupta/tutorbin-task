import { useState, useRef, useEffect } from "react";

import Header from "./components/common/Header";
import Hero from "./components/common/Hero";
import About from "./components/common/About";
import Footer from "./components/common/Footer";

function App() {
  const [search, setSearch] = useState("");
  const aboutRef = useRef(null);
  const searchBoxRef = useRef(null);

  useEffect(() => {
    window.addEventListener("keydown", focusToInput);
    return () => {
      window.removeEventListener("keydown", focusToInput);
    };
  }, []);

  const focusToInput = (e) => {
    if (e.ctrlKey && e.keyCode === 191 && searchBoxRef.current) {
      searchBoxRef.current.focus();
    }
  };

  const searchHandler = (e) => {
    const userInput = e.target.value;
    const aboutText = aboutRef.current.innerText;

    if (userInput.length > 2) {
      const searchPatternRegex = new RegExp(userInput, "ig");

      const updatedText = aboutText.replaceAll(
        searchPatternRegex,
        (_, startIndex) => {
          const words = aboutText.slice(
            startIndex,
            startIndex + userInput.length
          );
          return `<span class="highlight">${words}</span>`;
        }
      );

      aboutRef.current.innerHTML = updatedText;
    }

    setSearch(userInput);
  };

  return (
    <>
      <Header
        search={search}
        searchBoxRef={searchBoxRef}
        searchHandler={searchHandler}
      />
      <Hero aboutRef={aboutRef} />
      <About />
      <Footer />
    </>
  );
}

export default App;
