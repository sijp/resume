import React from "react";
import "./App.css";

import "typeface-roboto";

import WorkTimeline from "./pages/work-timeline";
import Header from "./pages/header";
import About from "./pages/about";
import ToolsOfTrade from "./pages/tools-of-trade";
import ProjectsTimeline from "./pages/important-milestones";
function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <WorkTimeline />
      <ProjectsTimeline />
      <ToolsOfTrade />
    </div>
  );
}

export default App;
