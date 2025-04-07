"use client";

import React, { useState } from 'react';


export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "👋 Hi there! I'm Kean Library Bot. Ask me about books, articles, or library hours." }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { from: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    // Mock reply (simple rules just for look & feel)
    let botReply = "🤔 Hmm, I'm just a mockup... Try asking about books or hours!";
    if (input.toLowerCase().includes("book") || input.toLowerCase().includes("article")) {
      botReply = "📚 You can find books and articles using the search box above or visit the 'Books & E-Books' section.";
    } else if (input.toLowerCase().includes("hour")) {
      botReply = "🕒 Library Hours:\nMon–Thu: 8am–10pm\nFri: 8am–5pm\nSat: 9am–4pm\nSun: 1pm–9pm";
    }

    const botMessage = { from: "bot", text: botReply };
    setTimeout(() => {
      setMessages((prev) => [...prev, botMessage]);
    }, 600); // mock delay
    setInput("");
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-20 right-6 bg-[#13294B] hover:bg-[#0A1A38] text-white p-4 rounded-full shadow-lg z-50"
        aria-label="Open chatbot"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8-1.48 0-2.865-.324-4.03-.9L3 20l1.324-3.971A7.963 7.963 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </button>

      {/* Chat Popup */}
      {isOpen && (
        <div className="fixed bottom-36 right-6 w-80 bg-white rounded-lg shadow-xl border border-gray-300 flex flex-col overflow-hidden z-50">
          <div className="bg-[#13294B] text-white px-4 py-3 font-semibold text-sm">Kean Library Chat Assistant</div>
          <div className="p-4 h-64 overflow-y-auto text-sm space-y-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg max-w-xs ${
                  msg.from === "bot"
                    ? "bg-gray-100 text-gray-800 self-start"
                    : "bg-[#13294B] text-white self-end"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="flex border-t border-gray-200 p-2">
            <input
              type="text"
              placeholder="Ask something..."
              className="flex-1 text-sm px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-[#13294B]"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              className="bg-[#13294B] text-white px-4 py-2 rounded-r-md hover:bg-[#0A1A38]"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
