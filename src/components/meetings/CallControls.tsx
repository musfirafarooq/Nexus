import { useState } from "react";
import {
  Phone,
  PhoneOff,
  Mic,
  MicOff,
  Video,
  VideoOff,
  MonitorUp,
} from "lucide-react";

const CallControls = () => {
  const [callStarted, setCallStarted] = useState(false);
  const [micOn, setMicOn] = useState(true);
  const [cameraOn, setCameraOn] = useState(true);
  const [screenShare, setScreenShare] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow p-6 mt-6">

      <div className="flex flex-wrap justify-center gap-4">

        {/* Start / End Call */}

        {!callStarted ? (
          <button
            onClick={() => setCallStarted(true)}
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-xl transition"
          >
            <Phone size={20} />
            Start Call
          </button>
        ) : (
          <button
            onClick={() => setCallStarted(false)}
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-xl transition"
          >
            <PhoneOff size={20} />
            End Call
          </button>
        )}

        {/* Microphone */}

        <button
          onClick={() => setMicOn(!micOn)}
          className={`flex items-center gap-2 px-5 py-3 rounded-xl transition ${
            micOn
              ? "bg-blue-600 hover:bg-blue-700 text-white"
              : "bg-gray-300 hover:bg-gray-400 text-gray-800"
          }`}
        >
          {micOn ? <Mic size={20} /> : <MicOff size={20} />}
          {micOn ? "Mic On" : "Mic Off"}
        </button>

        {/* Camera */}

        <button
          onClick={() => setCameraOn(!cameraOn)}
          className={`flex items-center gap-2 px-5 py-3 rounded-xl transition ${
            cameraOn
              ? "bg-blue-600 hover:bg-blue-700 text-white"
              : "bg-gray-300 hover:bg-gray-400 text-gray-800"
          }`}
        >
          {cameraOn ? <Video size={20} /> : <VideoOff size={20} />}
          {cameraOn ? "Camera On" : "Camera Off"}
        </button>

        {/* Screen Share */}

        <button
          onClick={() => setScreenShare(!screenShare)}
          className={`flex items-center gap-2 px-5 py-3 rounded-xl transition ${
            screenShare
              ? "bg-purple-600 hover:bg-purple-700 text-white"
              : "bg-gray-300 hover:bg-gray-400 text-gray-800"
          }`}
        >
          <MonitorUp size={20} />
          {screenShare ? "Stop Sharing" : "Share Screen"}
        </button>

      </div>

    </div>
  );
};

export default CallControls;