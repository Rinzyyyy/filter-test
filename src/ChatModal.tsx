import { useState } from "react";

export default function ChatModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: string; content: string }[]>(
    []
  );
  const [input, setInput] = useState("");

  async function handleSend() {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");

    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        max_tokens: 100,
        messages: [
          {
            role: "system",
            content:
              "你是YourClass網站的客服人員，請有禮貌地協助使用者解決課程相關問題。",
          },
          ...newMessages,
        ],
      }),
    });

    const data = await res.json();
    const reply = data.choices[0].message;
    setMessages((prev) => [...prev, reply]);
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="w-80 h-96 bg-slate-50 shadow-xl border-2 border-gray-300 rounded-md flex flex-col">
          <div className="flex justify-between items-center p-3 border-b">
            <h2 className="text-gray-600 font-bold text-lg">客服</h2>
            <button onClick={() => setIsOpen(false)} className="text-sm">
              ✕
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-3 space-y-2">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-2 rounded-lg text-sm max-w-[80%] ${
                  msg.role === "user"
                    ? "bg-blue-100 self-end ml-auto"
                    : "bg-gray-200 self-start mr-auto"
                }`}
              >
                {msg.content}
              </div>
            ))}
          </div>

          <div className="flex border-t">
            <input
              className="flex-1 p-2 text-sm"
              placeholder="輸入訊息..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              className=" text-gray-800 px-3 text-sm"
            >
              送出
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white rounded-full w-14 h-14 shadow-lg flex items-center justify-center"
        >
          💬
        </button>
      )}
    </div>
  );
}
