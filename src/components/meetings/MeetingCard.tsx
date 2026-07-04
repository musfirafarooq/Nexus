import React from "react";
import { Link } from "react-router-dom";
import { Video, Calendar, Clock } from "lucide-react";

interface Props {
  meeting: {
    id: number;
    title: string;
    date: string;
    time: string;
    status: string;
  };
}

const MeetingCard: React.FC<Props> = ({ meeting }) => {
  return (
    <div className="bg-white rounded-xl shadow border p-5 mb-4 hover:shadow-lg transition">

      <div className="flex justify-between items-start">

        <div>

          <h2 className="text-xl font-bold">
            {meeting.title}
          </h2>

          <div className="mt-4 space-y-2">

            <p className="flex items-center gap-2 text-gray-600">
              <Calendar size={18} />
              {meeting.date}
            </p>

            <p className="flex items-center gap-2 text-gray-600">
              <Clock size={18} />
              {meeting.time}
            </p>

          </div>

          <span className="inline-block mt-4 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
            {meeting.status}
          </span>

        </div>

        {meeting.status === "Confirmed" && (
          <Link to="/video-call">
            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition">
              <Video size={18} />
              Join Call
            </button>
          </Link>
        )}

      </div>

    </div>
  );
};

export default MeetingCard;