import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import ChatWindow from "../chat/ChatWindow";

export default function MainLayout() {
    return (
        <div className="flex h-screen bg-[#050816] text-white">
            <Sidebar />

            <div className="flex flex-col flex-1">
                <Topbar />

                <main className="flex-1 p-8 overflow-hidden">
                    <ChatWindow />
                </main>
            </div>
        </div>
    );
}