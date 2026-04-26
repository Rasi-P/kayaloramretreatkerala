import { MessageCircle } from "lucide-react";

export const FloatingBottomBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] px-4 py-3 flex gap-3 md:hidden">
      <a 
        href="https://wa.me/911234567890" 
        target="_blank" 
        rel="noreferrer"
        className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-xl font-semibold shadow-sm active:scale-95 transition-transform"
      >
        <MessageCircle className="w-5 h-5" />
        <span>WhatsApp</span>
      </a>
      <a 
        href="tel:+911234567890"
        className="flex-[1.5] flex items-center justify-center bg-[#0f8a84] text-white py-3 rounded-xl font-semibold shadow-sm active:scale-95 transition-transform"
      >
        BOOK NOW
      </a>
    </div>
  );
};
