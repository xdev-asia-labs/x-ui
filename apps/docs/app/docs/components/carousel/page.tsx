'use client';

import React from 'react';
import DocsLayout from '@docs/DocsLayout';
import CodeBlock from '@components/CodeBlock';

export default function CarouselPage() {
    return (
        <DocsLayout>
            <div style={{ maxWidth: '800px' }}>
                <h1 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '12px', color: 'var(--x-foreground)' }}>
                    Carousel
                </h1>
                <p style={{ fontSize: '18px', color: 'var(--x-mutedForeground)', marginBottom: '40px', lineHeight: 1.7 }}>
                    A slideshow component for cycling through content.
                </p>

                <section style={{ marginBottom: '32px' }}>
                    <CodeBlock language="tsx" code={`import { Carousel, CarouselItem } from '@xdev-asia/x-ui-react';`} />
                </section>

                <section style={{ marginBottom: '48px' }}>
                    <CodeBlock language="tsx" code={`<Carousel autoPlay interval={3000}>
  <CarouselItem>Slide 1</CarouselItem>
  <CarouselItem>Slide 2</CarouselItem>
  <CarouselItem>Slide 3</CarouselItem>
</Carousel>`} />
                </section>

                <section>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--x-foreground)' }}>
                        Props
                    </h2>
                    <ul style={{ color: 'var(--x-mutedForeground)', lineHeight: 2 }}>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>autoPlay</code> - Auto-advance slides</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>interval</code> - Time between slides (ms)</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>showDots</code> - Show navigation dots</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>showArrows</code> - Show prev/next arrows</li>
                    </ul>
                </section>
            </div>
        </DocsLayout>
    );
}
