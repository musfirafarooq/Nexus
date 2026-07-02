import CalendarView from "../../components/meetings/CalendarView";

const MeetingCalendar = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Meeting Calendar
        </h1>
        <p className="text-gray-600 mt-2">
          Schedule and manage your meetings.
        </p>
      </div>

      <CalendarView />
    </div>
  );
};

export default MeetingCalendar;