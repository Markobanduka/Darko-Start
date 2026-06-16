import { useRef } from "react"

const ChatForm = ({chatHistory, setChatHistory, generateBotResponse }) => {

    const inputRef =useRef()

    const handleFormSubmit = (e) => {
        e.preventDefault()
        const userMessage = inputRef.current.value.trim()
        if(!userMessage) return
        inputRef.current.value = ""
        console.log("User message:", userMessage)
        setChatHistory((history) => [...history, { role: "user", text: userMessage }])
        setTimeout(() => {
            setChatHistory((history) => [...history, { role: "model", text: "Razisljam..." }])

        generateBotResponse([...chatHistory, { role: "user", text: `Using the details provided above, please address this query: ${userMessage}` }])
    }, 600)
    }

  return (
        <form action="#" className="chat-form p-3" onSubmit={handleFormSubmit}>
            <div className="flex items-center gap-0">
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Unesite poruku..."
                    className="message-input flex-1 h-11 px-4 bg-white text-black placeholder-gray-500 rounded-l-full border border-primary/20 focus:outline-none"
                    required
                />
                <button type="submit" aria-label="Send message" className="material-symbols-rounded btn btn-primary bg-primary text-white w-11 h-11 rounded-r-full flex items-center justify-center border border-primary/20">
                    arrow_upward
                </button>
            </div>
        </form>
  )
}

export default ChatForm