import React, { useRef } from "react";

import Header from "./header";
import Hero from "./sections/hero";
import PseudoElementHeaderCircle from "./components/pseudoElementHeaderCircle";
import Advantages from "./sections/advantages";
import MyProjects from "./sections/myProjects";
import Collectively from "./sections/collectively";
import Footer from "./footer";

function App() {
  const refAdvantages = useRef(null);
  return (
    <div>
      <Header />
      <PseudoElementHeaderCircle />
      <main>
        <Hero refAdvantages={refAdvantages} />
        <Advantages refAdvantages={refAdvantages} />
        {/* <MyProjects /> */}
        <Collectively />
      </main>
      <Footer />
    </div>
  );
}

export default App;
