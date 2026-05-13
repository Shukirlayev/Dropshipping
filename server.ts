import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Telegramga buyurtma yuborish API
  app.post("/api/order", async (req, res) => {
    try {
      const { name, phone, telegram, product } = req.body;
      const botToken = process.env.TELEGRAM_BOT_TOKEN;
      const chatId = process.env.TELEGRAM_CHAT_ID;

      if (!botToken || !chatId) {
        return res.status(500).json({ 
          success: false, 
          message: "Serverda Telegram konfiguratsiyasi topilmadi. .env faylni tekshiring." 
        });
      }

      const formattedTelegram = telegram.trim().startsWith('@') ? telegram.trim() : `@${telegram.trim()}`;
      const message = `🛍️ *Yangi buyurtma keldi!*\n\n📦 *Mahsulot:* ${product.name}\n💰 *Narxi:* ${product.price}\n\n👤 *Mijoz:* ${name}\n📞 *Tel:* ${phone}\n💬 *Telegram:* ${formattedTelegram}`;

      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: "Markdown",
        }),
      });

      if (!response.ok) {
        throw new Error("Telegram API xatosi");
      }

      res.json({ success: true, message: "Buyurtma muvaffaqiyatli yuborildi!" });
    } catch (error) {
      console.error("Order error:", error);
      res.status(500).json({ success: false, message: "Xatolik yuz berdi" });
    }
  });

  // Vite middleware
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
