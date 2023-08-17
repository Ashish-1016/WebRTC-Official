import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

function RoomPage() {
  const { roomId } = useParams();
  const videoRefHost = useRef(null);
  const videoRefPeer = useRef(null);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((frame) => {
        if (videoRefHost.current) {
          videoRefHost.current.srcObject = frame;
        }
      })
      .catch((err) => {
        alert("Video/Audio Permission error.");
      });
  });

  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-white">
      <h1 className="flex text-3xl">
        RoomID: <p className="font-bold text-yellow-400">{roomId}</p>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Video 1 */}
        <div className="relative ">
          <video
            ref={videoRefHost}
            className="rounded-md border-[2.5px] border-blue-800 h-72 w-96 mt-6 md:mx-3"
            autoPlay
            playsInline
          />
          {/* Badge  1*/}
          <div className="absolute top-6 left-0 md:left-3 bg-blue-800 text-white px-2 py-1 rounded-md">
            Host
          </div>
        </div>
        {/* Video 2 */}
        <div className="relative ">
          <video
            ref={videoRefPeer}
            className="rounded-md border-[2.5px] border-green-800 h-72 w-96 mt-6 md:mx-3"
            autoPlay
            playsInline
          />
          {/* Badge 2 */}
          <div className="absolute top-6 left-0 bg-green-800 text-white px-2 py-1 rounded-md md:left-3">
            Peer
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoomPage;
