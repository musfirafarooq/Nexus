import { User, Wifi, Mic, Video } from "lucide-react";

const VideoCallWindow = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

      {/* Remote Video */}

      <div className="lg:col-span-2 relative h-[550px] rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-black shadow-2xl">

        {/* Connection Badge */}

        <div className="absolute top-5 left-5 bg-green-600 text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
          <Wifi size={16} />
          Good Connection
        </div>

        {/* Call Timer */}

        <div className="absolute top-5 right-5 bg-black/60 backdrop-blur-md text-white px-4 py-2 rounded-full shadow">
          00:18:24
        </div>

        {/* Remote User */}

        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">

          <div className="w-32 h-32 rounded-full bg-blue-600 flex items-center justify-center shadow-xl">
            <User size={72} />
          </div>

          <h2 className="text-3xl font-bold mt-6">
            Ali Ventures
          </h2>

          <p className="text-gray-300 text-lg">
            Investor
          </p>

          <div className="flex gap-3 mt-6">

            <span className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full">
              <Mic size={18} />
              Mic On
            </span>

            <span className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full">
              <Video size={18} />
              Camera On
            </span>

          </div>

        </div>

      </div>

      {/* Local Video */}

      <div className="relative h-[550px] rounded-3xl overflow-hidden bg-gradient-to-br from-gray-700 to-gray-900 shadow-xl">

        <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm shadow">
          You
        </div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">

          <div className="w-28 h-28 rounded-full bg-white/20 flex items-center justify-center">

            <User size={60} />

          </div>

          <h2 className="text-2xl font-semibold mt-5">
            Entrepreneur
          </h2>

          <p className="text-gray-300">
            Business Nexus
          </p>

        </div>

      </div>

    </div>
  );
};

export default VideoCallWindow;