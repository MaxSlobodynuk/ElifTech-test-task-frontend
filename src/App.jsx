import { Routes, Route } from "react-router-dom";
import EventsBoard from "./pages/EventsBoard/EventsBoard";
import EventRegistration from "./pages/EventRegistration/EventRegistration";
import EventDetails from "./pages/EventDetails/EventDetails";
import Success from "./pages/Success/Success";


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<EventsBoard />} />
        <Route path="/register/:eventId" element={<EventRegistration />} />
        <Route path="/view/:eventId" element={<EventDetails />} />
        <Route path="success" element={<Success />} />
      </Routes>
    </div>
  );
};

export default App;
