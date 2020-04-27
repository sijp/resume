import React from "react";
import "./App.css";

import "typeface-roboto";

import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import WorkTimeline from "./pages/work-timeline";
import Header from "./pages/header";
import About from "./pages/about";
import ToolsOfTrade from "./pages/tools-of-trade";
import ProjectsTimeline from "./pages/important-milestones";
import MoreAbout from "./pages/more-about";
import ReadMore from "./pages/readmore";
import Pages from "./components/pages";

const theme = createMuiTheme({
  overrides: {
    MuiTypography: {
      body1: {
        fontSize: "1.5rem",
        "@media only screen and (max-width: 640px)": {
          fontSize: "1rem"
        }
      },
      h6: {
        "@media only screen and (max-width: 640px)": {
          fontSize: "1rem"
        }
      }
    }
  }
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Pages
          key="the-pages"
          background={[
            "url(/wallpaper.jpg)",
            "url(/wallpaper-about.jpg)",
            "none",
            "url(/wallpaper-milestones.jpg)",
            "none",
            "#CCC",
            "#263238"
          ]}
        >
          <Header key="page-header" />
          <About key="page-about" />
          <WorkTimeline key="page-work-timeline" />
          <ProjectsTimeline key="page-projects-timeline" />
          <ToolsOfTrade key="page-tools-of-trade" />
          <MoreAbout key="page-more-about" />
          <ReadMore key="page-read-more" />
        </Pages>
      </ThemeProvider>
    </div>
  );
}

export default App;
