import { Lock, LogIn, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const JoinRoomForm = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
      <div className="text-center mb-8">
        <div className="bg-gradient-to-r from-teal-500 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <LogIn className="text-white" size={24} />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Join Room</h2>
        <p className="text-gray-600 mt-2">Enter room credentials</p>
      </div>

      <div className="space-y-6">
        <div className="relative">
          <MessageCircle
            className="absolute left-3 top-3 text-gray-400"
            size={20}
          />
          <input
            type="text"
            name="roomName"
            placeholder="Room Name"
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
            required
          />
        </div>

        <div className="relative">
          <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
          <input
            type="password"
            name="roomPassword"
            placeholder="Room Password"
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
            required
          />
        </div>

        <button
          onClick={() => navigate("/join-room")}
          type="button"
          className="cursor-pointer w-full bg-gradient-to-r from-teal-500 to-blue-500 text-white py-3 rounded-lg font-medium hover:from-teal-600 hover:to-blue-600 transition-all transform hover:scale-105"
        >
          Join Room
        </button>
      </div>

      <div className="mt-6 text-center">
        <button
          onClick={() => navigate("/select-room")}
          className="cursor-pointer text-gray-600 hover:text-gray-700 font-medium"
        >
          Back to Rooms
        </button>
      </div>
    </div>
  );
};
