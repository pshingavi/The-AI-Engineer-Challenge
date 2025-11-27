'use client';

import { useState, KeyboardEvent } from 'react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}

export default function ChatInput({ onSendMessage, disabled }: ChatInputProps) {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim() && !disabled) {
      onSendMessage(message.trim());
      setMessage('');
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="border-t border-white/10 bg-black/80 backdrop-blur-md p-4 sm:p-5 sticky bottom-0 z-20">
      <div className="flex items-end gap-3 max-w-4xl mx-auto">
        <div className="flex-1 relative">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Type your message..."
            disabled={disabled}
            rows={1}
            className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-white/5 border border-white/10 rounded-lg text-sm sm:text-base text-white placeholder:text-white/40 focus:outline-none focus:border-[#0066ff] focus:ring-1 focus:ring-[#0066ff]/50 resize-none overflow-y-auto max-h-32 transition-all disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm"
            style={{
              minHeight: '52px',
              height: 'auto',
            }}
            onInput={(e) => {
              const target = e.target as HTMLTextAreaElement;
              target.style.height = 'auto';
              target.style.height = `${Math.min(target.scrollHeight, 128)}px`;
            }}
          />
        </div>
        <button
          onClick={handleSend}
          disabled={!message.trim() || disabled}
          className="px-6 sm:px-8 py-3 sm:py-4 bg-[#0066ff] hover:bg-[#0052cc] disabled:bg-white/5 disabled:text-white/30 text-white rounded-lg text-sm sm:text-base font-medium transition-all disabled:cursor-not-allowed disabled:hover:bg-white/5 whitespace-nowrap shadow-lg shadow-[#0066ff]/20 hover:shadow-[#0066ff]/30 disabled:shadow-none"
        >
          Send
        </button>
      </div>
    </div>
  );
}

