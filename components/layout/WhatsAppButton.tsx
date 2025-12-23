"use client";

import { MessageCircle } from "lucide-react";
import { companyInfo } from "@/lib/data";

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${companyInfo.whatsapp.replace(/[^0-9]/g, "")}?text=Hello! I would like to inquire about your business setup services.`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform whatsapp-pulse"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
    </a>
  );
}
