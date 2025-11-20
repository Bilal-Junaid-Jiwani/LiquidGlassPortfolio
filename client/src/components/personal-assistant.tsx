import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { MessageSquare, Bot, User, CornerDownLeft, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { AnimatePresence, motion } from "framer-motion";

const assistantData = {
  name: "Bilal's AI Assistant",
  introduction: "Hello! I'm Bilal's AI assistant. You can ask me about his skills, projects, or experience.",
  responses: {
    "who are you": "I am an AI assistant for Muhammad Bilal Junaid Jiwani, a passionate Full-Stack Developer.",
    "who is the owner": "The owner of this portfolio is Muhammad Bilal Junaid Jiwani, a passionate Full-Stack Developer.",
    "what is his name": "His name is Muhammad Bilal Junaid Jiwani.",
    "what are his skills": "Bilal is skilled in a wide range of technologies. His frontend skills include React, JavaScript, Tailwind CSS, Bootstrap, HTML, and CSS. For the backend, he uses Django, Node.js, Python, MongoDB, PostgreSQL, and Firebase. He is also proficient with tools like n8n, Git & GitHub, WordPress, Google AdSense, SEO, and Amazon VA. You can see more details in the skills section.",
    "frontend skills": "Bilal's frontend skills include React, JavaScript, Tailwind CSS, Bootstrap, HTML, and CSS.",
    "backend skills": "For the backend, he uses Django, Node.js, Python, MongoDB, PostgreSQL, and Firebase.",
    "tools": "He is proficient with tools like n8n, Git & GitHub, WordPress, Google AdSense, SEO, and Amazon VA.",
    "what is his experience": "Bilal has 2 years of experience as a WordPress Developer (2023-2024), where he also managed Google AdSense and ADX publishing. He is currently enhancing his skills in Modern Web Application Development at Saylani Institute and pursuing a certification in Agentic & Robotic AI Engineering at PIAIC. He also won a hackathon at Zaitoon Ashraf IT Park where he developed 'Pitch Craft AI'.",
    "education": "Bilal is currently learning Modern Web Application Development at Saylani Institute and pursuing a certification in Agentic & Robotic AI Engineering at PIAIC.",
    "journey": "Bilal's journey includes 2 years of experience as a WordPress Developer, managing Google AdSense and ADX publishing. He is now focused on modern web development and AI, studying at Saylani Institute and PIAIC. He is also a hackathon winner.",
    "projects": "Bilal has worked on several projects, including 'PitchCraft AI' (a hackathon-winning AI-powered pitch generation tool), a Financial Banking System with Django, a Hospital Management System with Django, and a Reddit Leads Automation system using n8n, Python, and React. You can find more details in the projects section.",
    "pitchcraft ai": "PitchCraft AI is an AI-powered pitch generation and website code tool for startup ideas. It was developed as part of a hackathon, which Bilal won.",
    "contact": "You can contact Bilal using the contact form on this page.",
    "default": "I'm not sure how to answer that. Please try asking another question. You can ask about Bilal's skills, experience, projects, or how to contact him."
  }
};

type Message = {
  text: string;
  sender: "user" | "bot";
};

export function PersonalAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (inputValue.trim() === "") return;

    const userMessage: Message = { text: inputValue, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);

    const botResponse = getBotResponse(inputValue);
    const botMessage: Message = { text: botResponse, sender: "bot" };

    setTimeout(() => {
      setMessages((prev) => [...prev, botMessage]);
    }, 500);

    setInputValue("");
  };

  const getBotResponse = (input: string): string => {
    const lowercasedInput = input.toLowerCase();
    for (const keyword in assistantData.responses) {
      if (lowercasedInput.includes(keyword)) {
        return (assistantData.responses as any)[keyword];
      }
    }
    return assistantData.responses.default;
  };

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="fixed h-16 w-16 rounded-full bg-primary/80 text-primary-foreground backdrop-blur-sm hover:bg-primary active:scale-95 transition-all"
          style={{ bottom: '1.5rem', right: '1.5rem', left: 'auto' }}
        >
          <Bot className="h-8 w-8" />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="h-[80vh] bg-background/80 backdrop-blur-xl border-t-0">
        <div className="container mx-auto h-full flex flex-col">
          <DrawerHeader className="relative">
            <DrawerTitle className="text-2xl font-bold text-center">
              {assistantData.name}
            </DrawerTitle>
            <Button variant="ghost" size="icon" className="absolute top-2 right-2" onClick={() => setIsOpen(false)}>
              <X />
            </Button>
          </DrawerHeader>
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-start gap-3"
              >
                <div className="p-2 rounded-full bg-primary/20 text-primary">
                  <Bot />
                </div>
                <div className="bg-muted rounded-lg p-3 max-w-[80%]">
                  <p>{assistantData.introduction}</p>
                </div>
              </motion.div>
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-start gap-3 ${msg.sender === "user" ? "justify-end" : ""}`}
                >
                  {msg.sender === "bot" && (
                    <div className="p-2 rounded-full bg-primary/20 text-primary">
                      <Bot />
                    </div>
                  )}
                  <div className={`rounded-lg p-3 max-w-[80%] ${msg.sender === "user" ? "bg-primary text-primary-foreground" : "bg-muted"}`}>
                    <p>{msg.text}</p>
                  </div>
                  {msg.sender === "user" && (
                    <div className="p-2 rounded-full bg-muted text-muted-foreground">
                      <User />
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          <div className="p-4 border-t">
            <div className="relative">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Ask a question..."
                className="pr-12 h-12 rounded-full"
              />
              <Button
                size="icon"
                className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full"
                onClick={handleSendMessage}
              >
                <CornerDownLeft />
              </Button>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
