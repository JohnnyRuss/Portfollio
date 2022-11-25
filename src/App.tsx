import { Suspense } from "react";
import Navigation from "./Components/Navigation/Navigation";
import Intro from "./Components/Intro/Intro";
import Bio from "./Components/Bio/Bio";
import Skills from "./Components/Skills/Skills";
import Portfollio from "./Components/Portfollio/Portfollio";
import Contact from "./Components/Contact/Contact";
import Spinner from "./Components/Spinner/Spinner";

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Navigation />
      <Intro />
      <Bio />
      <Skills />
      <Portfollio />
      <Contact />
    </Suspense>
  );
}

export default App;
