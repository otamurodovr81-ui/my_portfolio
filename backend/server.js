
const express = require("express");
const cors = require("cors");
const path = require("path");

// .env faylini yuklash
require("dotenv").config({
    path: path.join(__dirname, ".env")
});

const app = express();

// CORS
app.use(cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173"
}));
// JSON ma'lumotlarni qabul qilish
app.use(express.json());

// HTML belgilarini xavfsizlashtirish
const escapeHTML = (value = "") => {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
};

// Contact API
app.post("/api/contact", async (req, res) => {
    try {
        const { name, telegram, message } = req.body;

        // Maydonlarni tekshirish
        if (
            !name?.trim() ||
            !telegram?.trim() ||
            !message?.trim()
        ) {
            return res.status(400).json({
                success: false,
                message: "Barcha maydonlarni to'ldiring!"
            });
        }

        // Telegram username
        const username = telegram.trim().replace(/^@/, "");

        if (!/^[a-zA-Z0-9_]{5,32}$/.test(username)) {
            return res.status(400).json({
                success: false,
                message: "Telegram username noto'g'ri!"
            });
        }

        // Ma'lumotlarni xavfsizlashtirish
        const safeName = escapeHTML(name.trim());
        const safeTelegram = escapeHTML(username);
        const safeMessage = escapeHTML(message.trim());

        // Telegram xabar dizayni
        const text = `
<b>📩 Yangi xabar </b>
<i>📅 Portfolio orqali yuborildi</i>
━━━━━━━━━━━━━━

👤 <b>Ism:</b> ${safeName}

✈️ <b>Telegram:</b> @${safeTelegram}

🔗 <a href="https://t.me/${username}">Telegram profiliga o'tish</a>

💬 <b>Xabar:</b>

${safeMessage}

━━━━━━━━━━━━━━

↩️ Telegram orqali javob berishingiz mumkin.

        `;

        // Telegram API
        const response = await fetch(
            `https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    chat_id: process.env.CHAT_ID,
                    text,
                    parse_mode: "HTML"
                })
            }
        );

        const data = await response.json();

        // Telegram xatosini tekshirish
        if (!response.ok || !data.ok) {
            console.log("Telegram xatosi:", data);

            return res.status(500).json({
                success: false,
                message: "Telegram xabarni yubora olmadi!"
            });
        }

        // Muvaffaqiyatli javob
        return res.status(200).json({
            success: true,
            message: "Xabar muvaffaqiyatli yuborildi!"
        });

    } catch (error) {
        console.log("Server xatosi:", error);

        return res.status(500).json({
            success: false,
            message: "Serverda xatolik yuz berdi!"
        });
    }
});

// Serverni ishga tushirish
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server ${PORT}-portda ishlamoqda`);
});
