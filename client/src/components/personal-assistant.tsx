import { useState, useRef, useEffect } from "react";
import { Bot, X, Send, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const cvData = `
Name: Muhammad Bilal
Profile: A passionate backend developer skilled in Django, Node.js, and n8n, with a strong interest in creating end-to-end web solutions. I also enjoy working on modern frontend designs to deliver smooth and engaging user experiences.
Skills:
- Backend: Django, Node.js, n8n
- Frontend: HTML, CSS, Bootstrap, JavaScript, React, Tailwind CSS
- CMS: WordPress (2 Years Experience)
- E-commerce: Amazon Virtual Assistant
- Digital Skills: Blogging, Google AdSense, SEO & Monetization
- Databases: SQLite, PostgreSQL, MongoDB (Basic)
- Tools: Git, GitHub, Postman, Supabase, Vercel, PythonAnywhere
- Soft Skills: Communication, Problem Solving, Continuous Learning
Experience:
- Hackathon at Zaitoon Ashraf IT Park (19-OCT-25): Engaged in brainstorming, adaptive problem-solving, and rapid prototyping. Created a full-stack web application called "Pitch Craft".
- WordPress Developer (Self-employed | May 2023 – 2024): Developed and maintained custom WordPress websites, built responsive themes and custom plugins, ensured website optimization, and provided technical support.
- Amazon Virtual Assistant (Self-employed | Fresher): Managed product listings and inventory, processed orders, and handled customer service.
- Google AdSense Publisher (Self-employed | July 2023 – 2024): Monetized websites via strategic ad placements and analyzed data to optimize ad performance.
- Google Ad Manager (ADX) Publisher (Self-employed | March 2023 – 2024): Managed ad inventory and campaigns, partnered with advertisers, and tracked KPIs.
Education:
- Govt. Degree Boys College: HSC Part I-II (Computer Science) – Karachi, Pakistan
- PAK-TURK Maarif International School & Colleges: SSC Part I-II (Computer Science) – Karachi, Pakistan
Professional Development (In Progress):
- Modern Web Application Development – Saylani Institute (Covered: HTML, CSS, Javascript, NodeJS Express, Tailwind; Currently Learning: ReactJS)
- Certified Agentic and Robotic AI Engineer (CAE) – Presidential Initiative for Artificial Intelligence & Computing (PIAIC) (Covered: Prompt Engineering, N8N workflow automation; Currently Learning: Python)
- Python Webmastery – Zaitoon Ashraf IT Park by Saylani (Completed) (Covered: Python, Django Framework)
Projects:
- PitchCraft AI: Transform your startup idea into a complete business package with AI-powered pitch generation and professional website code.
- Financial-Banking-System: Developed a Financial management system based on Django framework.
- Hospital-Managment-System: Developed a hospital management system based on Django framework.
- JUNAIDJIWANI: Developed a content-focused blog monetized with AdSense.
- DisplayJBZ: Created a niche website using Google ADX for high-yield ad revenue.
- Django Login System: Built a user authentication app (GitHub + PythonAnywhere).
Interests: Web Development, E-commerce, Digital Marketing, Technology Trends
Contact:
- EMAIL: bilaljunaidjiwani@gmail.com
- GITHUB: https://github.com/Bilal-Junaid-Jiwani/
- CELL: +923082887469
`;

const getAIResponse = (question: string): string => {
  const lowerCaseQuestion = question.toLowerCase();

  if (lowerCaseQuestion.includes("hello") || lowerCaseQuestion.includes("hi")) {
    return "Hello! I am Muhammad Bilal's AI assistant. How can I help you today?";
  }

  if (lowerCaseQuestion.includes("skills")) {
    return `I have experience with the following skills:
- Backend: Django, Node.js, n8n
- Frontend: HTML, CSS, Bootstrap, JavaScript, React, Tailwind CSS
- CMS: WordPress (2 Years Experience)
- Databases: SQLite, PostgreSQL, MongoDB (Basic)
- Tools: Git, GitHub, Postman, Supabase, Vercel, PythonAnywhere`;
  }

  if (lowerCaseQuestion.includes("experience")) {
    return `I have experience as a WordPress Developer, Amazon Virtual Assistant, and Google AdSense/ADX Publisher. I also participated in a hackathon where I created a full-stack web application called "Pitch Craft".`;
  }

  if (lowerCaseQuestion.includes("projects")) {
    return `I have worked on several projects, including:
- PitchCraft AI: An AI-powered pitch generation tool.
- Financial-Banking-System: A financial management system based on Django.
- Hospital-Managment-System: A hospital management system based on Django.
You can find more details on my GitHub profile.`;
  }

  if (lowerCaseQuestion.includes("education")) {
    return `I have completed my HSC from Govt. Degree Boys College and my SSC from PAK-TURK Maarif International School & Colleges. I am also pursuing professional development courses in Modern Web Application Development and AI.`;
  }

  if (lowerCaseQuestion.includes("contact")) {
    return `You can contact me via email at bilaljunaidjiwani@gmail.com or find me on GitHub at https://github.com/Bilal-Junaid-Jiwani/.`;
  }

  if (lowerCaseQuestion.includes("about you")) {
    return `I am a passionate backend developer skilled in Django, Node.js, and n8n, with a strong interest in creating end-to-end web solutions. I also enjoy working on modern frontend designs to deliver smooth and engaging user experiences.`;
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
      <div className="fixed bottom-8 right-8 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full w-16 h-16 glass-card shadow-lg hover-elevate active-elevate-2 transition-all duration-300 flex items-center justify-center"
        >
          {isOpen ? <X size={32} /> : <Bot size={32} />}
        </button>
      </div>

      {isOpen && (
        <div className="fixed bottom-28 right-8 z-50 w-80 h-[28rem] glass-card rounded-2xl shadow-2xl flex flex-col animate-in fade-in slide-in-from-bottom-4">
          <div className="p-4 border-b border-border/50">
            <h3 className="font-bold text-lg">AI Assistant</h3>
            <p className="text-sm text-muted-foreground">Ask me anything about Bilal!</p>
          </div>
          <div className="flex-1 p-4 overflow-y-auto">
            {messages.map((msg, index) => (
              <div key={index} className={`flex items-start gap-3 my-3 ${msg.type === 'user' ? 'justify-end' : ''}`}>
                {msg.type === 'bot' && <Bot className="w-6 h-6 flex-shrink-0" />}
                <div className={`rounded-xl p-3 max-w-[80%] ${msg.type === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                  <p className="text-sm">{msg.text}</p>
                </div>
                {msg.type === 'user' && <User className="w-6 h-6 flex-shrink-0" />}
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>
          <div className="p-4 border-t border-border/50 flex items-center gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Ask a question..."
              className="flex-1 bg-transparent focus:outline-none"
            />
            <button onClick={handleSendMessage} className="p-2 rounded-full bg-primary text-primary-foreground">
              <Send size={20} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
