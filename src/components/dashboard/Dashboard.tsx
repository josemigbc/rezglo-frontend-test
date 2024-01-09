import { useState } from "react"
import Sidebar from "./Sidebar"
import Chat from "./Chat"
import ChatContext from "./ChatContext"
import { data } from "./data"

export default function Dashboard() {

    const [chat, setChat] = useState<number>(0)
    const chatData = data.channels.concat(data.directs).filter(ch => ch.id === chat)[0]

    return (
        <ChatContext.Provider value={{setChat}}>
            <main>
                <Sidebar channels={data.channels} directs={data.directs} />
                {chat > 0 ? <Chat data={chatData} /> : <></>}
            </main>
        </ChatContext.Provider>
    )
}