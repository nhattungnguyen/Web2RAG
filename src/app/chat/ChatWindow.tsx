'use client';
import ToolButton from './Toolbutton';
import Message from './Message';


import { Suggestion } from './Suggestion';
import { useState, useEffect, useRef, use } from 'react';
import { Send, Plus, Sliders, Wand2, Lightbulb, BookOpen } from "lucide-react";
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea';

type ChatMessage = { sender: 'user' | 'ai', text: string };

export default function ChatWindow(){
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const endRef = useRef<HTMLDivElement>(null);


// Cuộn khi có tin nhắn

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    const text = input.trim();
    if(!text) return;
    setMessages((prev) => [...prev, { sender: 'user', text}]);
    setInput('');
    setTimeout(() => {
      setMessages((pred) => [
        ...pred,
        { sender: 'ai', text: `"${text}"` },
      ]);
    }, 800);
  };
  const inputRef = useRef<HTMLInputElement>(null);
  const onPick = (val: string) => {
  setInput(val);
  setTimeout(() => inputRef.current?.focus(), 0);
  };


  // Nếu chưa có tin nhắn

  if (messages.length ===0) {
    return (
      <div className="flex flex-col items-center justify-center h-full bg-gray-50 px-5">
        <h1 className="text-2xl font-semibold mb-6">Hôm nay bạn có ý tưởng gì?</h1>

        {/* Gợi ý dạng “thẻ” nhỏ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mx-auto w-full max-w-2xl mb-6">
          <Suggestion
            icon={<Wand2 className="h-4 w-4" />}
            text="Viết tóm tắt nội dung Url"
            onClick={() => onPick('Tóm tắt nội dung chính của trang này')}
          />
          <Suggestion
            icon={<Lightbulb className="h-4 w-4" />}
            text="Gợi ý từ khóa sản phẩm"
            onClick={() => onPick('Đề xuất bộ từ khóa về sản phẩm')}
          />
          <Suggestion
            icon={<BookOpen className="h-4 w-4" />}
            text="Tạo danh sách sản phẩm"
            onClick={() => onPick('Tạo 5 danh sách sản phẩm của website')}
          />
          <Suggestion
            icon={<Wand2 className="h-4 w-4" />}
            text="Tạo tóm tắt theo mục"
            onClick={() => onPick('Tạo tóm tắt theo đề mục của website')}
          />
        </div>
        
        {/* Thanh input giữa màn hình */}
        <div className="flex items-center w-full max-w-2xl bg-white border border-gray-300 
                        rounded-full shadow px-4 py-2 gap-2">
          <button className="text-gray-400 hover:text-gray-600">
            <Plus size={20} />
          </button>
          {/* Ô input */}
          <Textarea
            rows={1}
            placeholder="Hỏi bất kỳ điều gì"
            value={input}
            onChange={(e) => {
              setInput(e.target.value)
              const el = e.target
              el.style.height = "auto"
              el.style.height = el.scrollHeight + "px"
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault()
                handleSend()
              }
            }}
            className="flex-1 border-0 shadow-none focus-visible:ring-0 text-sm resize-none overflow-hidden min-h-[32px] h-[32px] leading-[20px] py-1"
          />

          <button className="text-gray-500 hover:text-gray-700">
            <Sliders size={20} />
          </button>
          <Button onClick={handleSend} size="icon" className="rounded-full">
            <Send className="h-4 w-4" />
          </Button>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          Mẹo: Nhấn <kbd className="px-1.5 py-0.5 rounded border">Enter</kbd> để gửi,{' '}
          <kbd className="px-1.5 py-0.5 rounded border">Shift</kbd> + <kbd className="px-1.5 py-0.5 rounded border">Enter</kbd> để xuống dòng.
        </p>

    </div>
    );
  }

  // Nếu xuất hiện tin nhắn
  const COMPOSER_H = 88 
  return (
    <div className="relative h-full overflow-hidden">
      {/* Messages */}
      {/* VÙNG CUỘN: full-width => scrollbar sát mép phải */}
      <div className="h-full overflow-y-auto" style={{ paddingBottom: COMPOSER_H }}>
          <div className="mx-auto w-full max-w-3xl px-4 md:px-6 py-4 md:py-6 space-y-4">
            {messages.map((m, i) => (
              <Message key={i} sender={m.sender} text={m.text} />
            ))}
            <div ref={endRef} />
            {messages.length === 0 && (
              <div className="text-sm text-muted-foreground">
                Chưa có tin nhắn. Hãy bắt đầu cuộc trò chuyện!
              </div>
            )}
          </div>
        </div>

      <div className="absolute inset-x-0 bottom-4 flex justify-center pointer-events-none">
        <div className="item-center pointer-events-auto flex w-full max-w-3xl bg-white rounded-full shadow-lg px-4 py-2 items-center gap-2">
          
          {/* Nút + */}
          
          <ToolButton />

          {/* Ô input */}
          <Textarea
            rows={1}
            placeholder="Hỏi bất kỳ điều gì"
            value={input}
            onChange={(e) => {
              setInput(e.target.value)
              const el = e.target
              el.style.height = "auto"
              el.style.height = el.scrollHeight + "px"
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault()
                handleSend()
              }
            }}
            className="flex-1 border-0 shadow-none focus-visible:ring-0 text-sm resize-none overflow-hidden min-h-[32px] h-[32px] leading-[20px] py-1"
          />

          {/* Nút công cụ */}
          <Button type="button" variant="ghost" size="icon" className="text-gray-400 hover:text-gray-600">
            <Sliders size={18} />
          </Button>

          {/* Nút gửi */}
          <Button onClick={handleSend} size="icon" className="rounded-full">
            <Send className="h-4 w-4" />
          </Button>
        </div>
        
      </div>
      
    </div>
  );
}
