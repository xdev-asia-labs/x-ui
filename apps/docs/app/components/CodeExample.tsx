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

    return (
        <section id="code" style={{
            padding: '120px 2rem',
            background: 'linear-gradient(180deg, transparent 0%, rgba(0,102,255,0.02) 100%)',
        }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                {/* Section header */}
                <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                    <h2 style={{
                        fontSize: '2.5rem',
                        fontWeight: 700,
                        marginBottom: '16px',
                        letterSpacing: '-0.02em',
                    }}>
                        Get Started in <span className="gradient-text">Seconds</span>
                    </h2>
                    <p style={{ color: '#94a3b8', fontSize: '1.125rem', maxWidth: '500px', margin: '0 auto' }}>
                        Install X-UI and start building beautiful interfaces immediately.
                    </p>
                </div>

                {/* Code blocks */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                    gap: '32px',
                }}>
                    {/* Install */}
                    <div className="glass-card" style={{ padding: '24px' }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginBottom: '16px',
                        }}>
                            <span style={{ fontSize: '14px', fontWeight: 600, color: '#94a3b8' }}>
                                Installation
                            </span>
                            <div style={{ display: 'flex', gap: '8px' }}>
                                <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }} />
                                <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#f59e0b' }} />
                                <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10b981' }} />
                            </div>
                        </div>
                        <pre style={{
                            background: 'rgba(0,0,0,0.3)',
                            borderRadius: '12px',
                            padding: '20px',
                            overflow: 'auto',
                            fontSize: '14px',
                            fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                        }}>
                            <code style={{ color: '#e2e8f0' }}>
                                <span style={{ color: '#94a3b8' }}>$ </span>
                                <span style={{ color: '#a78bfa' }}>npm install</span>
                                {' '}
                                <span style={{ color: '#0066ff' }}>@xdev-asia/x-ui-react</span>
                            </code>
                        </pre>
                    </div>

                    {/* Usage */}
                    <div className="glass-card" style={{ padding: '24px' }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginBottom: '16px',
                        }}>
                            <span style={{ fontSize: '14px', fontWeight: 600, color: '#94a3b8' }}>
                                Usage
                            </span>
                            <div style={{ display: 'flex', gap: '8px' }}>
                                <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }} />
                                <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#f59e0b' }} />
                                <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10b981' }} />
                            </div>
                        </div>
                        <pre style={{
                            background: 'rgba(0,0,0,0.3)',
                            borderRadius: '12px',
                            padding: '20px',
                            overflow: 'auto',
                            fontSize: '13px',
                            fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                            lineHeight: 1.6,
                        }}>
                            <code style={{ color: '#e2e8f0' }}>
                                {codeSnippet}
                            </code>
                        </pre>
                    </div>
                </div>
            </div>
        </section>
    );
}
