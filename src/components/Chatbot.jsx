import ChatbotIcon from "./ChatBotIcon"

const Chatbot = () => {
  return (
   <div className="fixed bottom-5 right-5 z-50">
    <div className="chatbot-popup w-96 bg-secondary text-white rounded-lg shadow-lg overflow-hidden">
        {/* Chatbot Header */}
        <div className="chatbot-header flex items-center justify-between p-4">
            <div className="header-info flex items-center gap-2">
                <ChatbotIcon/>
            <h2 className="logo-text">Chatbot</h2>
        </div>
        <button className="material-symbols-rounded btn btn-primary text-white w-12 h-12 border-none outline-none cursor-pointer rounded-full hover:bg-primary/60 text-xl ">
                            keyboard_arrow_down
            </button>
        </div>
             {/* Chatbot Body */}    
             <div className="chat-body p-4 overflow-y-auto h-[460px] flex flex-col">
                <div className="message bot-message flex gap-[11px] items-center mb-4">
                    <div>
                    <ChatbotIcon />
                    </div>
                    <p className="message-text text-sm bg-primary/20 p-3 rounded-lg">
                        Zdravo! Ja sam tvoj lični fitnes asistent. Kako mogu da ti pomognem danas?
                    </p>
                </div>
                <div className="message user-message flex gap-[11px] items-center justify-end mb-4">
                    <p className="message-text text-sm bg-primary/90 p-3 rounded-lg">
                       Lorem ipsum dolor sit amet consectetur, adipisicing.
                    </p>
                     <div>
                    <ChatbotIcon/>
                    </div>
                </div>
             </div>
             {/*  HERE !!! 14:24  */}
                {/* Chatbot Footer */}
             <div className="chat-footer">
                <form action="#" className="chat-form">
                    <input type="text" placeholder="Unesite poruku..." className="message-input" required/>
                            <button className="material-symbols-rounded btn btn-primary text-white">
                            arrow_upward
            </button>
                </form>
             </div>
    </div>
   </div>
  )
}

export default Chatbot