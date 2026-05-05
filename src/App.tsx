/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  CheckCircle2, 
  ArrowRight, 
  Youtube, 
  Palette, 
  Facebook, 
  Music2, 
  Video, 
  BrainCircuit, 
  MessageSquare, 
  Star, 
  ChevronDown, 
  ChevronUp,
  Instagram,
  Linkedin,
  Twitter,
  ExternalLink,
  Smartphone,
  PieChart,
  Users
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Constants & Types ---

const BRAND_COLORS = {
  primary: '#991b1b', // Deep Red
  secondary: '#B8860B', // Gold
  accent: '#fefce8', // Light Gold/Cream
};

const SERVICES = [
  { id: 1, title: 'YouTube Automation', icon: <Youtube className="w-6 h-6" />, desc: 'Learn to build and grow profitable channels without showing your face.' },
  { id: 2, title: 'Graphics Design with AI', icon: <Palette className="w-6 h-6" />, desc: 'Master high-end design using cutting-edge AI tools.' },
  { id: 3, title: 'Meta Ads (FB & IG)', icon: <Facebook className="w-6 h-6" />, desc: 'Run high-converting ads for products and services.' },
  { id: 4, title: 'TikTok Automation', icon: <Music2 className="w-6 h-6" />, desc: 'Go viral and monetize your TikTok presence effectively.' },
  { id: 5, title: 'Video Creation with AI', icon: <Video className="w-6 h-6" />, desc: 'Create professional videos in minutes using AI technology.' },
  { id: 6, title: 'Artificial Intelligence', icon: <BrainCircuit className="w-6 h-6" />, desc: 'Understand the core of AI and how to leverage it for income.' },
  { id: 7, title: 'Social Media Monetization', icon: <MessageSquare className="w-6 h-6" />, desc: 'Turn your followers into customers across all platforms.' },
  { id: 8, title: 'Social Media Management', icon: <Users className="w-6 h-6" />, desc: 'Manage brands and get paid as a professional manager.' },
  { id: 9, title: 'Video Editing', icon: <Video className="w-6 h-6" />, desc: 'Master Premiere Pro & mobile editing for high-paying clients.' },
  { id: 10, title: 'Branding', icon: <PieChart className="w-6 h-6" />, desc: 'Build a personal or business brand that stands out.' },
  { id: 11, title: 'Online Surveys', icon: <Smartphone className="w-6 h-6" />, desc: 'Simple ways to start earning while you learn.' },
  { id: 12, title: 'Market Strategy', icon: <ArrowRight className="w-6 h-6" />, desc: 'Learn the psychology of selling digital products.' },
];

const REVIEWS = [
  { id: 1, name: 'Abubakar M.', role: 'Student', content: 'The AI graphics course changed everything for me. I now earn ₦50k+ weekly freelancing.', rating: 5 },
  { id: 2, name: 'Chidi O.', role: 'Business Owner', content: 'Meta Ads training helped me scale my store to 7 figures. Samuel is a genius!', rating: 5 },
  { id: 3, name: 'Fatima Z.', role: 'YouTuber', content: 'YouTube automation was the missing piece. My channel grew by 10k subs in 2 months.', rating: 5 },
];

const FAQS = [
  { question: "Is this for beginners?", answer: "Yes! Our courses are designed to take you from zero to hero, regardless of your current skill level." },
  { question: "How long is the training?", answer: "Most intensive bootcamps last 2 weeks, but you get lifetime access to the recorded materials and our community." },
  { question: "Can I do this with my phone?", answer: "Absolutely! 80% of our students use their smartphones to implement what we teach." },
  { question: "Is there a certificate?", answer: "Yes, we issue verified certificates of completion from Eternity in View Academy." },
];

// --- Components ---

