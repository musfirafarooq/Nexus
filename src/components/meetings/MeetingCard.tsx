import React from "react";

interface Props {
  meeting: any;
}

const MeetingCard: React.FC<Props> = ({ meeting }) => {
  return (
    <div className="bg-white rounded-xl shadow border p-5 mb-4">
      <h2 className="text-lg font-bold">{meeting.title}</h2>

      <p className="text-gray-600 mt-2">
        Date: {meeting.date}
      </p>

      <p className="text-gray-600">
        Time: {meeting.time}
      </p>

      <span className="inline-block mt-3 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
        {meeting.status}
      </span>
    </div>
  );
};

export default MeetingCard;