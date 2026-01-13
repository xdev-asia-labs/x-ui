'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@xdev-asia/x-ui-react';

export default function AiIntegration() {
    const [typingText, setTypingText] = useState('');
    const fullText = "Generate a glassmorphism card with a gradient button and user avatar";

    useEffect(() => {
        setTypingText('');
        let i = 0;
        const interval = setInterval(() => {
            setTypingText(fullText.slice(0, i));
            i++;
            if (i > fullText.length) {
                clearInterval(interval);
            }
        }, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="ai-integration" className="py-32 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 -z-10" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-fuchsia-600/10 rounded-full blur-[100px] translate-y-1/3 translate-x-1/3 -z-10" />

            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Content Side */}
                    <div className="flex-1 text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                            </span>
                            MCP Server Integrated
                        </div>

                        <h2 className="text-3xl md:text-4xl lg:text-6xl font-extrabold mb-8 leading-[1.1] tracking-tight text-white">
                            Your Personal <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-indigo-400">
                                AI Design Assistant
                            </span>
                        </h2>

                        <p className="text-lg text-[var(--x-mutedForeground)] mb-10 leading-relaxed max-w-xl">
                            Stop switching contexts. X-UI comes with a powerful Model Context Protocol (MCP) server that connects your codebase directly to LLMs like Claude and Gemini.
                        </p>

                        <div className="space-y-10">
                            <div className="flex gap-5">
                                <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 shrink-0 shadow-lg shadow-indigo-500/5">
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M2 17L12 22L22 17" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M2 12L12 17L22 12" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Context-Aware Generation</h3>
                                    <p className="text-[var(--x-mutedForeground)] leading-relaxed">
                                        The AI understands your design system, tokens, and existing components to generate perfectly matching code.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-5">
                                <div className="w-14 h-14 rounded-2xl bg-fuchsia-500/10 flex items-center justify-center border border-fuchsia-500/20 shrink-0 shadow-lg shadow-fuchsia-500/5">
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#e879f9" strokeWidth="2" />
                                        <path d="M9 12L11 14L15 10" stroke="#e879f9" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Zero-Shot Accuracy</h3>
                                    <p className="text-[var(--x-mutedForeground)] leading-relaxed">
                                        Get production-ready components in a single prompt, fully typed and accessible, without manual adjustments.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-5">
                                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 shrink-0 shadow-lg shadow-cyan-500/5">
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M2 12H22" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Design System Sync</h3>
                                    <p className="text-[var(--x-mutedForeground)] leading-relaxed">
                                        Automatically adheres to your project's color tokens, typography, and spacing variables.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            <a href="/docs/getting-started/mcp">
                                <Button size="lg" className="bg-gradient-to-r from-indigo-500 to-fuchsia-600 hover:opacity-90 transition-opacity border-0 shadow-2xl shadow-indigo-500/40 px-8 py-6 text-lg">
                                    Start Building with AI
                                </Button>
                            </a>
                        </div>
                    </div>

                    {/* Visual Side */}
                    <div className="flex-1 w-full perspective-2000">
                        <div className="relative group">
                            {/* Glass Container */}
                            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#0a0a0a]/60 backdrop-blur-2xl shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] transition-all duration-700 group-hover:transform group-hover:rotate-y-2 group-hover:scale-[1.02] group-hover:border-white/20">
                                {/* Window Controls */}
                                <div className="px-6 py-4 bg-white/5 border-b border-white/5 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                                        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                                        <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                                    </div>
                                    <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">AI Assistant Terminal</div>
                                    <div className="w-10" /> {/* Spacer */}
                                </div>

                                {/* Terminal Content */}
                                <div className="p-4 md:p-8 font-mono text-sm leading-relaxed min-h-[350px] md:min-h-[500px]">
                                    {/* User Prompt */}
                                    <div className="flex gap-4 mb-8">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-500 flex items-center justify-center text-xs font-bold text-white shrink-0 shadow-lg shadow-indigo-500/20">
                                            U
                                        </div>
                                        <div className="flex-1 pt-1">
                                            <div className="text-indigo-400 text-[10px] uppercase font-bold mb-2 tracking-wider">User</div>
                                            <div className="text-gray-100 text-lg leading-snug">
                                                {typingText}<span className="inline-block w-2 h-5 bg-indigo-500 ml-1 animate-pulse" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* AI Response */}
                                    <div className={`flex gap-4 animate-fade-in ${typingText.length === fullText.length ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transition-all duration-700 delay-500`}>
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-fuchsia-500 to-purple-500 flex items-center justify-center text-xs font-bold text-white shrink-0 shadow-lg shadow-fuchsia-500/20">
                                            AI
                                        </div>
                                        <div className="flex-1 pt-1">
                                            <div className="text-fuchsia-400 text-[10px] uppercase font-bold mb-2 tracking-wider">X-UI Assistant</div>
                                            <div className="text-gray-300 mb-6 leading-relaxed">
                                                Based on your design system, here's the <code className="bg-fuchsia-500/10 px-2 py-0.5 rounded border border-fuchsia-500/20 text-fuchsia-300">GlassCard</code> component you requested:
                                            </div>

                                            {/* Code Block */}
                                            <div className="rounded-xl bg-black/40 border border-white/10 p-3 md:p-6 overflow-hidden relative shadow-inner">
                                                <div className="absolute top-3 right-4 text-[10px] font-bold text-gray-600 uppercase tracking-tighter">tsx</div>
                                                <pre className="text-xs text-gray-400 overflow-x-auto whitespace-pre leading-loose">
                                                    <code dangerouslySetInnerHTML={{
                                                        __html: `<span style="color:#c084fc">import</span> { Card, Button, Avatar } <span style="color:#c084fc">from</span> <span style="color:#4ade80">'@xdev-asia/x-ui-react'</span>;

<span style="color:#c084fc">export default function</span> <span style="color:#60a5fa">UserDetails</span>() {
  <span style="color:#c084fc">return</span> (
    <span style="color:#fde047">&lt;Card</span> <span style="color:#fb923c">variant</span>=<span style="color:#86efac">"glass"</span> <span style="color:#fb923c">padding</span>=<span style="color:#86efac">"lg"</span><span style="color:#fde047">&gt;</span>
      <span style="color:#fde047">&lt;div</span> <span style="color:#fb923c">className</span>=<span style="color:#86efac">"flex items-center gap-4"</span><span style="color:#fde047">&gt;</span>
        <span style="color:#fde047">&lt;Avatar</span> <span style="color:#fb923c">src</span>=<span style="color:#86efac">"/user.png"</span> <span style="color:#fb923c">size</span>=<span style="color:#86efac">"lg"</span> <span style="color:#fde047">/&gt;</span>
        <span style="color:#fde047">&lt;div&gt;</span>
          <span style="color:#fde047">&lt;h3&gt;</span>Sarah Connor<span style="color:#fde047">&lt;/h3&gt;</span>
          <span style="color:#fde047">&lt;Button</span> <span style="color:#fb923c">variant</span>=<span style="color:#86efac">"gradient"</span><span style="color:#fde047">&gt;</span>Follow<span class="text-yellow-300">&lt;/Button&gt;</span>
        <span style="color:#fde047">&lt;/div&gt;</span>
      <span style="color:#fde047">&lt;/div&gt;</span>
    <span style="color:#fde047">&lt;/Card&gt;</span>
  );
}` }} />
                                                </pre>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating decorative elements */}
                            <div className="absolute -top-10 -right-10 w-24 h-24 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 blur-xl opacity-40 animate-float" />
                            <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 blur-xl opacity-30 animate-float-delayed" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
