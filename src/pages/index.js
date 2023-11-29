import { motion } from 'framer-motion';
import Background from '@/components/Background';
import Logo from '@/components/Logo';
import NavBar from '@/components/NavBar';
import TarotSection from '@/components/TarotSection';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <>
      <Background />
      <NavBar />

      <div className="container mx-auto">
        <header className="text-center p-8">
          <Logo />
        </header>

        <main className="text-white">
          <section className="my-20">
            <motion.div
              initial={{ y: -250, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 120 }}
              className="text-center"
            >
              <h1 className="text-5xl font-bold">Unlock the Mysteries of Your Destiny</h1>
              <p className="text-xl mt-4">
                Welcome to Maiden and Mermaid, your gateway to discovering the hidden truths of your future through the art of Tarot readings.
              </p>
              <motion.button
                className="mt-8 px-8 py-3 text-white bg-purple-700 rounded-lg shadow-lg transition hover:bg-purple-600"
                whileHover={{ scale: 1.05 }}
              >
                Book a Reading
              </motion.button>
            </motion.div>
          </section>

          <TarotSection />

          <Testimonials />
        </main>

        <footer className="mt-20 py-8 text-center text-white">
          <p className="text-2xl font-semibold mb-4">Follow the Whispers of the Ocean</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-xl hover:text-blue-400">
              <i className="fab fa-facebook-square"></i>
            </a>
            <a href="#" className="text-xl hover:text-blue-400">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-xl hover:text-blue-400">
              <i className="fab fa-twitter-square"></i>
            </a>
          </div>
          <p className="mt-8 text-lg">© 2023 Maiden and Mermaid. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
