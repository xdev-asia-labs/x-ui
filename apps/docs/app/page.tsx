import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import AiIntegration from './components/AiIntegration';
import ComponentShowcase from './components/ComponentShowcase';
import CodeExample from './components/CodeExample';
import Footer from './components/Footer';

export default function HomePage() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Features />
                <AiIntegration />
                <ComponentShowcase />
                <CodeExample />
            </main>
            <Footer />
        </>
    );
}
