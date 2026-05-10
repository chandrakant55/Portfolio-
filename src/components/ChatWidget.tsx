import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, User } from 'lucide-react';
import { io, Socket } from 'socket.io-client';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'CK_webby';
  timestamp: string;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi there! 👋 How can I help you with your website today?",
      sender: 'CK_webby',
      timestamp: new Date().toISOString()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const socketRef = useRef<Socket | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Connect to the same host as the window
    socketRef.current = io();

    socketRef.current.on('message', (message: Message) => {
      // Only add message if it's from the other side (to avoid duplicates if broadcasted back)
      // Actually, in the server I broadcast to everyone. But for the user, if they send, 
      // they already added it locally (optimistic update).
      // So here we only add if it's from the bot.
      if (message.sender === 'CK_webby') {
        setMessages(prev => [...prev, message]);
      }
    });

    return () => {
      socketRef.current?.disconnect();
    };
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date().toISOString()
    };

    // Optimistic update
    setMessages(prev => [...prev, newMessage]);
    
    // Emit to server
    socketRef.current?.emit('message', newMessage);
    
    setInputText('');
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.8 }}
            className="mb-6 w-[350px] sm:w-[400px] h-[500px] bento-card flex flex-col p-0 overflow-hidden shadow-2xl shadow-brand/20 bg-bg/95 backdrop-blur-2xl"
          >
            {/* Header */}
            <div className="bg-brand p-4 flex items-center justify-between text-black">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center">
                  <User size={20} />
                </div>
                <div>
                  <h4 className="font-black uppercase text-xs tracking-widest">CK_webby</h4>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-green-900 animate-pulse" />
                    <span className="text-[10px] font-bold uppercase tracking-wider opacity-60">Online Now</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="hover:scale-110 transition-transform"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((m) => (
                <div 
                  key={m.id}
                  className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm ${
                      m.sender === 'user' 
                        ? 'bg-brand text-black font-medium rounded-tr-none' 
                        : 'bg-white/10 text-white rounded-tl-none border border-white/5'
                    }`}
                  >
                    {m.text}
                    <div className={`text-[9px] mt-1 opacity-50 ${m.sender === 'user' ? 'text-black' : 'text-white'}`}>
                      {new Date(m.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSendMessage} className="p-4 border-t border-white/10 bg-white/5">
              <div className="flex gap-2">
                <input 
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-brand transition-colors"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                />
                <button 
                  type="submit"
                  className="w-12 h-12 bg-brand text-black rounded-xl flex items-center justify-center hover:bg-brand-dark transition-colors shrink-0"
                >
                  <Send size={18} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-xl transition-colors ${
          isOpen ? 'bg-white text-black' : 'bg-brand text-black shadow-brand/20'
        }`}
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </motion.button>
    </div>
  );
}
