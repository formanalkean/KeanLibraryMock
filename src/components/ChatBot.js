"use client";

import React, { useEffect, useRef, useState } from "react";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "👋 Hi there! I'm Kean Library Bot. Ask me about books, articles, or library hours.",
    },
  ]);
  const [input, setInput] = useState("");
  const [offset, setOffset] = useState(20);
  const buttonRef = useRef(null);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { from: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    let botReply =
      "🤔 Hmm, I'm just a mockup... Try asking about books or hours!";
    if (
      input.toLowerCase().includes("book") ||
      input.toLowerCase().includes("article")
    ) {
      botReply =
        "📚 You can find books and articles using the search box above or visit the 'Books & E-Books' section.";
    } else if (input.toLowerCase().includes("hour")) {
      botReply =
        "🕒 Library Hours:\nMon–Thu: 8am–10pm\nFri: 8am–5pm\nSat: 9am–4pm\nSun: 1pm–9pm";
    }

    const botMessage = { from: "bot", text: botReply };
    setTimeout(() => {
      setMessages((prev) => [...prev, botMessage]);
    }, 600);
    setInput("");
  };

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector("footer");
      const button = buttonRef.current;
      if (!footer || !button) return;

      const footerRect = footer.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const overlap = footerRect.top < windowHeight;
      if (overlap) {
        const offsetFromFooter = windowHeight - footerRect.top + 20;
        setOffset(offsetFromFooter);
      } else {
        setOffset(20);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Floating Chat Button */}
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed right-6 bg-[#13294B] hover:bg-[#0A1A38] text-white p-4 rounded-full shadow-lg z-50 transition-transform duration-300"
        style={{ bottom: `${offset}px` }}
        aria-label="Open chatbot"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8-1.48 0-2.865-.324-4.03-.9L3 20l1.324-3.971A7.963 7.963 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          className="fixed right-6 w-[290px] z-50 border border-[#e5e7eb] bg-white/60 backdrop-blur-md rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-500 animate-fade-in-up flex flex-col overflow-hidden"
          style={{ bottom: `${offset + 60}px` }}
        >
          {/* Header */}
          <div className="bg-white/80 px-5 py-3 font-semibold text-[#13294B] text-sm shadow-md border-b border-[#13294B]/10">
            🤖 Kean Library Assistant
          </div>

          {/* Messages */}
          <div className="p-4 h-64 overflow-y-auto flex flex-col space-y-3 text-sm">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`max-w-[75%] px-4 py-2 rounded-2xl break-words ${
                  msg.from === "bot"
                    ? "bg-white text-[#13294B] shadow border border-[#e5e7eb] self-start"
                    : "bg-[#13294B] text-white self-end"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input & Send */}
          <div className="flex items-center px-3 py-3 bg-white/70 backdrop-blur-md border-t border-[#13294B]/10">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 text-sm px-4 py-2 bg-white rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#13294B]/50 placeholder-gray-500 text-[#13294B]"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              className="ml-3 p-3 bg-[#13294B] hover:bg-[#0A1A38] text-white rounded-full shadow-md transition-all"
              aria-label="Send"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M22 2L11 13" />
                <path d="M22 2L15 22L11 13L2 9L22 2Z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
