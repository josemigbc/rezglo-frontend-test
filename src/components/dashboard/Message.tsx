import { ChatData } from "./data"

type Props = ChatData["messages"][number]

export default function Message({ data }: { data: Props }) {
    return (
        <>
            <div>
                <img src={data.user.photo} className="w-10 h-10" />
            </div>
            <div>
                <div className="flex justify-start items-center gap-3">
                    <h2 className="me-2 font-bold mb-1">{data.user.username}</h2>
                    <span className="text-xs">{new Date(data.timestamp).toLocaleTimeString()}</span>
                </div>
                <p className="text-sm">{data.text}</p>
            </div>
        </>
    )
}