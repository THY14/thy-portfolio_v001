"use client";
import { useState, useRef, useEffect, useCallback } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const SYSTEM_PROMPT = `You are Methy's portfolio assistant — a helpful AI embedded in the portfolio of Muy Methy, a third-year Computer Science student at CADT (Cambodia Academy of Digital Technology).

About Methy:
- Full name: Muy Methy
- Nickname: Thy
- Student at CADT (Cambodia Academy of Digital Technology), third-year Computer Science
- Software Developer focused on full-stack development
- Based in Phnom Penh, Cambodia
- Open to internships and junior roles
- Languages spoken: Khmer (native), English (professional)

Contact:
- GitHub: https://github.com/THY14
- Telegram: https://t.me/methy14
- Email: methymuy@gmail.com

Skills:
- Languages: TypeScript, Java, C/C++, JavaScript, Dart, Python
- Frameworks: React, Next.js, Vue, Flutter, Flask, Express.js, Nest.js
- Databases: SQLite, PostgreSQL, MongoDB
- Tools: VSCode, Neovim, Linux, Figma, Git, Docker, AWS, Jira, Notion
- Other: HTML, CSS, Tailwind CSS, REST APIs, DSA

Projects:
1. T Watch - E-commerce website (HTML, CSS, React, JavaScript)
   GitHub: https://github.com/sokundeny/T_WATCH.git
2. Codify - Coding-based LMS (Next.js, TypeScript, Nest.js, Docker, Tailwind)
   Live: http://codify.works/ | GitHub: https://github.com/THY14/Codify-hosting.git
3. Gym Club - Gym website (React, Express, Node.js, Tailwind)
   GitHub: https://github.com/THY14/gym.git
4. Safe Aid - Mobile emergency guidance app (Dart, Flutter)
   GitHub: https://github.com/sokundeny/safeaid_kh.git
5. Sastra - Khmer e-learning with Bakong payments (Node.js, Next.js, Express)
   Live: https://sastra-online-learning-platform.vercel.app/ | GitHub: https://github.com/pychey/Online-Learning-Platform.git
6. Moonups - Startup team-building platform (Node.js, Next.js, Express)
   GitHub: https://github.com/THY14/moonup-email.git

Availability:
- Currently open to internship and junior developer roles
- Preferred roles: Full-stack Developer, Frontend Developer, Backend Developer, DevOps
- Status: Actively looking

Keep responses short, friendly, and helpful. Always encourage visitors to reach out via email or Telegram. If asked about unrelated topics, redirect to Methy's portfolio.`;

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi! I'm Methy's AI assistant. Ask me anything about his skills, projects, or how to get in touch! 👋",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const openChat = useCallback(() => {
    history.pushState({ chatOpen: true }, "");
    setOpen(true);
  }, []);

  const toggleChat = useCallback(() => {
    if (open) {
      history.back(); 
    } else {
      openChat();
    }
  }, [open, openChat]);

  useEffect(() => {
    const onPop = () => {
      if (open) setOpen(false);
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, [open]);
  useEffect(() => {
    return () => {
      if (open) history.back();
    };
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 100);
  }, [open]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const userMsg: Message = { role: "user", content: text };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          system: SYSTEM_PROMPT,
          messages: newMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (response.status === 429) {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content:
              "We've hit the API rate limit for now. Please try again in a few minutes, or reach out to Methy directly via email or Telegram!",
          },
        ]);
        return;
      }

      const data = await response.json();
      const reply =
        data.choices?.[0]?.message?.content ||
        "Sorry, I couldn't get a response. Please try again.";
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "We've hit the API rate limit for now. Please try again in a few minutes, or reach out to Methy directly via email or Telegram!",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      <button
        onClick={toggleChat}
        aria-label="Toggle AI Chat"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[999] w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110 active:scale-95"
        style={{
          marginBottom: "env(safe-area-inset-bottom, 0px)",
          background: open ? "#1e1a2e" : "var(--accent)",
          border: "2px solid var(--accent-border)",
          boxShadow: "0 4px 24px var(--accent-bg)",
        }}
      >
        {open ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M18 6L6 18M6 6l12 12"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path
              d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
              stroke="white"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <circle cx="9" cy="10" r="1" fill="white" />
            <circle cx="12" cy="10" r="1" fill="white" />
            <circle cx="15" cy="10" r="1" fill="white" />
          </svg>
        )}
      </button>
      <div
        className={`fixed z-[998] transition-all duration-300
          left-0 right-0 bottom-0 rounded-t-2xl
          sm:bottom-24 sm:right-6 sm:left-auto sm:w-[350px] sm:rounded-xl
          ${
            open
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 translate-y-4 pointer-events-none"
          }`}
        style={{
          border: "1px solid rgba(255,255,255,0.08)",
          background: "#100e1e",
          paddingBottom: "env(safe-area-inset-bottom, 0px)",
        }}
      >
        <div
          className="flex items-center gap-2 px-4 py-2.5 border-b"
          style={{ background: "#2e2841", borderColor: "black" }}
        >
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28ca41]" />
          <span
            className="ml-2 text-sm text-white/40 flex-1"
            style={{ fontFamily: "'Ubuntu Mono', monospace" }}
          >
            methy@ubuntu: ~/assistant
          </span>
          <span
            className="text-[10px] px-2 py-0.5 rounded"
            style={{
              fontFamily: "'Ubuntu Mono', monospace",
              background: "var(--accent-bg)",
              color: "var(--accent)",
              border: "1px solid var(--accent-border)",
            }}
          >
            AI
          </span>
        </div>
        <div
          className="flex flex-col gap-3 p-4 overflow-y-auto"
          style={{
            height: "min(60dvh, 400px)",
          }}
        >
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${
                msg.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {msg.role === "assistant" && (
                <div
                  className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-xs mr-2 mt-0.5"
                  style={{
                    background: "var(--accent)",
                    fontFamily: "'Ubuntu Mono', monospace",
                  }}
                >
                  $
                </div>
              )}
              <div
                className="max-w-[80%] px-3 py-2 text-sm leading-relaxed"
                style={{
                  fontFamily: "'Ubuntu', sans-serif",
                  background:
                    msg.role === "user"
                      ? "var(--accent)"
                      : "rgba(255,255,255,0.06)",
                  color:
                    msg.role === "user" ? "white" : "rgba(255,255,255,0.8)",
                  borderRadius:
                    msg.role === "user"
                      ? "16px 16px 4px 16px"
                      : "16px 16px 16px 4px",
                }}
              >
                {msg.content}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex justify-start">
              <div
                className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-xs mr-2"
                style={{
                  background: "var(--accent)",
                  fontFamily: "'Ubuntu Mono', monospace",
                }}
              >
                $
              </div>
              <div
                className="px-4 py-3 rounded-xl flex items-center gap-1.5"
                style={{ background: "rgba(255,255,255,0.06)" }}
              >
                {[0, 1, 2].map((j) => (
                  <div
                    key={j}
                    className="w-1.5 h-1.5 rounded-full"
                    style={{
                      background: "var(--accent)",
                      animation: "blink 1s step-end infinite",
                      animationDelay: `${j * 0.2}s`,
                    }}
                  />
                ))}
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
        <div
          className="flex items-center gap-2 px-3 py-3 border-t"
          style={{
            borderColor: "rgba(255,255,255,0.06)",
            background: "#0d0b18",
          }}
        >
          <span
            className="text-xs flex-shrink-0"
            style={{
              fontFamily: "'Ubuntu Mono', monospace",
              color: "var(--accent)",
            }}
          >
            $
          </span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKey}
            placeholder="Ask me anything..."
            className="flex-1 bg-transparent text-sm outline-none placeholder-white/25"
            style={{
              fontFamily: "'Ubuntu Mono', monospace",
              color: "rgba(255,255,255,0.85)",
            }}
            disabled={loading}
          />
          <button
            onClick={sendMessage}
            disabled={!input.trim() || loading}
            className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:brightness-110 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed"
            style={{ background: "var(--accent)" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path
                d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}