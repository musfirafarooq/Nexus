import { useState } from "react";
import { meetingRequests } from "../../data/meetingRequests";
import MeetingRequestCard from "../../components/meetings/MeetingRequestCard";

const MeetingRequests = () => {
  const [requests, setRequests] = useState(meetingRequests);

  const accept = (id: number) => {
    alert("Meeting Accepted");
    setRequests(requests.filter((r) => r.id !== id));
  };

  const decline = (id: number) => {
    alert("Meeting Declined");
    setRequests(requests.filter((r) => r.id !== id));
  };

  return (
    <div className="max-w-4xl mx-auto">

      <h1 className="text-3xl font-bold mb-6">
        Meeting Requests
      </h1>

      {requests.length === 0 ? (
        <div className="bg-white rounded-xl shadow p-6 text-center">
          No pending requests.
        </div>
      ) : (
        requests.map((request) => (
          <MeetingRequestCard
            key={request.id}
            request={request}
            onAccept={accept}
            onDecline={decline}
          />
        ))
      )}
    </div>
  );
};

export default MeetingRequests;