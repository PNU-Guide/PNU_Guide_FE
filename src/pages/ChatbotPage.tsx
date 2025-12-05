import React, { useState, useRef, useEffect } from 'react';

// 메시지 타입을 정의합니다.
interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: string;
}

// 개별 메시지 버블 컴포넌트
const MessageBox: React.FC<{ message: Message }> = ({ message }) => {
  const isUser = message.sender === 'user';
  const time = new Date(message.timestamp).toLocaleTimeString('ko-KR', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

  if (isUser) {
    return (
      <div className="flex items-end justify-end self-stretch pr-5">
        <span className="text-gray-400 text-[10px] mb-1 mr-1.5">{time}</span>
        <div className="flex max-w-[70%] flex-col items-start rounded-lg bg-[#0275C9] py-2 px-3 text-left">
          <span
            className="text-white text-sm"
            style={{ whiteSpace: 'pre-wrap' }}
          >
            {message.text}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-end self-start pl-5">
      <div className="flex max-w-[70%] flex-col items-start rounded-lg bg-gray-100 py-2 px-3 text-left">
        <span
          className="text-gray-700 text-sm"
          style={{ whiteSpace: 'pre-wrap' }}
        >
          {message.text}
        </span>
      </div>
      <span className="text-gray-400 text-[10px] mb-1 ml-1">{time}</span>
    </div>
  );
};

const ChatbotPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: '네, 안녕하세요!\n저는 PNU GUIDE의 공식 챗봇이에요.\n무엇을 도와드릴까요? ☺️',
      sender: 'bot',
      timestamp: new Date().toISOString(),
    },
  ]);
  const [input, setInput] = useState('');
  const chatEndRef = useRef<HTMLDivElement>(null);

  // 메시지가 추가될 때마다 맨 아래로 스크롤
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: input,
      sender: 'user',
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
  };

  return (
    <div className="flex h-screen flex-col bg-white">
      {/* 헤더 */}
      <div className="flex items-center justify-center self-stretch border-b border-gray-200 p-4">
        <span className="text-base font-semibold text-gray-800">
          PNU GUIDE 공식 챗봇
        </span>
      </div>

      {/* 메시지 목록 */}
      <div className="flex flex-grow flex-col gap-4 overflow-y-auto p-4">
        {messages.map((msg) => (
          <MessageBox key={msg.id} message={msg} />
        ))}
        <div ref={chatEndRef} />
      </div>

      {/* 입력창 */}
      <div className="flex items-center self-stretch border-t border-gray-200 bg-gray-50 p-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          placeholder="메시지를 입력하세요."
          className="flex-grow rounded-lg border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
        />
        <button
          onClick={handleSendMessage}
          className="ml-2 rounded-lg bg-blue-600 px-4 py-2 text-white disabled:bg-gray-400"
          disabled={!input.trim()}
        >
          전송
        </button>
      </div>
    </div>
  );
};

export default ChatbotPage;
