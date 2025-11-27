'use client';

interface ChatMessageProps {
  role: 'user' | 'assistant';
  content: string;
}

export default function ChatMessage({ role, content }: ChatMessageProps) {
  const isUser = role === 'user';
  
  return (
    <div
      className={`flex w-full ${
        isUser ? 'justify-end' : 'justify-start'
      } mb-6`}
    >
      <div
        className={`max-w-[85%] sm:max-w-[75%] md:max-w-[70%] rounded-lg px-4 sm:px-5 py-3 sm:py-4 ${
          isUser
            ? 'bg-[#1a1a1a] border border-[#2a2a2a]'
            : 'bg-[#0f0f0f] border border-[#1a1a1a]'
        }`}
      >
        <div className="text-sm sm:text-base text-[#ededed] leading-relaxed whitespace-pre-wrap break-words">
          {content}
        </div>
      </div>
    </div>
  );
}

