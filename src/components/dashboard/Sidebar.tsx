import SidebarSection from "./SidebarSection";
import { ChatData } from "./data";

export default function Sidebar({channels, directs}: {channels: ChatData[], directs: ChatData[]}) {

    return (
        <div className="flex flex-col gap-6">
            <SidebarSection name="Channels" chats={channels}/>
            <SidebarSection name="Direct messages" chats={directs}/>
        </div>
    )
}