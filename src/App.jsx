import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import AboutMe from "./components/aboutme/AboutMe";
import Employment from "./components/employment/Employment";
import Education from "./components/education/Education";
import LetsChat from "./components/letschat/LetsChat";
import "./app.scss";

function App() {
  return (
    <div className="app">
      <Topbar />
      <div className="sections">
        <Intro />
        <AboutMe />
        <Portfolio />
        <Employment />
        <Education />
        <LetsChat />
      </div>
    </div>
  );
}

export default App;
