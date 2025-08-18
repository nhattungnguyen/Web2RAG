// type Props = {
//     sender: 'user' | 'ai';
//     text: string;
// };

// export default function Message({ sender, text }: Props) {
//   const isUser = sender === 'user';
//   return (
//     <div
//       className={`flex ${
//         isUser ? 'justify-end' : 'justify-start'
//       } w-full`}
//     >
//       <div
//         className={`${
//           isUser
//             ? 'bg-blue-500 text-white max-w-sm'
//             : 'bg-gray-200 text-gray-900 w-full'
//         } px-4 py-3 rounded-lg`}
//       >
//         {text}
//       </div>
//     </div>
//   );
// }

// components/chat/Message.tsx
'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

export default function Message({ sender, text }:{
  sender: 'user'|'ai'; text: string
}) {
  const isUser = sender === 'user'
  return (
    <div className={`flex items-start gap-2 ${isUser ? 'justify-end' : 'justify-start'}`}>
      {!isUser && <Avatar className="mt-1"><AvatarFallback>AI</AvatarFallback></Avatar>}
      <Card className={`max-w-[80%] ${isUser ? 'bg-primary text-primary-foreground' : ''}`}>
        <CardContent className="p-3 text-sm whitespace-pre-wrap">{text}</CardContent>
      </Card>
      {isUser && <Avatar className="mt-1"><AvatarFallback>U</AvatarFallback></Avatar>}
    </div>
  )
}
