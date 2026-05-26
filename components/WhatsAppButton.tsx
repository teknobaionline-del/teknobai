"use client";
import { useEffect, useState } from "react";

export default function WhatsAppButton() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 2000);
        return () => clearTimeout(timer);
        }, []);

        return (
            <a
            href="https://wa.me/34633027532"
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundColor: "#25D366" }}
            aria-label="Contactar por WhatsApp"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg"
            >
            </a>
        );
    }

    