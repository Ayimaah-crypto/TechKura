
// src/components/Chatbox.jsx
import { SendHorizonal, MessageCircle } from "lucide-react";
import { useState } from "react";

export default function Chatbox() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages([...messages, input]);
    setInput("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#6A7282] p-3 rounded-full shadow-lg hover:bg-[#555d6a] transition"
        >
          <MessageCircle className="text-white w-6 h-6" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-80 h-96 bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-[#6A7282] text-white p-4 flex justify-between items-center">
            <h2 className="font-semibold">Teckura Assistant</h2>
            <button onClick={() => setIsOpen(false)} className="text-sm hover:underline">
              Close
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 px-3 py-2 overflow-y-auto text-sm space-y-2 bg-gray-50">
            <div className="bg-gray-200 text-gray-700 px-3 py-2 rounded-xl w-fit max-w-[75%]">
              Hello! How can we help you today?  Theodora is a always available to help. Is there a fancy Game you would like us to build for you?
            </div>
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className="bg-[#6A7282] text-white px-3 py-2 rounded-xl w-fit ml-auto max-w-[75%]"
              >
                {msg}
              </div>
            ))}
          </div>

          {/* Input */}
          <form
            onSubmit={handleSend}
            className="flex items-center p-3 border-t bg-white"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-grow px-3 py-2 rounded-full border border-gray-300 focus:outline-none text-sm"
            />
            <button type="submit" className="ml-2 p-2 text-[#6A7282] hover:text-black">
              <SendHorizonal className="w-5 h-5" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
