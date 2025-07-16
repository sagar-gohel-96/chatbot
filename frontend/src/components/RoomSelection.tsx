import { LogIn, Plus, Users } from "lucide-react";

export const RoomSelection = () => (
  <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
    <div className="text-center mb-8">
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
        <Users className="text-white" size={24} />
      </div>
      <h2 className="text-2xl font-bold text-gray-800">Chat Rooms</h2>
      <p className="text-gray-600 mt-2">Create or join a room</p>
    </div>

    <div className="space-y-4">
      <button className="cursor-pointer w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 flex items-center justify-center gap-2">
        <Plus size={20} />
        Create New Room
      </button>

      <button className="cursor-pointer w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-4 rounded-lg font-medium hover:from-indigo-600 hover:to-purple-600 transition-all transform hover:scale-105 flex items-center justify-center gap-2">
        <LogIn size={20} />
        Join Existing Room
      </button>
    </div>

    <div className="mt-6 text-center">
      <button className="cursor-pointer text-gray-600 hover:text-gray-700 font-medium">
        Back to Login
      </button>
    </div>
  </div>
);
