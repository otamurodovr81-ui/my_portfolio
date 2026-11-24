
import { User,  Mail, Phone, Locate, LocateIcon } from "lucide-react";
import { FaLocationArrow, FaTelegram, FaTelegramPlane } from "react-icons/fa";
import { FaLocationDot, FaLocationPin } from "react-icons/fa6";
import { useLanguage } from "../context/LanguageContext";
import { useState } from "react";
import { toast } from "react-toastify";

function Contact() {


    const { t } = useLanguage();

    const nameRegex = /^[a-z0-9A-Zа-яА-ЯёЁўқғҳЎҚҒҲ\s'-]{2,30}$/;

    const telegramRegex = /^@[a-zA-Z][a-zA-Z0-9_]{4,31}$/;

    const messageRegex = /^.{10,1000}$/s;

    const validate = () => {
        const newErrors = {};

        if (!nameRegex.test(formData.name.trim())) {
            newErrors.name = "Ism noto‘g‘ri kiritildi";
        }

        if (!telegramRegex.test(formData.telegram.trim())) {
            newErrors.telegram = "Telegram username noto‘g‘ri";
        }

        if (!messageRegex.test(formData.message.trim())) {
            newErrors.message = "Xabar kamida 10 ta belgi bo‘lishi kerak";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };


    // 
    const [formData, setFormData] = useState({
        name: "",
        telegram: "",
        message: ""
    });

    const [errors, setErrors] = useState({});


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validate()) return;

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message);
            }

            toast.success("Xabaringiz muvaffaqiyatli yuborildi!");

            setFormData({
                name: "",
                telegram: "",
                message: ""
            });

        } catch (error) {
            console.error("Xatolik:", error);
            toast.error("Xabar yuborilmadi!");
        }
    };

    // 
    return (
        <section
            id="contact"
            className="min-h-screen flex items-center justify-center px-5 pt-22  "
        >
            <div className="max-w-[1100px] w-full">

                {/* Title */}
                <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-4xl font-bold text-white mb-2">
                        {t.contactTitle}
                    </h2>

                    <p className="text-gray-400 max-w-2xl mx-auto">
                        {t.contactDescription}
                    </p>
                </div>

                
                {/* Form */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    <form onSubmit={handleSubmit} className="bg-slate-900/70 border-3 border-sky-300/30 rounded-2xl p-6 md:p-8 space-y-6">

                        {/* Name */}
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-gray-300 text-sm mb-2"
                            >
                                {t.name}
                            </label>

                            <div className="relative">
                                <User
                                    size={18}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                                />

                                <input
                                    id="name"
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            name: e.target.value
                                        })
                                    }
                                    placeholder={t.namePlaceholder}
                                    className="w-full bg-slate-800/80 border border-sky-400/10 rounded-xl py-3 pl-12 pr-4 text-white outline-none focus:border-sky-400 transition"
                                />
                            </div>

                            {errors.name && (
                                <p className="text-red-400 text-sm mt-2">
                                    {errors.name}
                                </p>
                            )}
                        </div>

                        
                        {/* Telegram username */}
                        <div>
                            <label
                                htmlFor="telegram"
                                className="block text-gray-300 text-sm mb-2"
                            >
                                {t.telegramUsername}
                            </label>

                            <div className="relative">
                                <FaTelegramPlane
                                    size={18}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                                />

                                <input
                                    id="telegram"
                                    type="text"
                                    value={formData.telegram}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            telegram: e.target.value
                                        })
                                    }
                                    placeholder={t.telegramPlaceholder}
                                    className="w-full bg-slate-800/80 border border-sky-400/10 rounded-xl py-3 pl-12 pr-4 text-white outline-none focus:border-sky-400 transition"
                                />
                            </div>
                            {errors.telegram && (
                                <p className="text-red-400 text-sm mt-2">
                                    {errors.telegram}
                                </p>
                            )}
                        </div>

                        {/* xabar */}
                        <div>
                            <textarea
                                value={formData.message}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        message: e.target.value
                                    })
                                }
                                rows={3}
                                placeholder={t.messagePlaceholder}
                                className="w-full bg-slate-800/80 border border-sky-400/10 rounded-xl p-4 text-white outline-none focus:border-sky-400 transition resize-none"
                            />
                            {errors.message && (
                                <p className="text-red-400 text-sm mt-2">
                                    {errors.message}
                                </p>
                            )}
                        </div>

                        {/* malumotni yuborish */}
                        <button
                            type="submit"
                            className="w-full flex items-center gap-2 justify-center bg-sky-500 hover:bg-sky-400 text-white font-semibold py-3 rounded-xl transition cursor-pointer"
                        >
                            {t.sendMessage} <FaTelegramPlane size={20} />
                        </button>

                    </form>


                    {/*  */}
                    <div className="h-full flex flex-col gap-5 bg-slate-900/70 border-3 border-sky-300/30 rounded-2xl px-6 py-4 md:p-8">

                        <div className="flex items-center gap-4 p-4  rounded-xl bg-slate-800/80 border border-sky-400/10">

                            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-sky-500/10 text-sky-400">
                                <Mail size={25} />
                            </div>

                            <div>
                                <h4 className="text-white font-semibold">
                                    {t.email}
                                </h4>

                                <p className="text-gray-400 text-sm">
                                    otamurodovr81@gmail.com
                                </p>
                            </div>

                        </div>

                        {/* Telegram */}
                        <div className="flex items-center gap-4 p-4  rounded-xl bg-slate-800/80 border border-sky-400/10">

                            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-sky-500/10 text-sky-400">
                                <FaTelegram size={25} />
                            </div>

                            <div>
                                <h4 className="text-white font-semibold">
                                    {t.telegram}
                                </h4>

                                <p className="text-gray-400 text-sm">
                                    @ravshan0824
                                </p>
                            </div>

                        </div>

                        {/* Telefon raqam */}
                        <div className="flex items-center gap-4 p-4  rounded-xl bg-slate-800/80">
                            
                            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-sky-500/10 text-sky-400">
                                <Phone size={25} />
                            </div>

                            <div>
                                <h4 className="text-white font-semibold">
                                    {t.phone}
                                </h4>

                                <p className="text-gray-400 text-sm">
                                    998+ 91 571 51 19
                                </p>
                            </div>
                        </div>

                        {/* loqatsiya */}
                        <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/80">

                            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-sky-500/10 text-sky-400">
                                <FaLocationDot size={25} />
                            </div>

                            <div>
                                <h4 className="text-white font-semibold">
                                    {t.location}
                                </h4>

                                <p className="text-gray-400 text-sm">
                                    {t.locationValue}
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}

export default Contact;
