import React from "react";
import "./App.css";

import "typeface-roboto";

import WorkTimeline from "./pages/work-timeline";
import Header from "./pages/header";
import About from "./pages/about";
import ToolsOfTrade from "./pages/tools-of-trade";
import ProjectsTimeline from "./pages/important-milestones";
import MoreAbout from "./pages/more-about";
import Pages from "./components/pages";

function App() {
  return (
    <div className="App">
      <Pages
        background={[
          "url(/wallpaper.jpg)",
          "url(/wallpaper-about.jpg)",
          "none",
          "url(/wallpaper-milestones.jpg)",
          "none",
          "#CCC"
        ]}
      >
        <Header />
        <About />
        <WorkTimeline />
        <ProjectsTimeline />
        <ToolsOfTrade />
        <MoreAbout />
      </Pages>
    </div>
  );
}

export default App;
