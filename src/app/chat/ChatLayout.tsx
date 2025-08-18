'use client'

import { useState } from 'react'
import ChatSidebar from './ChatSidebar'
import dynamic from 'next/dynamic'
import { PanelLeft, PanelRight, CirclePlus, Search } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

const ChatWindow = dynamic(() => import('./ChatWindow'), { ssr: false })

export default function ChatLayout() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside
        className={`bg-gray-100 text-black p-4 transition-all duration-300 
        ${collapsed ? "w-16" : "w-64"} flex flex-col`}
      >
        {/* Header của sidebar */}
        <div className="flex items-center justify-between mb-4">
          {!collapsed && <h2 className="text-lg font-bold">Menu</h2>}
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="ml-2 text-gray-600 hover:text-gray-800"
              aria-label="Toggle sidebar"
            >
              {collapsed ? (
                <PanelRight className="h-5 w-5" />
              ) : (
                <PanelLeft className="h-5 w-5" />
              )}
            </button>
          </div>

        {/* Nội dung sidebar */}
        {!collapsed ? (
          <ChatSidebar />
        ) : (
          <div className="flex flex-col items-center gap-6 mt-16">
            <button className="p-2 rounded hover:bg-gray-200">
              <CirclePlus className="h-5 w-5" />
            </button>
            <button className="p-2 rounded hover:bg-gray-200">
              <Search className="h-5 w-5" />
            </button>
          </div>
        )}
      </aside>

      {/* Separator để giữ border giữa sidebar và chat */}
      <Separator orientation="vertical" className="h-full" />

      {/* Chat Window */}
      <main className="flex-1 bg-gray-50 flex justify-center relative overflow-hidden">
        <div className="w-full max-w-3xl flex flex-col overflow-hidden">
          <ChatWindow />
        </div>
      </main>
    </div>

  )
}
