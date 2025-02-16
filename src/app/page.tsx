import ChatList from "@/components/ChatList";
import ChatWindow from "@/components/ChatWindow";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="flex gap-5  h-screen text-white max-h-screen p-10">
      <Sidebar />
      <div className="flex-1  bg-blend-color-burn bg-gray-900 flex border border-gray-700 rounded-md">
        <ChatList />
        <ChatWindow />
      </div>
    </div>
  );
}
