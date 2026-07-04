import VideoCallWindow from "../../components/meetings/VideoCallWindow";
import CallControls from "../../components/meetings/CallControls";
import { Phone } from "lucide-react";

const VideoCallPage = () => {
  return (
    <div className="space-y-6">

      {/* Header */}

      <div className="flex items-center gap-3">

        <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
          <Phone className="text-green-600" size={24} />
        </div>

        <div>

          <h1 className="text-3xl font-bold">
            Video Call
          </h1>

          <p className="text-gray-500">
            Frontend Mock for Investor Meeting
          </p>

        </div>

      </div>

      {/* Call Status */}

      <div className="bg-white rounded-xl shadow p-5 flex justify-between items-center">

        <div>

          <h2 className="font-semibold text-lg">
            Meeting Status
          </h2>

          <p className="text-gray-500">
            Ready to start the meeting
          </p>

        </div>

        <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-medium">
          Online
        </div>

      </div>

      {/* Video Windows */}

      <VideoCallWindow />

      {/* Controls */}

      <CallControls />

      {/* Meeting Information */}

      <div className="bg-white rounded-xl shadow p-6">

        <h2 className="text-xl font-semibold mb-4">
          Meeting Details
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div>

            <p className="text-gray-500">
              Investor
            </p>

            <p className="font-semibold">
              Ali Ventures
            </p>

          </div>

          <div>

            <p className="text-gray-500">
              Startup
            </p>

            <p className="font-semibold">
              TechNova
            </p>

          </div>

          <div>

            <p className="text-gray-500">
              Scheduled Time
            </p>

            <p className="font-semibold">
              10 July 2026 — 10:00 AM
            </p>

          </div>

          <div>

            <p className="text-gray-500">
              Duration
            </p>

            <p className="font-semibold">
              30 Minutes (Mock)
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default VideoCallPage;