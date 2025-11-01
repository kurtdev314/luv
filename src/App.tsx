import { useState, useEffect } from 'react';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-black text-white">
      <section className="h-full w-full flex items-center justify-center px-6">
        <img
          src="/luvluv.png"
          alt="Love"
          className="w-full max-w-md md:max-w-lg h-auto"
        />
      </section>

      <section className="min-h-screen flex items-center justify-center px-6 py-20">
        <div
          className={`text-center max-w-2xl transition-opacity duration-1000 ${
            scrolled ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <p className="text-4xl md:text-6xl font-serif text-white">
            Your message goes here…
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
