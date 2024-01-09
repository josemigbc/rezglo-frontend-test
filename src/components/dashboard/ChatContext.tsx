import { createContext, Dispatch, SetStateAction } from "react";

type ChatContextValue = {
    chat?: string,
    setChat?: Dispatch<SetStateAction<number>>,
}

const ChatContext = createContext<ChatContextValue>({})
export default ChatContext