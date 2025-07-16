import {
  ChatInterface,
  CreateRoomForm,
  JoinRoomForm,
  LoginForm,
  RegisterForm,
  RoomSelection,
} from "./components";

function App() {
  return (
    <div className="flex flex-col gap-4">
      <LoginForm />
      <CreateRoomForm />
      <JoinRoomForm />
      <RoomSelection />
      <RegisterForm />
      <ChatInterface />
    </div>
  );
}

export default App;
