import { useEffect, useRef, useState } from "react"
import ChatbotIcon from "./ChatBotIcon"
import ChatForm from "./ChatForm"
import ChatMessage from "./ChatMessage"
import { companyInfo } from "../../companyInfo"

const Chatbot = () => {
    const [chatHistory, setChatHistory] = useState([{
        hideInChat: true,
        role: "model",
        text: companyInfo

}])
    const [showChatbot, setShowChatbot] = useState(false)

    const chatBodyRef = useRef()


    const API_URL = `${import.meta.env.VITE_API_URL}?key=${import.meta.env.VITE_GEMINI_API_KEY}`;

  const generateBotResponse = async (history) => {

    const updateHistory = (text) => {
        setChatHistory((prev) => [...prev.filter(msg=> msg.text !== 'Razisljam...'), { role: "model", text }])
    }

    history = history.map(({role, text})=>({role, parts: [{text}]}) )

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: history,
      }),
    });

    if (!response.ok) {
      throw new Error(data.error.message || "Failed to fetch response");
    }

    const data = await response.json();

    const botMessage =
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Nisam uspeo da generišem odgovor.";

        updateHistory(botMessage)

    return botMessage;
  } catch (error) {
    console.error("Gemini error:", error);
    return "Došlo je do greške. Pokušajte ponovo.";
  }
};

useEffect(() => {
    const el = chatBodyRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [chatHistory, showChatbot]);

  //onClick={() => setShowChatbot(prev => !prev)} in button id-"chatbot-toggler"

  return (
   <div className="fixed bottom-5 right-5 z-50">
    <button id="chatbot-toggler"  className="p-2 bg-primary text-white rounded-full">
      <ChatbotIcon />
    </button>
    {showChatbot && (
      <div className="chatbot-popup w-96 bg-secondary text-white rounded-lg shadow-lg overflow-hidden">
        {/* Chatbot Header */}
        <div className="chatbot-header flex items-center justify-between p-4">
            <div className="header-info flex items-center gap-2">
                <ChatbotIcon/>
            <h2 className="logo-text">Chatbot</h2>
        </div>
        <button onClick={() => setShowChatbot(prev => !prev)} className="material-symbols-rounded btn btn-primary text-white w-12 h-12 border-none outline-none cursor-pointer rounded-full hover:bg-primary/60 text-xl ">
                  keyboard_arrow_down
        </button>
        </div>
             {/* Chatbot Body */}    
             <div ref={chatBodyRef} className="chat-body p-4 overflow-y-auto h-[460px] flex flex-col scroll-smooth">
                <div className="message bot-message flex gap-[11px] items-center mb-4">
                    <div>
                    <ChatbotIcon />
                    </div>
                    <p className="message-text text-sm bg-primary/20 p-3 rounded-lg">
                        Zdravo! Ja sam tvoj Start Fitness asistent. Kako mogu da ti pomognem danas?
                    </p>
                </div>
                {chatHistory.map((chat, index) => (
                <ChatMessage key={index} chat={chat} />
                ))}
           
             </div>
                {/* Chatbot Footer */}
             <div className="chat-footer">
                    <ChatForm chatHistory={chatHistory} setChatHistory={setChatHistory} generateBotResponse={generateBotResponse}/>
             </div>
    </div>
    )}
     </div>
  )
}

export default Chatbot