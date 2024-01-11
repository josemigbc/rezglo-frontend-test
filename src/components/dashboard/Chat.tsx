import FormMessage from "./FormMessage"
import Message from "./Message"
import { ChatData } from "./data"

export default function Chat({data}: {data: ChatData} ){
    return (
        <>
            <div className="border-b-2 border-slate-400 text-center py-3">
                <h1>{data.name}</h1>
            </div>
            <div className="px-3 py-3">
                <ul className="flex flex-col gap-3">
                    {data.messages.map(msg => (
                        <li className="flex justify-start gap-3">
                            <Message data={msg}/>
                        </li>
                    ))}
                </ul>
            </div>
            <FormMessage/>
        </>
    )
}