import { createContext, Dispatch, SetStateAction } from "react";

type ChatContextValue = {
    setChat?: Dispatch<SetStateAction<number>>,
    addMessage?: (text:string) => void,
}

const ChatContext = createContext<ChatContextValue>({})
export default ChatContext