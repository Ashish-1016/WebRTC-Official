import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function WebRTC() {
  const navigate = useNavigate();
  const [roomId, setRooomId] = useState(null);
  const [createRoomblock, setCreateRoomBlock] = useState(true);
  const [enterRoomblock, setEnterRoomBlock] = useState(true);

  function handleCreateRoomHandler(e) {
    e.preventDefault();
    setCreateRoomBlock((previous) => !previous);
  }
  function handleEnterRoomHandler(e) {
    e.preventDefault();
    setEnterRoomBlock((previous) => !previous);
  }

  async function handleCreateRoom(e) {
    e.preventDefault();
    //Create offer

    navigate(`rooms/${roomId}`);
  }
  async function handleEnterRoom(e) {
    e.preventDefault();
  }

  return (
    <div className="flex flex-col bg-black text-white font-semibold min-h-screen justify-center items-center">
      <img
        className="h-36 w-32"
        src="https://webrtc.github.io/webrtc-org/assets/images/webrtc-logo-vert-retro-255x305.png"
        alt="WebRTC logo"
      />
      <h1 className="text-3xl font-bold text-slate-700/80"> with React</h1>
      <div className="flex flex-col m-5 space-y-3">
        <button
          onClick={handleCreateRoomHandler}
          className="bg-blue-600 h-10 max-w-lg rounded-md p-2 hover:bg-blue-900 transform duration-150 "
        >
          {createRoomblock ? "Create Room!" : "Close"}
        </button>
        <form
          onSubmit={handleCreateRoom}
          className={`${
            createRoomblock ? "hidden sm:hidden" : ""
          } flex flex-col`}
        >
          <input
            value={roomId}
            onChange={(e) => setRooomId(e.target.value)}
            placeholder="Create a Room ID"
            className={`bg-transparent rounded-md text-white border p-3  `}
          />
          <button
            type="submit"
            className="p-2 bg-orange-600 rounded-md h-10 max-w-sm m-3 animate-pulse"
          >
            Create
          </button>
        </form>
      </div>
      <div className="flex flex-col m-5 space-y-3 ">
        <button
          onClick={handleEnterRoomHandler}
          className="bg-green-700 h-10 max-w-lg rounded-md p-2 hover:bg-green-900 transform duration-150 "
        >
          {enterRoomblock ? "Enter Room!" : "Close"}
        </button>
        <form
          onSubmit={handleEnterRoom}
          className={`${
            enterRoomblock ? "hidden sm:hidden" : ""
          } flex flex-col`}
        >
          <input
            value={roomId}
            onChange={(e) => setRooomId(e.target.value)}
            placeholder="Enter a Room ID"
            className={`bg-transparent rounded-md text-white border p-3  `}
          />
          <button
            type="submit"
            className="p-2 bg-orange-600 rounded-md h-10 max-w-sm m-3 animate-pulse"
          >
            Enter
          </button>
        </form>
      </div>
    </div>
  );
}

export default WebRTC;
