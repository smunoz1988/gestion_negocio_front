import './App.css';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import enUS from 'date-fns/locale/en-US';
import 'react-datepicker/dist/react-datepicker.css';

const locales = {
  'en-US': enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const initialEvent = {
  title: '',
  start: '',
  end: '',
};

// ... (código previo)

const App = () => {
  const [newEvent, setNewEvent] = useState({
    title: '',
    start: '',
    end: '',
  });
  const [allEvents, setAllEvents] = useState([]);

  const handleAddEvent = (e) => {
    e.preventDefault();
    if (newEvent.title && newEvent.start && newEvent.end) {
      setAllEvents([...allEvents, newEvent]);
      setNewEvent({
        title: '',
        start: '',
        end: '',
      });
    } else {
      alert('Por favor, completa todos los campos del evento.');
    }
  };

  return (
    <div className="App">
      <h1>Peluqueria El Pelado</h1>
      <h2>Agregar evento (esto debe ser un formulario)</h2>
      <form onSubmit={handleAddEvent}>
        <input
          type="text"
          placeholder="Título"
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
        <DatePicker
          placeholderText="Fecha y hora de inicio"
          selected={newEvent.start}
          onChange={(inicio) => setNewEvent({ ...newEvent, start: inicio })}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          dateFormat="MMMM d, yyyy h:mm aa"
        />
        <DatePicker
          placeholderText="Fecha y hora de fin"
          selected={newEvent.end}
          onChange={(fin) => setNewEvent({ ...newEvent, end: fin })}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          dateFormat="MMMM d, yyyy h:mm aa"
        />
        <button type="submit">Agregar cita</button>
      </form>
      <Calendar
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: "50px" }}
      />
    </div>
  );
};

export default App;