const SectionTitle = ({ title, subtitle, light = false }: { title: string; subtitle?: string; light?: boolean }) => (
  <div className="text-center mb-12 sm:mb-16">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-slate-900'}`}
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`max-w-2xl mx-auto text-lg ${light ? 'text-slate-300' : 'text-slate-600'}`}
      >
        {subtitle}
      </motion.p>
    )}
    <div className={`h-1.5 w-20 mx-auto mt-6 rounded-full ${light ? 'bg-white' : 'bg-red-800'}`} />
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-red-800 p-1.5 rounded-lg shadow-lg">
            <span className="text-white font-bold text-xl italic">EA</span>
          </div>
          <span className={`font-bold text-xl hidden sm:block ${scrolled ? 'text-slate-900' : 'text-white'}`}>ETERNITY IN VIEW</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {['Services', 'About', 'Gallery', 'Reviews', 'FAQ'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className={`hover:opacity-70 transition-opacity ${scrolled ? 'text-slate-700' : 'text-white'}`}
            >
              {item}
            </a>
          ))}
          <a 
            href="#contact" 
            className="bg-red-800 text-white px-5 py-2.5 rounded-full hover:bg-red-900 transition-colors shadow-lg"
          >
            Enroll Now
          </a>
        </div>

        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className={scrolled ? 'text-slate-900' : 'text-white'} /> : <Menu className={scrolled ? 'text-slate-900' : 'text-white'} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl p-4 flex flex-col gap-4 text-center md:hidden"
          >
            {['Services', 'About', 'Gallery', 'Reviews', 'FAQ'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-slate-700 font-medium p-2 text-lg hover:bg-slate-50 transition-colors rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <a 
              href="#contact" 
              className="bg-red-800 text-white p-3 rounded-xl font-bold"
              onClick={() => setIsOpen(false)}
            >
              Start Earning Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const ContactForm = ({ className }: { className?: string }) => {
  return (
    <div className={`bg-white p-6 sm:p-8 rounded-2xl shadow-2xl border border-slate-100 ${className}`}>
      <h3 className="text-2xl font-bold text-slate-900 mb-2">Get Started Today</h3>
      <p className="text-slate-500 mb-6 text-sm">Join the next cohort and start your journey to financial freedom.</p>
      
      <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); window.open('https://wa.me/2347045500005', '_blank'); }}>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1 ml-1 text-left">Full Name</label>
          <input type="text" placeholder="Gideon Samuel" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-red-800 outline-none transition-all" required />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1 ml-1 text-left">WhatsApp Number</label>
          <input type="tel" placeholder="+234..." className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-red-800 outline-none transition-all" required />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1 ml-1 text-left">Select Course</label>
          <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-red-800 outline-none transition-all">
            <option>All Digital Skills Training (₦9,900)</option>
            <option>YouTube Automation</option>
            <option>AI Graphics Design</option>
            <option>Social Media Monetization</option>
          </select>
        </div>
        <button type="submit" className="w-full bg-red-800 text-white font-bold py-4 rounded-xl shadow-lg shadow-red-800/20 hover:bg-red-900 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 mt-2">
          JOIN WAITLIST <ArrowRight className="w-5 h-5" />
        </button>
        <p className="text-[10px] text-center text-slate-400 mt-4 uppercase font-bold tracking-widest">Limited Slots Available • Secure Your Future</p>
      </form>
    </div>
  );
};

