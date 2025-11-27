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
    <div className="border-t border-[#1a1a1a] bg-[#0a0a0a] p-3 sm:p-4 sticky bottom-0">
      <div className="flex items-end gap-2 sm:gap-3 max-w-4xl mx-auto">
        <div className="flex-1 relative">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Type your message..."
            disabled={disabled}
            rows={1}
            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[#111111] border border-[#1a1a1a] rounded-lg text-sm sm:text-base text-[#ededed] placeholder:text-[#888888] focus:outline-none focus:border-[#0066ff] resize-none overflow-y-auto max-h-32 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            style={{
              minHeight: '48px',
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
          className="px-4 sm:px-6 py-2.5 sm:py-3 bg-[#0066ff] hover:bg-[#0052cc] disabled:bg-[#1a1a1a] disabled:text-[#888888] text-white rounded-lg text-sm sm:text-base font-medium transition-colors disabled:cursor-not-allowed disabled:hover:bg-[#1a1a1a] whitespace-nowrap"
        >
          Send
        </button>
      </div>
    </div>
  );
}

