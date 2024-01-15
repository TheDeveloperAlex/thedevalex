import React, { useRef } from "react";

import Header from "./header";
import Hero from "./sections/hero";
import Advantages from "./sections/advantages";
import MyProjects from "./sections/myProjects";
import Collectively from "./sections/collectively";
import Footer from "./footer";

import "./App.css";

function App() {
  const refAdvantages = useRef(null);
  return (
    <div>
      <Header />
      <div className="pseudo-element-header-circle"></div>
      <main>
        <Hero refAdvantages={refAdvantages} />
        <Advantages refAdvantages={refAdvantages} />
        <MyProjects />
        <Collectively />
      </main>
      <Footer />
    </div>
  );
}

export default App;