const FAQItem = ({ question, answer }: { question: string; answer: string; key?: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-100 last:border-0 overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left hover:text-red-800 transition-colors"
        id={`faq-${question.replace(/\s+/g, '-').toLowerCase()}`}
      >
        <span className="font-bold text-lg text-slate-800">{question}</span>
        {isOpen ? <ChevronUp className="w-5 h-5 text-red-800" /> : <ChevronDown className="w-5 h-5" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="pb-6"
          >
            <p className="text-slate-600 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  return (
    <div className="bg-white min-h-screen font-sans selection:bg-red-100 selection:text-red-900 scroll-smooth">
      <Navbar />

      {/* Hero Section */}
      <section 
        id="home" 
        className="relative min-h-[90vh] md:min-h-screen flex items-center pt-24 pb-20 overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-slate-950/70 z-10" />
          <img 
            src="https://res.cloudinary.com/diblckeu1/image/upload/v1777945823/imag_ysdov7.jpg" 
            alt="Samuel Gideon - CEO" 
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Floating elements for visual interest */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-800/20 blur-[100px] rounded-full animate-pulse z-0" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/10 blur-[100px] rounded-full animate-pulse delay-1000 z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 text-center lg:text-left">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-red-800/10 border border-red-800/20 text-red-100 px-4 py-2 rounded-full mb-6"
              >
                <div className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                <span className="text-sm font-bold tracking-wide uppercase italic">Eternity In View Academy</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-8"
              >
                Master Digital Skills. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-amber-400">Earn in Dollars.</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed"
              >
                We bridge the gap between employment and empowerment. Learn high-income skills directly from industry expert <span className="text-white font-bold underline decoration-red-800 underline-offset-4">Samuel Gideon</span>.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <a href="#services" className="bg-red-800 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl shadow-red-800/20 hover:bg-red-900 transition-all flex items-center justify-center gap-2 uppercase tracking-tight">
                  View Our Courses <ChevronDown className="w-5 h-5" />
                </a>
                <div className="flex -space-x-4 items-center justify-center">
                  {[1,2,3,4].map(i => (
                    <img key={i} className="w-10 h-10 rounded-full border-2 border-white" src={`https://i.pravatar.cc/150?img=${i+10}`} alt="Student" />
                  ))}
                  <div className="pl-6 text-white text-sm">
                    <div className="flex text-amber-400 mb-0.5">
                      {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
                    </div>
                    <span className="font-bold">6.6K+</span> Followers
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-full max-w-md"
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section - Bento Grid Style */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Digital Skills Training" 
            subtitle="Master high-income skills designed for the global market."
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
            {/* Featured Box */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="md:col-span-2 md:row-span-2 bg-red-800 text-white p-8 rounded-[40px] shadow-xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-3xl rounded-full -mr-10 -mt-10" />
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                    <Youtube className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 italic leading-tight">YouTube Automation <br />& Monetization</h3>
                  <p className="text-red-100 text-lg max-w-sm">Learn to build and grow profitable channels without showing your face. Our most popular curriculum.</p>
                </div>
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => <img key={i} className="w-8 h-8 rounded-full border-2 border-red-800" src={`https://i.pravatar.cc/100?img=${i+5}`} alt="success" />)}
                  <div className="bg-red-900 border-2 border-red-800 rounded-full px-3 flex items-center text-[10px] font-bold">1.2K+ GRADS</div>
                </div>
              </div>
            </motion.div>

            {/* Smaller Bento Boxes */}
            {[
              { title: 'Meta Ads Pro', icon: <Facebook />, color: 'bg-white', span: 'md:col-span-1 md:row-span-1' },
              { title: 'AI Design', icon: <Palette />, color: 'bg-white', span: 'md:col-span-1 md:row-span-1' },
              { title: 'Video Mastery', icon: <Video />, color: 'bg-slate-900 text-white', span: 'md:col-span-2 md:row-span-1' },
              { title: 'Social Management', icon: <Users />, color: 'bg-white', span: 'md:col-span-1 md:row-span-1' },
              { title: 'Brand Strategy', icon: <PieChart />, color: 'bg-white', span: 'md:col-span-1 md:row-span-1' },
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`${item.span} ${item.color} p-6 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-lg transition-all group flex flex-col justify-between`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${item.color.includes('bg-white') ? 'bg-red-50 text-red-800' : 'bg-white/10 text-white'}`}>
                  {React.cloneElement(item.icon as React.ReactElement, { className: 'w-5 h-5' })}
                </div>
                <h4 className="font-bold text-lg leading-tight uppercase italic">{item.title}</h4>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="inline-flex items-center gap-3 bg-white px-8 py-4 rounded-full border border-slate-200 shadow-sm text-sm font-bold text-slate-800 uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" /> Final Cohort Starts May 18th
            </p>
          </div>
        </div>
      </section>

      {/* Why Us / Founder Story */}
      <section id="about" className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:flex-1 relative"
            >
              <div className="aspect-[4/5] rounded-[40px] shadow-2xl relative group cursor-pointer overflow-hidden border-4 border-white transition-all duration-500">
                <img 
                  src="https://res.cloudinary.com/diblckeu1/image/upload/v1777946474/sm_b4ueqa.jpg" 
                  alt="Samuel Gideon"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-950/90 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-8 left-8 right-8 text-white transform transition-transform duration-500 group-hover:translate-y-[-5px]">
                  <div className="bg-red-800/80 backdrop-blur-sm px-4 py-2 rounded-xl inline-block mb-3">
                    <h4 className="text-xl font-bold italic tracking-tight">Samuel Gideon</h4>
                  </div>
                  <p className="text-sm font-bold uppercase tracking-[0.2em] opacity-80 pl-1">Founder & CEO</p>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 lg:-right-12 w-48 h-48 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 hidden sm:block z-20 group">
                <div className="flex flex-col h-full justify-between">
                  <div className="flex gap-1 text-amber-500">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <div className="text-3xl font-black text-slate-900 uppercase">100%</div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Success Rate</div>
                </div>
              </div>
            </motion.div>

            <div className="lg:flex-1">
              <h4 className="text-red-800 font-bold uppercase tracking-widest text-sm mb-4">A Journey of Transformation</h4>
              <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 mb-8 leading-tight">From Employment to Empowerment.</h2>
              
              <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                <p>
                  "There was a time when I worked under someone else’s clock as a Branch Manager. It was a good experience, but I was boxed in. No freedom, no security, and a salary that barely paid the bills."
                </p>
                <p>
                  Today, as CEO of Eternity in View Academy, I help thousands of people unlock their potential. I don’t just work for income; I work for <span className="text-red-800 font-bold underline decoration-red-800/30 underline-offset-4">impact</span>.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-black text-red-800 mb-1">Flexible</div>
                  <div className="text-sm font-bold text-slate-400 uppercase">Schedule</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-red-800 mb-1">Global</div>
                  <div className="text-sm font-bold text-slate-400 uppercase">Opportunity</div>
                </div>
              </div>

              <button onClick={() => document.getElementById('contact')?.scrollIntoView()} className="mt-12 group flex items-center gap-3 text-slate-900 font-bold text-lg hover:text-red-800 transition-colors">
                Start Your Own Journey <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Bento Grid */}
      <section className="py-24 bg-slate-950 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="The Academy Advantage" 
            subtitle="Why our students achieve results faster than anywhere else."
            light
          />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[150px]">
            {/* Large Mentorship Card */}
            <div className="md:col-span-8 md:row-span-3 bg-slate-900 p-8 sm:p-12 rounded-[40px] border border-slate-800 hover:border-red-800/50 transition-all flex flex-col justify-center relative group">
              <div className="absolute top-10 right-10 opacity-10 group-hover:opacity-20 transition-opacity">
                <BrainCircuit className="w-32 h-32" />
              </div>
              <div className="text-amber-500 mb-6">
                <CheckCircle2 className="w-12 h-12" />
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold mb-6 italic leading-tight max-w-lg text-white">Mentorship That <br />Actually Works</h3>
              <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-xl">
                You're not just buying a course; you're joining a family. Samuel Gideon provides direct feedback on your work, ensuring you avoid the mistakes that most beginners make.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Live Sessions', 'Direct Support', 'Resource Library'].map(tag => (
                  <span key={tag} className="px-5 py-2 bg-slate-800 rounded-full text-xs font-bold border border-slate-700 transition-all group-hover:bg-red-800 group-hover:border-red-700 uppercase tracking-widest">{tag}</span>
                ))}
              </div>
            </div>

            {/* Pricing Card */}
            <div className="md:col-span-4 md:row-span-2 bg-red-800 p-8 rounded-[40px] flex flex-col justify-between overflow-hidden relative group">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 blur-3xl rounded-full" />
              <div className="relative z-10">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-80 mb-2 block">Special Offer</span>
                <h3 className="text-2xl font-bold leading-tight mb-4 italic">Low Entry, <br />High Reward.</h3>
                <p className="text-red-100 text-sm leading-relaxed">We keep our fees affordable (₦9,900) because our mission is impact, not just profit.</p>
              </div>
              <div className="relative z-10 mt-8">
                <div className="text-5xl font-black mb-2 italic">₦9,900</div>
                <div className="text-xs font-bold uppercase tracking-widest opacity-60">One-time Access</div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="md:col-span-4 md:row-span-1 bg-slate-900 p-8 rounded-[40px] border border-slate-800 flex items-center justify-between">
              <div>
                <div className="text-4xl font-bold text-red-500 mb-0 leading-none">6.6K+</div>
                <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Followers</p>
              </div>
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-slate-500">
                <Users className="w-6 h-6" />
              </div>
            </div>

            {/* Community Card */}
            <div className="md:col-span-4 md:row-span-2 bg-amber-400 p-8 rounded-[40px] flex flex-col justify-between group">
              <h3 className="text-slate-950 text-2xl font-black italic uppercase leading-none">Global <br />Network</h3>
              <div className="space-y-4">
                <p className="text-slate-800 text-sm font-medium">Join our community of digital entrepreneurs across Africa and the world.</p>
                <div className="flex -space-x-3">
                  {[1,2,3,4,5].map(i => <img key={i} className="w-8 h-8 rounded-full border-2 border-amber-400" src={`https://i.pravatar.cc/100?img=${i+20}`} alt="user" />)}
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="md:col-span-8 md:row-span-1 bg-white p-4 rounded-[40px] flex flex-col md:flex-row items-center gap-6 group">
              <div className="flex-1 pl-6">
                <h3 className="text-xl font-bold text-slate-900 italic">Watch Students Win Daily</h3>
              </div>
              <a href="https://wa.me/2347045500005" target="_blank" rel="noreferrer" className="bg-slate-950 text-white px-10 py-5 rounded-3xl font-bold whitespace-nowrap hover:bg-slate-800 transition-all flex items-center gap-2 uppercase text-sm tracking-tighter">
                Join Telegram Waitlist <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Training in Action" 
            subtitle="Glimpses of our life-changing sessions and campus activities."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1,2,3,4,5,6,7,8].map(i => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`overflow-hidden rounded-2xl md:rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 ${i % 3 === 0 ? 'row-span-2 h-auto' : 'h-48 md:h-64'}`}
              >
                <img 
                  src={`https://images.unsplash.com/photo-${[
                    '1517245318728-82534ad09b70',
                    '1486312338219-ce68d2c6f44d',
                    '1522202176988-66273c2fd55f',
                    '1531482615713-2afd69097998',
                    '1504384308090-c894fdcc538d',
                    '1515187029135-18ee286d815b',
                    '1542744173-8e7e53415bb0',
                    '1520333789090-1afc82db536a'
                  ][i-1]}?auto=format&fit=crop&q=80&w=800`} 
                  alt="Academy Activity" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 bg-red-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Student Testimonials" 
            subtitle="Don't just take our word for it—listen to our growing community."
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map((review) => (
              <motion.div 
                key={review.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md p-8 rounded-[40px] border border-white/10 shadow-2xl relative"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-white text-red-800 rounded-2xl flex items-center justify-center font-bold text-3xl shadow-lg italic">
                  “
                </div>
                <div className="flex gap-1 text-amber-400 mb-6">
                  {Array(review.rating).fill(0).map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-white text-lg leading-relaxed mb-8 italic">
                  {review.content}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-200 border-2 border-white/20" />
                  <div>
                    <h4 className="font-bold text-white uppercase italic tracking-tight">{review.name}</h4>
                    <p className="text-red-200 text-xs font-bold uppercase tracking-widest">{review.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Common Questions" 
            subtitle="Everything you need to know before joining the academy."
          />
          <div className="bg-slate-50 border border-slate-100 rounded-[40px] p-6 sm:p-10 divide-y divide-slate-200 shadow-sm">
            {FAQS.map(faq => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Last CTA / Contact Section */}
      <section id="contact" className="py-24 border-t border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none grayscale">
          <Smartphone className="w-96 h-96" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-[60px] p-8 sm:p-20 flex flex-col lg:flex-row items-center justify-between gap-12 overflow-hidden relative border border-slate-800 shadow-2xl">
            <div className="relative z-10 text-center lg:text-left flex-1">
              <h2 className="text-4xl sm:text-6xl font-black text-white italic mb-6 leading-tight">Ready to build your <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-amber-400">legacy?</span></h2>
              <p className="text-slate-400 text-xl max-w-lg mb-10 leading-relaxed mx-auto lg:mx-0">
                Stop watching others grow. It's your time to master the digital world and earn what you truly deserve.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a href="https://wa.me/2347045500005" target="_blank" className="w-full sm:w-auto bg-green-600 text-white px-8 py-5 rounded-2xl font-bold text-lg hover:bg-green-700 transition-all flex items-center justify-center gap-2">
                  <MessageSquare className="w-6 h-6" /> WhatsApp Support
                </a>
                <div className="text-slate-500 font-bold uppercase tracking-widest text-xs hidden sm:block">OR</div>
                <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="w-full sm:w-auto bg-white text-slate-950 px-8 py-5 rounded-2xl font-bold text-lg hover:bg-slate-100 transition-all">
                  Join The Waitlist
                </button>
              </div>
            </div>
            
            <div className="flex-1 w-full max-w-md relative">
              <div className="absolute -inset-4 bg-red-800/20 blur-3xl rounded-full" />
              <ContactForm className="relative z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <div className="flex items-center gap-3">
              <div className="bg-red-800 p-2 rounded-xl shadow-lg">
                <span className="text-white font-black text-xl italic">EA</span>
              </div>
              <div>
                <div className="font-black text-xl text-slate-900 italic tracking-tighter">ETERNITY IN VIEW</div>
                <div className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Academy of Digital Arts</div>
              </div>
            </div>

            <div className="flex gap-4">
              {[
                { icon: <Instagram className="w-5 h-5 leading-none" />, link: "#" },
                { icon: <Facebook className="w-5 h-5" />, link: "https://facebook.com/GideonSamuelStephen" },
                { icon: <Twitter className="w-5 h-5" />, link: "#" },
                { icon: <Linkedin className="w-5 h-5" />, link: "#" },
              ].map((social, i) => (
                <a key={i} href={social.link} className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-red-800 hover:border-red-800 transition-all shadow-sm">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="h-px bg-slate-200 w-full mb-8" />

          <div className="flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm gap-4 font-medium">
            <p>© {new Date().getFullYear()} Eternity in View Academy. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-red-800 transition-colors uppercase tracking-widest text-xs font-bold">Privacy Policy</a>
              <a href="#" className="hover:text-red-800 transition-colors uppercase tracking-widest text-xs font-bold">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
