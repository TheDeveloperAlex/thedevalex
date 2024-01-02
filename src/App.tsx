import React from "react";

import Header from "./header";
import Hero from "./sections/hero";
import Advantages from "./sections/advantages";
import MyProjects from "./sections/myProjects";
import Collectively from "./sections/collectively";
import Footer from "./footer";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Advantages />
        <MyProjects />
        <Collectively />
      </main>
      <Footer />
    </div>
  );
}

export default App;
