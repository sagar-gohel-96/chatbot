import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import {
  ChatInterface,
  CreateRoomForm,
  JoinRoomForm,
  LoginForm,
  RegisterForm,
  RoomSelection,
} from "../components";

export const Routing = () => {
  return (
    <Router>
      <div className="flex justify-center items-center w-full h-[100vh]">
        <Routes>
          <Route path="/join-room" element={<JoinRoomForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/create-room" element={<CreateRoomForm />} />
          <Route path="/chat" element={<ChatInterface />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/select-room" element={<RoomSelection />} />
          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
      </div>
    </Router>
  );
};
