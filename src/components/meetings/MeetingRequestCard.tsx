import React from "react";

interface Props {
  request: any;
  onAccept: (id: number) => void;
  onDecline: (id: number) => void;
}

const MeetingRequestCard: React.FC<Props> = ({
  request,
  onAccept,
  onDecline,
}) => {
  return (
    <div className="bg-white rounded-xl shadow p-5 border mb-4">
      <h2 className="text-lg font-bold">{request.startup}</h2>

      <p className="text-gray-600 mt-2">
        Investor: {request.investor}
      </p>

      <p className="text-gray-600">
        Date: {request.date}
      </p>

      <p className="text-gray-600 mb-4">
        Time: {request.time}
      </p>

      <div className="flex gap-3">
        <button
          onClick={() => onAccept(request.id)}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
        >
          Accept
        </button>

        <button
          onClick={() => onDecline(request.id)}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
        >
          Decline
        </button>
      </div>
    </div>
  );
};

export default MeetingRequestCard;