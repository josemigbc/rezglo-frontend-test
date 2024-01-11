import { useContext } from "react"
import ChatContext from "./ChatContext"
import { ChatData } from "./data"

export default function SidebarSection({name, chats}: {name: string, chats: ChatData[]}) {

    const {setChat} = useContext(ChatContext)

    return (
        <details>
            <summary className="flex justify-between items-center">
                <span>{name}</span>
                <span>+</span>
            </summary>
            <ul>
                {chats.map( chat => (
                    <li onClick={() => {setChat && setChat(chat.id)}}>
                        <p># {chat.name}</p>
                    </li>
                ))}
            </ul>
        </details>
    )
}