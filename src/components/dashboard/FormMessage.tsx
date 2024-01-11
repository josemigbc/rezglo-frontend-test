import { FormEvent, FormEventHandler, useContext, useState } from "react"
import ChatContext from "./ChatContext"

export default function FormMessage(){

    const {addMessage} = useContext(ChatContext)
    const [text, setText] = useState('')

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        addMessage && addMessage(text);
        setText('')
    }
    
    return (
        <form className="fixed bottom-0 px-3 py-3 flex justify-start items-center gap-3" onSubmit={handleSubmit}>
            <textarea rows={2} placeholder="Message..." value={text} onChange={(e)=>{setText(e.target.value)}}
            className="resize-none px-2 py-1 text-sm border-2 border-slate-300 outline-none rounded-lg">
            </textarea>
            <button className="bg-green-500 px-2 py-1 rounded-md">
                Send
            </button>
        </form>
    )
}