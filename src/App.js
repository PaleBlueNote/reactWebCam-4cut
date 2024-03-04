// App.js
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import TakePicturePage from "./pages/TakePicturePage";

import CelebrityFrameSelectionPage from "./pages/Celebrity/CelebrityFrameSelectionPage";
import CheetoFrameSelectionPage from "./pages/Cheeto/CheetoFrameSelectionPage";
import DOITBasicFrameSelectionPage from "./pages/DOITBasic/DOITBasicFrameSelectionPage";
import DOITTextFrameSelectionPage from "./pages/DOITText/DOITTextFrameSelectionPage";

function App() {
  const [selectedFrameSrc, setSelectedFrameSrc] = useState("");
  const [selectedFrameName, setSelectedFrameName] = useState("");
  const [studentID, setStudentID] = useState("");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/CelebrityFrame"
          element={
            <CelebrityFrameSelectionPage
              setStudentID={setStudentID}
              setSelectedFrameSrc={setSelectedFrameSrc}
              selectedFrameName={selectedFrameName}
              setSelectedFrameName={setSelectedFrameName}
            />
          }
        />
        <Route
          path="/CheetoFrame"
          element={
            <CheetoFrameSelectionPage
              setStudentID={setStudentID}
              setSelectedFrameSrc={setSelectedFrameSrc}
              selectedFrameName={selectedFrameName}
              setSelectedFrameName={setSelectedFrameName}
            />
          }
        />
        <Route
          path="/DOITBaicFrame"
          element={
            <DOITBasicFrameSelectionPage
              setStudentID={setStudentID}
              setSelectedFrameSrc={setSelectedFrameSrc}
              selectedFrameName={selectedFrameName}
              setSelectedFrameName={setSelectedFrameName}
            />
          }
        />
        <Route
          path="/DOITTextFrame"
          element={
            <DOITTextFrameSelectionPage
              setStudentID={setStudentID}
              setSelectedFrameSrc={setSelectedFrameSrc}
              selectedFrameName={selectedFrameName}
              setSelectedFrameName={setSelectedFrameName}
            />
          }
        />
        <Route
          path="/take-picture"
          element={
            <TakePicturePage
              studentID={studentID}
              selectedFrameSrc={selectedFrameSrc}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
