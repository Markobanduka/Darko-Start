import ChatbotIcon from "./ChatBotIcon";
import ReactMarkdown from "react-markdown";

const ChatMessage = ({ chat }) => {
  return (
    !chat.hideInChat && (
      <div
        className={`message ${
          chat.role === "model" ? "bot" : "user"
        }-message flex gap-[11px] items-center ${
          chat.role === "user" ? "justify-end" : ""
        } mb-4`}
      >
        {chat.role === "model" && (
          <div>
            <ChatbotIcon />
          </div>
        )}

        <p className="message-text text-sm bg-primary/90 p-3 rounded-lg">
          <ReactMarkdown>{chat.text}</ReactMarkdown>
        </p>

        <div></div>
      </div>
    )
  );
};

export default ChatMessage;