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
      } mb-6 animate-fade-in`}
    >
      <div
        className={`max-w-[85%] sm:max-w-[75%] md:max-w-[70%] rounded-lg px-5 sm:px-6 py-4 sm:py-5 backdrop-blur-sm transition-all hover:scale-[1.01] ${
          isUser
            ? 'bg-white/5 border border-white/10'
            : 'bg-white/3 border border-white/5'
        }`}
      >
        <div className="text-sm sm:text-base text-white leading-relaxed whitespace-pre-wrap break-words font-light">
          {content}
        </div>
      </div>
    </div>
  );
}

