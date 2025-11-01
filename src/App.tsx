import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

function App() {
  const [showArrow, setShowArrow] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowArrow(scrollPosition < 100);
      setScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToMessage = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="bg-black text-white">
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <img
          src="/luvluv.png"
          alt="Love"
          className="absolute inset-0 w-full h-full object-cover animate-fadeIn"
        />

        <button
          onClick={scrollToMessage}
          className={`absolute bottom-12 left-1/2 -translate-x-1/2 transition-opacity duration-500 ${
            showArrow ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          aria-label="Scroll down"
        >
          <ChevronDown
            className="w-12 h-12 text-white animate-bounce drop-shadow-lg"
            strokeWidth={1.5}
          />
        </button>
      </section>

      <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
        <div className="flower-decoration flower-1 animate-float">
          <img src="/1.png" alt="" className="w-24 h-24 md:w-32 md:h-32 opacity-30" />
        </div>
        <div className="flower-decoration flower-2 animate-floatDelay">
          <img src="/2.png" alt="" className="w-20 h-20 md:w-28 md:h-28 opacity-25" />
        </div>
        <div className="flower-decoration flower-3 animate-float">
          <img src="/3.png" alt="" className="w-28 h-28 md:w-36 md:h-36 opacity-20" />
        </div>
        <div className="flower-decoration flower-4 animate-floatDelay">
          <img src="/4.png" alt="" className="w-22 h-22 md:w-30 md:h-30 opacity-30" />
        </div>
        <div className="flower-decoration flower-5 animate-float">
          <img src="/5.png" alt="" className="w-24 h-24 md:w-32 md:h-32 opacity-25" />
        </div>
        <div className="flower-decoration flower-6 animate-floatDelay">
          <img src="/6.png" alt="" className="w-26 h-26 md:w-34 md:h-34 opacity-20" />
        </div>
        <div className="flower-decoration flower-7 animate-float">
          <img src="/7.png" alt="" className="w-20 h-20 md:w-28 md:h-28 opacity-30" />
        </div>
        <div className="flower-decoration flower-8 animate-floatDelay">
          <img src="/8.png" alt="" className="w-24 h-24 md:w-32 md:h-32 opacity-25" />
        </div>
        <div className="flower-decoration flower-9 animate-float">
          <img src="/9.png" alt="" className="w-22 h-22 md:w-30 md:h-30 opacity-20" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="message-container animate-fadeInUp">
            <p className="text-2xl md:text-4xl lg:text-5xl leading-relaxed font-serif text-white/90 drop-shadow-2xl">
              Your message goes here…
            </p>
            <p className="mt-8 text-lg md:text-xl lg:text-2xl leading-relaxed font-serif text-white/80 drop-shadow-xl">
              This is where your heartfelt words will shine, surrounded by beauty and elegance,
              expressing all the feelings that words can barely contain.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
