import { useState } from "react"
import Sidebar from "./Sidebar"
import Chat from "./Chat"
import ChatContext from "./ChatContext"
import { data } from "./data"

export default function Dashboard() {

    const [chat, setChat] = useState<number>(0)
    const [chatData, setChatData] = useState(data.channels.concat(data.directs))

    const addMessage = (text: string) => {
        setChatData(prevChatData => {
            prevChatData[chat - 1].messages.push({
                user: {
                    username: "You",
                    photo: "/src/assets/react.svg",
                },
                text: text,
                timestamp: new Date().getTime(),
            })
            return [...prevChatData]
        })
    }

    return (
        <ChatContext.Provider value={{ setChat, addMessage }}>
            <div className="grid grid-cols-3 h-screen">
                <div className="px-3 border-e-2 border-slate-400 py-6">
                    <Sidebar channels={data.channels} directs={data.directs} />
                </div>
                <div className="col-span-2">
                    {chat > 0 ? <Chat data={chatData.filter(ch => ch.id === chat)[0]} /> : (
                        <div className="flex justify-center items-center h-full">
                            <h1>Press a chat to see the messages.</h1>
                        </div>
                    )}
                </div>
            </div>
        </ChatContext.Provider>
    )
}