import { useScrollReveal } from './hooks/useScrollReveal';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import OurStory from './sections/OurStory';
import Gallery from './sections/Gallery';
import Rooms from './sections/Rooms';
import Video from './sections/Video';
// import Experiences from './sections/Experiences';
import Testimonials from './sections/Testimonials';
import Location from './sections/Location';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export default function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <OurStory />
        <Gallery />
        <Rooms />
        <Video />
        {/* <Experiences /> */}
        <Testimonials />
        <Location />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
