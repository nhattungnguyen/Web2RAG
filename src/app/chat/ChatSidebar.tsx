// import { CirclePlus } from "lucide-react";

// // src/app/chat/ChatSidebar.tsx
// export default function ChatSidebar() {
//   return (
//     <>
//       <button className="bg-transparent hover:bg-gray-700 p-2 rounded text-left mb-4">
//         <CirclePlus className="inline-block mr-2" /> New Chat
//       </button>
//       <div className="text-gray-400 text-sm mb-2">Lịch sử trò chuyện</div>
//       <ul className="flex-1 overflow-y-auto space-y-2">
//         <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">Cuộc trò chuyện 1</li>
//         <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">Cuộc trò chuyện 2</li>
//       </ul>
//     </>
//   );
// }

'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";
import { CirclePlus, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Separator } from "@/components/ui/separator";

import UrlForm from "../submit-url/UrlForm";

export default function ChatSidebar() {
  const router = useRouter();
  return (
    <div className="flex flex-col h-full">
      {/* New Chat button*/}
      
      <Button
        onClick={() => router.push("/submit-url")}
        variant= "ghost"
        className="w-full justify-start mb-2 font-9-normal text-gray-700 text-sm hover:bg-gray-200"
      >
        <CirclePlus className="mr-2" />
        New Chat
      </Button>
      <Button
        variant="ghost"
        className="w-full justify-start mb-2 font-9-normal text-gray-700 text-sm hover:bg-gray-200"

      >
        <Search className="mr-2" />
        Search Chat
      </Button>
      {/* Title*/}
      <div className="text-gray-400 text-sm mb-2">Lịch sử trò chuyện</div>
      <Separator className="mb-2" />
      {/* Chat List*/}
      <ScrollArea className="flex-1">
        <ul className="space-y-1 pr-2">
          <li>
            <Button
              variant="ghost"
              className="w-full justify-start mb-2 font-9-normal text-gray-700 text-sm hover:bg-gray-200"
            >
              Cuộc trò chuyện 1
            </Button>
          </li>
          <li>
            <Button
              variant="ghost"
              className="w-full justify-start mb-2 font-9-normal text-gray-700 text-sm hover:bg-gray-200"
            >
              Cuộc trò chuyện 2
            </Button>
          </li>
        </ul>
      </ScrollArea>
    </div>

    
  )
}