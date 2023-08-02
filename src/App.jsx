import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WebRTC from "./components/WebRTC";
import RoomPage from "./components/RoomPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WebRTC />} />
        <Route path="/rooms/:roomId" element={<RoomPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
