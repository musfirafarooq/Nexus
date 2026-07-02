import MeetingCard from "../../components/meetings/MeetingCard";

const meetings = [
  {
    id: 1,
    title: "Investor Meeting",
    date: "8 July 2026",
    time: "10:00 AM",
    status: "Confirmed",
  },
  {
    id: 2,
    title: "Funding Discussion",
    date: "18 July 2026",
    time: "12:00 PM",
    status: "Confirmed",
  },
];

const ConfirmedMeetings = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        Confirmed Meetings
      </h1>

      {meetings.map((meeting) => (
        <MeetingCard
          key={meeting.id}
          meeting={meeting}
        />
      ))}
    </div>
  );
};

export default ConfirmedMeetings;