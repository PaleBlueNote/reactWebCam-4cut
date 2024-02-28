// App.js
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FrameSelectionPage from "./pages/FrameSelectionPage";
import TakePicturePage from "./pages/TakePicturePage";

function App() {
  const [selectedFrameSrc, setSelectedFrameSrc] =
    useState("/frames/문상훈.png");
  const [selectedFrameName, setSelectedFrameName] = useState("문상훈 프레임");

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <FrameSelectionPage
              setSelectedFrameSrc={setSelectedFrameSrc}
              selectedFrameName={selectedFrameName}
              setSelectedFrameName={setSelectedFrameName}
            />
          }
        />
        <Route
          path="/take-picture"
          element={<TakePicturePage selectedFrameSrc={selectedFrameSrc} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
