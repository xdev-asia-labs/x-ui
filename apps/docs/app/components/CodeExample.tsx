export default function CodeExample() {
    const codeSnippet = `import { Button, Card, Input } from '@xdev-asia/x-ui-react';

function App() {
  return (
    <Card variant="glass">
      <Input placeholder="Enter your email" />
      <Button>Subscribe</Button>
    </Card>
  );
}`;

    // Simple syntax highlighting simulation
    const highlightedCode = (
        <>
            <span style={{ color: '#c678dd' }}>import</span> <span style={{ color: '#e5c07b' }}>{'{'}</span> <span style={{ color: '#e06c75' }}>Button</span>, <span style={{ color: '#e06c75' }}>Card</span>, <span style={{ color: '#e06c75' }}>Input</span> <span style={{ color: '#e5c07b' }}>{'}'}</span> <span style={{ color: '#c678dd' }}>from</span> <span style={{ color: '#98c379' }}>'@xdev-asia/x-ui-react'</span>;
            {'\n\n'}
            <span style={{ color: '#c678dd' }}>function</span> <span style={{ color: '#61afef' }}>App</span>() <span style={{ color: '#e5c07b' }}>{'{'}</span>
            {'\n  '}
            <span style={{ color: '#c678dd' }}>return</span> (
            {'\n    '}
            <span style={{ color: '#e06c75' }}>&lt;Card</span> <span style={{ color: '#d19a66' }}>variant</span>=<span style={{ color: '#98c379' }}>"glass"</span><span style={{ color: '#e06c75' }}>&gt;</span>
            {'\n      '}
            <span style={{ color: '#e06c75' }}>&lt;Input</span> <span style={{ color: '#d19a66' }}>placeholder</span>=<span style={{ color: '#98c379' }}>"Enter your email"</span> <span style={{ color: '#e06c75' }}>/&gt;</span>
            {'\n      '}
            <span style={{ color: '#e06c75' }}>&lt;Button&gt;</span>Subscribe<span style={{ color: '#e06c75' }}>&lt;/Button&gt;</span>
            {'\n    '}
            <span style={{ color: '#e06c75' }}>&lt;/Card&gt;</span>
            {'\n  '}
            );
            {'\n'}
            <span style={{ color: '#e5c07b' }}>{'}'}</span>
        </>
    );

    return (
        <section id="code" className="py-24 relative">
            <div className="container relative">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Text Content */}
                    <div className="flex-1 text-center lg:text-left animate-slide-in-left">
                        <span
                            className="liquid-pill inline-block mb-6"
                            style={{
                                background: 'rgba(99, 102, 241, 0.1)',
                                color: '#818cf8',
                                border: '1px solid rgba(99, 102, 241, 0.2)',
                            }}
                        >
                            🚀 Developer Experience
                        </span>
                        <h2
                            style={{
                                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                                fontWeight: 800,
                                marginBottom: '24px',
                                lineHeight: 1.1,
                                letterSpacing: '-0.02em',
                            }}
                        >
                            Build faster with <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                                intuitive APIs
                            </span>
                        </h2>
                        <p style={{
                            color: 'var(--x-mutedForeground)',
                            fontSize: '1.25rem',
                            marginBottom: '32px',
                            lineHeight: 1.6,
                            maxWidth: '500px',
                        }}>
                            Plug-and-play components designed for modern development. Fully typed, accessible, and themeable out of the box.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                            <div className="flex items-center gap-2 text-sm text-[var(--x-mutedForeground)]">
                                <span className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">✓</span>
                                TypeScript Ready
                            </div>
                            <div className="flex items-center gap-2 text-sm text-[var(--x-mutedForeground)]">
                                <span className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">✓</span>
                                Accessible (A11y)
                            </div>
                            <div className="flex items-center gap-2 text-sm text-[var(--x-mutedForeground)]">
                                <span className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">✓</span>
                                Dark Mode
                            </div>
                        </div>
                    </div>

                    {/* IDE Window */}
                    <div className="flex-1 w-full max-w-2xl perspective-1000">
                        <div
                            className="liquid-glass-elevated transform transition-transform duration-500 hover:scale-[1.02] hover:-rotate-1"
                            style={{
                                border: '1px solid rgba(255, 255, 255, 0.08)',
                                boxShadow: '0 24px 80px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05)',
                                overflow: 'hidden',
                                borderRadius: '12px',
                                background: '#1e1e1e', // VS Code dark bg
                            }}
                        >
                            {/* Window Header */}
                            <div className="flex items-center justify-between px-4 py-3 bg-[#252526] border-b border-[#3e3e42]">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                                    <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                                </div>
                                <div className="text-xs text-gray-400 font-mono">App.tsx</div>
                                <div className="w-10" />
                            </div>

                            {/* Code Area */}
                            <div className="p-6 overflow-x-auto">
                                <pre style={{
                                    fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                                    fontSize: '14px',
                                    lineHeight: 1.6,
                                    margin: 0,
                                }}>
                                    <code>{highlightedCode}</code>
                                </pre>
                            </div>

                            {/* Status Bar */}
                            <div className="flex items-center justify-between px-3 py-1 bg-[#007acc] text-white text-[10px] font-sans">
                                <div className="flex gap-3">
                                    <span>main*</span>
                                    <span>0 errors</span>
                                    <span>0 warnings</span>
                                </div>
                                <div className="flex gap-3">
                                    <span>Ln 11, Col 1</span>
                                    <span>UTF-8</span>
                                    <span>TypeScript React</span>
                                </div>
                            </div>
                        </div>

                        {/* Decoration blobs */}
                        <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl -z-10 animate-pulse" />
                        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -z-10 animate-pulse delay-1000" />
                    </div>
                </div>
            </div>
        </section>
    );
}
