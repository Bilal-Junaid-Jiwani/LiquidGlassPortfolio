import { useState, useRef, useEffect } from "react";
import { Bot, X, Send, User, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const getAIResponse = (question: string): string => {
  const lowerCaseQuestion = question.toLowerCase();
  if (lowerCaseQuestion.includes("hello") || lowerCaseQuestion.includes("hi")) {
    return "Hello! I am Muhammad Bilal's AI assistant. How can I help you today?";
  }
  if (lowerCaseQuestion.includes("skills")) {
    return `I have experience with the following skills:\n- Backend: Django, Node.js, n8n\n- Frontend: HTML, CSS, React, Tailwind CSS\n- CMS: WordPress (2 Years Experience)\n- Databases: SQLite, PostgreSQL, MongoDB\n- Tools: Git, GitHub, Postman, Vercel`;
  }
  if (lowerCaseQuestion.includes("experience")) {
    return `I have experience as a WordPress Developer, Amazon Virtual Assistant, and Google AdSense/ADX Publisher. I also participated in a hackathon where I created a full-stack web app called "Pitch Craft".`;
  }
  if (lowerCaseQuestion.includes("projects")) {
    return `I have worked on several projects, including:\n- PitchCraft AI: An AI-powered pitch generation tool.\n- Financial-Banking-System (Django).\n- Hospital-Managment-System (Django).`;
  }
  if (lowerCaseQuestion.includes("education")) {
    return `I completed HSC from Govt. Degree Boys College and SSC from PAK-TURK Maarif. I am also pursuing AI & Modern Web Dev courses.`;
  }
  if (lowerCaseQuestion.includes("contact")) {
    return `You can contact me via email at bilaljunaidjiwani@gmail.com or find me on GitHub at Bilal-Junaid-Jiwani.`;
  }
  if (lowerCaseQuestion.includes("about you")) {
    return `I am a passionate backend developer skilled in Django, Node.js, and n8n, with a strong interest in creating end-to-end web solutions.`;
  }
  return "I am sorry, I do not have the answer to that question. Please try asking another question about my skills, experience, or projects.";
};


export function PersonalAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ type: 'user' | 'bot'; text: string }[]>([]);
  const [inputValue, setInputValue] = useState("");
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const userMessage = { type: 'user' as 'user', text: inputValue };
      setMessages((prev) => [...prev, userMessage]);
      const botResponse = { type: 'bot' as 'bot', text: getAIResponse(inputValue) };
      setTimeout(() => {
        setMessages((prev) => [...prev, botResponse]);
      }, 500);
      setInputValue("");
    }
  };

  return (
    <>
      {/* Floating Button - Redesigned to be stark and minimalist */}
      <div className="fixed bottom-8 right-8 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full w-14 h-14 bg-foreground text-background shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center border-2 border-foreground hover:bg-background hover:text-foreground"
        >
          {isOpen ? <X size={24} /> : <Bot size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="fixed bottom-28 right-4 left-4 sm:right-8 sm:left-auto z-50 w-full max-w-[calc(100vw-2rem)] sm:w-[350px] h-[70vh] sm:h-[30rem] bg-background border border-border shadow-2xl flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-300 rounded-xl overflow-hidden">

          {/* Header */}
          <div className="p-5 border-b border-border bg-muted/20 flex items-center gap-4">
            <div className="p-2.5 rounded-md bg-foreground text-background">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-lg leading-none uppercase tracking-widest text-foreground">Assistant</h3>
              <p className="text-xs text-muted-foreground mt-1 font-semibold">ASK ME ANYTHING</p>
            </div>
          </div>

          <div className="flex-1 p-5 overflow-y-auto space-y-6 scrollbar-hide bg-background">
            {messages.length === 0 && (
              <div className="text-center text-muted-foreground text-sm mt-12 p-4">
                <Bot className="w-10 h-10 mx-auto mb-4 opacity-30" />
                <p className="font-medium">Hi there! I'm here to help you get to know Muhammad Bilal better. Ask me about his skills, projects, or experience.</p>
              </div>
            )}
            {messages.map((msg, index) => (
              <div key={index} className={`flex items-start gap-3 ${msg.type === 'user' ? 'justify-end' : ''}`}>
                {msg.type === 'bot' && (
                  <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-5 h-5 text-primary" />
                  </div>
                )}
                <div className={`p-4 max-w-[80%] text-sm leading-relaxed font-medium ${msg.type === 'user'
                    ? 'bg-foreground text-background rounded-l-xl rounded-tr-xl'
                    : 'bg-muted/50 text-foreground border border-border rounded-r-xl rounded-tl-xl'
                  }`}>
                  <p className="whitespace-pre-line">{msg.text}</p>
                </div>
                {msg.type === 'user' && (
                  <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                    <User className="w-5 h-5 text-foreground" />
                  </div>
                )}
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-border bg-background">
            <div className="flex items-center gap-2 border border-border rounded-md focus-within:border-foreground transition-colors overflow-hidden pr-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask a question..."
                className="flex-1 bg-transparent px-4 py-3 text-sm font-medium focus:outline-none placeholder:text-muted-foreground"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="p-2 rounded bg-foreground text-background hover:bg-primary disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
