import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, Clock, User, Phone, Mail, Sparkles, MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '21626444561';

const services = [
  'Pose Vernis',
  'Mini Soin',
  'Brushing',
  'Pack Main & Pied',
  'Capsule Américaine VP',
  'Soin Visage',
  'Épilation Corps',
  'Soin Capillaire',
  'Kératine',
  'Coloration & Mèche',
];

const timeSlots = [
  '10:00', '10:30', '11:00', '11:30', '12:00', '12:30',
  '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
  '17:00', '17:30', '18:00', '18:30', '19:00', '19:30',
  '20:00', '20:30', '21:00',
];

export default function Booking() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    time: '',
    notes: '',
  });

  const buildWhatsAppMessage = () => {
    const lines = [
      '👋 Bonjour Eden Beauty !',
      '',
      '✨ Je souhaite réserver un rendez-vous :',
      '',
      `👤 *Nom* : ${formData.name || 'Non renseigné'}`,
      `📞 *Téléphone* : ${formData.phone || 'Non renseigné'}`,
    ];

    if (formData.email) {
      lines.push(`📧 *Email* : ${formData.email}`);
    }

    lines.push(
      `💅 *Service* : ${formData.service || 'Non renseigné'}`,
      `📅 *Date* : ${formData.date || 'Non renseignée'}`,
      `⏰ *Heure* : ${formData.time || 'Non renseignée'}`
    );

    if (formData.notes) {
      lines.push(`📝 *Notes* : ${formData.notes}`);
    }

    lines.push(
      '',
      'Merci de me confirmer ma réservation ! 🙏',
      '',
      '— Envoyé depuis edenbeauty.tn'
    );

    return encodeURIComponent(lines.join('\n'));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = buildWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNewBooking = () => {
    setSubmitted(false);
    setFormData({ name: '', phone: '', email: '', service: '', date: '', time: '', notes: '' });
  };

  return (
    <section id="booking" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-eden-dark via-[#120618] to-eden-dark" />

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-eden-rose text-sm tracking-[0.3em] uppercase font-medium mb-4">
            Réservez
          </span>
          <h2 className="font-script text-5xl sm:text-6xl md:text-7xl gradient-text mb-6">
            Réservation
          </h2>
          <p className="font-serif text-lg text-white/60 max-w-2xl mx-auto">
            Remplissez le formulaire ci-dessous et votre demande sera envoyée directement sur WhatsApp. Nous vous confirmerons votre rendez-vous dans les plus brefs délais.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-pink rounded-3xl p-6 sm:p-10"
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#25D366]/20 to-[#25D366]/10 flex items-center justify-center mx-auto mb-6">
                <MessageCircle size={40} className="text-[#25D366]" />
              </div>
              <h3 className="font-script text-4xl gradient-text mb-4">
                Message envoyé !
              </h3>
              <p className="text-white/60 font-serif text-lg max-w-md mx-auto mb-2">
                Votre demande de réservation a été envoyée sur WhatsApp.
              </p>
              <p className="text-white/40 text-sm max-w-md mx-auto">
                Nous vous répondrons très prochainement pour confirmer votre rendez-vous.
              </p>
              <button
                onClick={handleNewBooking}
                className="mt-8 px-8 py-3 rounded-full border border-white/20 text-white/80 hover:bg-white/5 transition-all"
              >
                Nouvelle réservation
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label className="block text-white/60 text-sm mb-2 flex items-center gap-2">
                    <User size={14} className="text-eden-rose" />
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 transition-all"
                    placeholder="Votre nom"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-white/60 text-sm mb-2 flex items-center gap-2">
                    <Phone size={14} className="text-eden-rose" />
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 transition-all"
                    placeholder="+216 XX XXX XXX"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-white/60 text-sm mb-2 flex items-center gap-2">
                  <Mail size={14} className="text-eden-rose" />
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 transition-all"
                  placeholder="votre@email.com"
                />
              </div>

              {/* Service */}
              <div>
                <label className="block text-white/60 text-sm mb-2 flex items-center gap-2">
                  <Sparkles size={14} className="text-eden-rose" />
                  Service souhaité *
                </label>
                <select
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white transition-all appearance-none cursor-pointer"
                >
                  <option value="" className="bg-eden-dark">Choisir un service</option>
                  {services.map((s) => (
                    <option key={s} value={s} className="bg-eden-dark">{s}</option>
                  ))}
                </select>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {/* Date */}
                <div>
                  <label className="block text-white/60 text-sm mb-2 flex items-center gap-2">
                    <Calendar size={14} className="text-eden-rose" />
                    Date préférée *
                  </label>
                  <input
                    type="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white transition-all"
                  />
                </div>

                {/* Time */}
                <div>
                  <label className="block text-white/60 text-sm mb-2 flex items-center gap-2">
                    <Clock size={14} className="text-eden-rose" />
                    Heure préférée *
                  </label>
                  <select
                    name="time"
                    required
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white transition-all appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-eden-dark">Choisir une heure</option>
                    {timeSlots.map((t) => (
                      <option key={t} value={t} className="bg-eden-dark">{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-white/60 text-sm mb-2">
                  Notes (optionnel)
                </label>
                <textarea
                  name="notes"
                  rows={3}
                  value={formData.notes}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 transition-all resize-none"
                  placeholder="Décrivez vos envies ou demandes spéciales..."
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-medium text-sm tracking-wide hover:shadow-lg hover:shadow-[#25D366]/30 transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle size={18} />
                Envoyer sur WhatsApp
              </button>

              <p className="text-center text-white/30 text-xs">
                En cliquant, vous serez redirigé vers WhatsApp avec votre message pré-rempli.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
