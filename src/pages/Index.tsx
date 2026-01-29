import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-500/30">
      <Hero />
      <Features />
      <Footer />
    </main>
  );
};

export default Index;
