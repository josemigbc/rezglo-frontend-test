import FormMessage from "./FormMessage"
import { ChatData } from "./data"

export default function Chat({data}: {data: ChatData} ){
    return (
        <div>
            <div>
                <h1>{data.name}</h1>
            </div>
            <div>
                <ul>
                    {data.messages.map(msg => (
                        <li>
                            <p>{msg.text}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <FormMessage/>
        </div>
    )
}