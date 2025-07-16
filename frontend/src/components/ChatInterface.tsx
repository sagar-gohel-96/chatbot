import { useState } from "react";

export const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<
    Array<{
      id: number;
      username: string;
      message: string;
      timestamp: string;
    }>
  >([
    {
      id: 1,
      username: "John",
      message: "Hello everyone!",
      timestamp: "10:30 AM",
    },
    {
      id: 2,
      username: "Alice",
      message: "Hey there! How is everyone doing?",
      timestamp: "10:32 AM",
    },
    {
      id: 3,
      username: "Bob",
      message: "Great! Just working on some projects.",
      timestamp: "10:35 AM",
    },
  ]);
  const [newMessage, setNewMessage] = useState<string>("");

  const sendMessage = (): void => {
    if (newMessage.trim()) {
      const message = {
        id: messages.length + 1,
        username: "You",
        message: newMessage,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages([...messages, message]);
      setNewMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl h-96 flex flex-col">
      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-4 rounded-t-2xl">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Room: General</h2>
          <button className="bg-white cursor-pointer text-gray-500 bg-opacity-20 hover:bg-opacity-30 px-3 py-1 rounded-lg text-sm transition-all">
            Leave Room
          </button>
        </div>
      </div>

      <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
        {messages.map((msg: any) => (
          <div key={msg.id} className="mb-3">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-semibold text-gray-800">
                {msg.username}
              </span>
              <span className="text-xs text-gray-500">{msg.timestamp}</span>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm">
              {msg.message}
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 border-t bg-white rounded-b-2xl">
        <div className="flex gap-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setNewMessage(e.target.value)
            }
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
          />
          <button
            onClick={sendMessage}
            className="cursor-pointer bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-2 rounded-lg font-medium hover:from-indigo-600 hover:to-purple-600 transition-all"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};
