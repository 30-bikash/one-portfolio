import About from "./components/About";
import Blogs from "./components/Blogs";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Contact from "./components/Contact";

import SocialLinks from "./components/SocialLinks";


function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Blogs />
      <Experience />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
