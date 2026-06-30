import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Lazy load components below the fold for better initial load performance
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

// A simple loading placeholder that matches the background
const SectionFallback = () => <div className="min-h-[50vh] bg-background animate-pulse" />;

function App() {
    return (
        <div className="relative min-h-screen bg-background overflow-x-hidden">
            <Navbar />
            <main>
                <Hero />
                <Suspense fallback={<SectionFallback />}>
                    <About />
                </Suspense>
                <Suspense fallback={<SectionFallback />}>
                    <Skills />
                </Suspense>
                <Suspense fallback={<SectionFallback />}>
                    <Projects />
                </Suspense>
                <Suspense fallback={<SectionFallback />}>
                    <Contact />
                </Suspense>
            </main>
            <Suspense fallback={null}>
                <Footer />
            </Suspense>
        </div>
    );
}

export default App;
