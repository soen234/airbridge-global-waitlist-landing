import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // TODO: Connect to Supabase later
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-950 text-white">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-slate-800 bg-slate-900/50 backdrop-blur-sm text-sm font-medium text-slate-300">
            🚀 The Next Gen MMP is coming
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Master Your <br />
            Mobile Growth
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed">
            The all-in-one mobile measurement partner (MMP) that helps you track, measure, and optimize your app marketing campaigns with unified data.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md">
            <div className="relative flex-grow">
              <input
                type="email"
                placeholder="Enter your work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-6 py-4 rounded-xl bg-slate-900/80 border border-slate-800 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                required
              />
            </div>
            <button
              type="submit"
              className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] flex items-center justify-center gap-2 whitespace-nowrap"
            >
              {submitted ? (
                <>
                  <CheckCircle2 className="w-5 h-5" /> Joined
                </>
              ) : (
                <>
                  Join Waitlist <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>
          
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-slate-800 border-2 border-slate-950 flex items-center justify-center text-xs text-white">
                 {/* Placeholder avatars */}
                 <div className={`w-full h-full rounded-full bg-gradient-to-br from-slate-700 to-slate-800`} />
                </div>
              ))}
            </div>
            <p>Trusted by 2,000+ marketers</p>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateX: 10, rotateY: -10 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0, rotateY: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative perspective-1000"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl shadow-blue-900/20 group">
             <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <img 
              src="/images/hero-dashboard.png" 
              alt="Airbridge Dashboard Interface" 
              className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          
          {/* Floating Elements */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-12 -right-12 z-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px]"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
