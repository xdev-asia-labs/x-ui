import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import ComponentShowcase from './components/ComponentShowcase';
import CodeExample from './components/CodeExample';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function HomePage() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Features />
                <ComponentShowcase />
                <CodeExample />
                <Testimonials />
            </main>
            <Footer />
        </>
    );
}
