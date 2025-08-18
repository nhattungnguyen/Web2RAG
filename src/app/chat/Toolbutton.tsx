"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sliders, Paperclip, Info, Folder, Plus } from "lucide-react"

export default function ToolButton() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          type="button" 
          variant="ghost" 
          size="icon" 
          className="text-gray-400 hover:text-gray-600"
        >
          <Plus size={18} />
        </Button>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent
        side="top" 
        align="start"   // căn theo bên trái của nút
        sideOffset={8}  // đẩy menu ra xa nút (theo chiều ngang)
        className="w-48"
      >
        <DropdownMenuItem>
          <Paperclip className="mr-2 h-4 w-4" />
          Tải tệp lên
          <Info className="ml-auto h-4 w-4 text-gray-400" />
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Folder className="mr-2 h-4 w-4" />
          Thêm từ Drive
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>

  )
}
