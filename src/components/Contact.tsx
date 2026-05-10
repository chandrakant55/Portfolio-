import { motion } from 'motion/react';
import { Mail, Phone, Instagram, Send, MapPin, MessageCircle, Upload, FileImage, XCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import { useState, useRef } from 'react';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [file, setFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    setFileError(null);

    if (!selectedFile) {
      setFile(null);
      return;
    }

    // Validation: Check if it's an image
    if (!selectedFile.type.startsWith('image/')) {
      setFileError('Please upload a valid image file (PNG, JPG, etc.)');
      setFile(null);
      if (fileInputRef.current) fileInputRef.current.value = '';
      return;
    }

    // Validation: Check file size (e.g., 5MB limit)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (selectedFile.size > maxSize) {
      setFileError('File is too large. Maximum size is 5MB.');
      setFile(null);
      if (fileInputRef.current) fileInputRef.current.value = '';
      return;
    }

    setFile(selectedFile);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (fileError) return;
    
    // In a real app, you'd send this to an API or Firebase
    console.log('Form Data:', formState, 'File:', file);
    
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', message: '' });
      setFile(null);
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-5xl md:text-7xl font-black mb-8">Ready to <br /><span className="text-gradient">Collaborate?</span></h2>
            <p className="text-slate-400 text-lg mb-12 max-w-md">
              Have a project in mind or just want to say hi? I'm always open to discussing new ideas, 
              creative collaborations, or opportunities to be part of your vision.
            </p>

            <div className="space-y-8">
              {[
                { icon: Mail, label: 'Email Me', val: CONTACT_INFO.email, href: `mailto:${CONTACT_INFO.email}` },
                { icon: MessageCircle, label: 'WhatsApp', val: `+91 ${CONTACT_INFO.phone}`, href: CONTACT_INFO.whatsapp },
                { icon: MapPin, label: 'Location', val: 'New Delhi, India', href: '#' },
              ].map((item, i) => (
                <a 
                  key={i}
                  href={item.href}
                  className="flex items-center gap-6 group"
                >
                  <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-all">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">{item.label}</p>
                    <p className="text-xl font-bold text-white group-hover:text-brand transition-colors">{item.val}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-16 pt-8 border-t border-white/10">
              <p className="text-xs text-slate-500 uppercase tracking-widest mb-6">Follow along</p>
              <div className="flex gap-4">
                <a 
                  href={CONTACT_INFO.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-brand transition-all"
                >
                  <Instagram size={20} />
                </a>
                {/* Additional socials can be added here */}
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bento-card p-8 lg:p-12 relative"
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6">
                  <Send size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Message Sent!</h3>
                <p className="text-slate-400">Thank you for reaching out. I'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand transition-colors"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Email</label>
                    <input 
                      required
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand transition-colors"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Message</label>
                  <textarea 
                    required
                    rows={4}
                    placeholder="Tell me about your project..."
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand transition-colors resize-none mb-2"
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Reference Image (Optional)</label>
                  <div 
                    onClick={() => fileInputRef.current?.click()}
                    className={`relative w-full aspect-[4/1] md:aspect-[5/1] rounded-2xl border-2 border-dashed transition-all cursor-pointer flex flex-col items-center justify-center p-4 ${
                      fileError ? 'border-red-500/50 bg-red-500/5' : 
                      file ? 'border-brand/50 bg-brand/5' : 
                      'border-white/10 hover:border-white/20 bg-white/5'
                    }`}
                  >
                    <input 
                      type="file"
                      ref={fileInputRef}
                      className="hidden"
                      accept="image/*"
                      onChange={handleFileChange}
                    />
                    
                    {file ? (
                      <div className="flex items-center gap-3 text-brand">
                        <FileImage size={24} />
                        <span className="text-sm font-bold truncate max-w-[200px]">{file.name}</span>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center gap-2">
                        <Upload size={20} className={fileError ? 'text-red-500' : 'text-slate-500'} />
                        <span className={`text-[10px] font-bold uppercase tracking-tighter ${fileError ? 'text-red-500' : 'text-slate-500'}`}>
                          {fileError || 'Click to upload project references'}
                        </span>
                      </div>
                    )}

                    {fileError && (
                      <div className="absolute -bottom-6 left-0 flex items-center gap-1 text-red-500">
                        <XCircle size={12} />
                        <span className="text-[10px] font-bold uppercase tracking-tighter">{fileError}</span>
                      </div>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full py-5 flex items-center justify-center gap-3 shadow-xl shadow-brand/10"
                >
                  Send Message
                  <Send size={18} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
