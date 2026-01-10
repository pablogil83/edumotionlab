import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Activity, Loader2, Minimize2 } from 'lucide-react';
import { GoogleGenAI, Chat } from "@google/genai";

// Definición de tipos para los mensajes
interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

// Contexto del conocimiento actualizado para Innovar en Movimiento
const KNOWLEDGE_BASE = `
Eres "EduBot", el asistente virtual de la consultoría educativa "EduMotion Lab".
Tu objetivo es informar sobre nuestro producto estrella: el curso "Innovar en Movimiento".

JERARQUÍA Y DEFINICIONES:
1. **EduMotion Lab**: Es la entidad/consultora. Un equipo de expertos (Olga, José Manuel, Pablo) con más de 5 años de experiencia transformando la Educación Física.
2. **"Innovar en Movimiento"**: Es el CURSO o programa formativo que vende EduMotion Lab. No es el nombre de la empresa, es el nombre del producto.

DATOS CLAVE DEL CURSO "INNOVAR EN MOVIMIENTO":
- **Qué es**: Un programa de especialización docente para profesores de Educación Física.
- **Objetivo**: Digitalizar el gimnasio sin perder tiempo motor, usando metodologías activas y cumpliendo la LOMLOE.
- **Duración**: 40 horas certificadas.
- **Modalidad**: Online vía Moodle.
- **Precio**: Consultar en la web (simulado).

DATOS DE LA EMPRESA "EDUMOTION LAB":
- **Experiencia**: Más de 5 años.
- **Impacto**: 800+ docentes formados, 120+ centros adheridos.
- **Filosofía**: Tecnología Invisible (herramientas que ayudan pero no estorban).

INSTRUCCIONES DE RESPUESTA:
1. Si te preguntan "¿Quiénes sois?", responde como EduMotion Lab.
2. Si te preguntan "¿Qué ofrecéis?", habla del curso "Innovar en Movimiento".
3. Distingue siempre entre la consultora (nosotros) y el curso (nuestro producto).
4. Usa los datos estadísticos clave (800+ docentes, 120+ centros).
5. Mantén un tono profesional, experto en pedagogía deportiva y LOMLOE.
`;

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      text: '¡Hola! Soy EduBot 🤖, asistente de EduMotion Lab. ¿Te interesa saber más sobre nuestro nuevo curso "Innovar en Movimiento"?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatSessionRef = useRef<Chat | null>(null);

  useEffect(() => {
    const initChat = () => {
      // PREVENCIÓN DE CRASH: Verificar si hay API KEY antes de intentar inicializar
      const apiKey = process.env.API_KEY;
      if (!apiKey || apiKey === '') {
        console.warn("EduBot: No API Key found. Chatbot will be disabled or limited.");
        return;
      }

      try {
        const ai = new GoogleGenAI({ apiKey });
        chatSessionRef.current = ai.chats.create({
          model: 'gemini-3-flash-preview',
          config: {
            systemInstruction: KNOWLEDGE_BASE,
            temperature: 0.7,
          },
        });
      } catch (error) {
        console.error("Error inicializando el chat:", error);
      }
    };
    
    if (!chatSessionRef.current) initChat();
  }, []);

  const scrollToBottom = () => messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  useEffect(() => { if (isOpen) scrollToBottom(); }, [messages, isOpen]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;
    
    const userMessage: Message = { id: Date.now().toString(), text: input, sender: 'user', timestamp: new Date() };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    
    try {
      if (!chatSessionRef.current) {
        // Fallback si no hay API Key o sesión
        setTimeout(() => {
          const botMessage: Message = { 
            id: (Date.now() + 1).toString(), 
            text: "Lo siento, el asistente no está conectado a la IA en este momento (API Key no configurada). Por favor, usa el formulario de contacto.", 
            sender: 'bot', 
            timestamp: new Date() 
          };
          setMessages(prev => [...prev, botMessage]);
          setIsLoading(false);
        }, 500);
        return;
      }

      const response = await chatSessionRef.current.sendMessage({ message: userMessage.text });
      const botMessage: Message = { id: (Date.now() + 1).toString(), text: response.text || "Lo siento, tuve un problema procesando tu respuesta.", sender: 'bot', timestamp: new Date() };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error("Error enviando mensaje:", error);
      setMessages(prev => [...prev, { id: Date.now().toString(), text: "Lo siento, ha ocurrido un error de conexión. Inténtalo más tarde.", sender: 'bot', timestamp: new Date() }]);
    } finally { 
      if (chatSessionRef.current) setIsLoading(false); 
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-[9999] p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center ${
          isOpen ? 'bg-gray-200 text-gray-600' : 'bg-gradient-to-r from-accent to-accent-light text-white animate-bounce-subtle'
        }`}
        style={{ zIndex: 9999 }}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
      </button>

      {/* Ventana de Chat */}
      <div 
        className={`fixed z-[9999] transition-all duration-300 flex flex-col bg-white overflow-hidden shadow-2xl ${
          isOpen 
            ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' 
            : 'opacity-0 translate-y-10 scale-95 pointer-events-none'
        } inset-0 w-full h-[100dvh] rounded-none md:inset-auto md:bottom-24 md:right-8 md:w-[380px] md:rounded-2xl md:border md:border-gray-100`}
        style={{ 
          zIndex: 9999,
          // Desktop height: use min to pick the smaller value between 600px and the available viewport height minus buffer
          height: isOpen && window.matchMedia("(min-width: 768px)").matches ? 'min(600px, calc(100vh - 130px))' : undefined
        }}
      >
        <div className="bg-gradient-to-r from-primary to-primary-dark p-4 flex items-center justify-between text-white shrink-0 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm"><Activity className="h-5 w-5 text-white" /></div>
            <div>
              <h3 className="font-bold text-base md:text-sm">Asistente EduMotion</h3>
              <div className="flex items-center gap-1.5"><span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span><span className="text-xs text-blue-100">En línea</span></div>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors"><Minimize2 className="h-6 w-6 md:h-5 md:w-5" /></button>
        </div>
        <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}>
              <div className={`max-w-[85%] md:max-w-[80%] p-3.5 rounded-2xl text-sm shadow-sm leading-relaxed ${msg.sender === 'user' ? 'bg-primary text-white rounded-tr-none' : 'bg-white text-gray-700 border border-gray-100 rounded-tl-none'}`}>{msg.text}</div>
            </div>
          ))}
          {isLoading && <div className="flex justify-start animate-fade-in"><div className="bg-white p-4 rounded-2xl rounded-tl-none border border-gray-100 shadow-sm flex items-center gap-2"><div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div><div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-75"></div><div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></div></div></div>}
          <div ref={messagesEndRef} />
        </div>
        <div className="p-4 bg-white border-t border-gray-100 shrink-0 safe-area-bottom">
          <form onSubmit={handleSend} className="relative flex items-center gap-2">
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Pregunta sobre el curso..." className="w-full pl-4 pr-12 py-3.5 md:py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-base md:text-sm transition-all shadow-inner" disabled={isLoading} />
            <button type="submit" disabled={!input.trim() || isLoading} className="absolute right-2 p-2 bg-primary text-white rounded-lg hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm">{isLoading ? <Loader2 className="h-5 w-5 md:h-4 md:w-4 animate-spin" /> : <Send className="h-5 w-5 md:h-4 md:w-4" />}</button>
          </form>
          <div className="text-center mt-2 pb-1 md:pb-0"><p className="text-[10px] text-gray-400">Consultoría EduMotion Lab</p></div>
        </div>
      </div>
    </>
  );
};

export default Chatbot;