import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

import { meetings as initialMeetings } from "../../data/meetings";
import AvailabilityModal from "./AvailabilityModal";

const CalendarView = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [events, setEvents] = useState(initialMeetings);

  return (
    <div className="bg-white rounded-xl shadow p-5">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        height="80vh"
        editable={true}
        dayMaxEvents={2}
        eventColor="#1a3e60"
        selectable={true}
        nowIndicator={true}
        weekends={true}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        events={events}
        dateClick={(info) => {
          setSelectedDate(info.dateStr);
          setIsModalOpen(true);
        }}
        eventClick={(info) => {
          alert(`Meeting: ${info.event.title}`);
        }}
      />

      <AvailabilityModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedDate={selectedDate}
        onSave={(meeting) => {
          setEvents((prev) => [...prev, meeting]);
        }}
      />
    </div>
  );
};

export default CalendarView;