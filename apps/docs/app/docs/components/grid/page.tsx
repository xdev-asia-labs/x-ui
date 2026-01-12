'use client';

import React from 'react';
import DocsLayout from '@docs/DocsLayout';
import CodeBlock from '@components/CodeBlock';
import { Grid, Col, Row, Box } from '@xdev-asia/x-ui-react';

export default function GridPage() {
    return (
        <DocsLayout>
            <div style={{ maxWidth: '900px' }}>
                <h1 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '12px', color: 'var(--x-foreground)' }}>
                    Grid
                </h1>
                <p style={{ fontSize: '18px', color: 'var(--x-mutedForeground)', marginBottom: '40px', lineHeight: 1.7 }}>
                    A responsive CSS Grid layout system with 12-column support, similar to Material UI Grid.
                </p>

                <section style={{ marginBottom: '32px' }}>
                    <CodeBlock language="tsx" code={`import { Grid, Col, Row } from '@xdev-asia/x-ui-react';`} />
                </section>

                {/* Basic Grid */}
                <section style={{ marginBottom: '48px' }}>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--x-foreground)' }}>
                        Basic Grid
                    </h2>
                    <p style={{ color: 'var(--x-mutedForeground)', marginBottom: '16px' }}>
                        Use <code style={{ color: 'rgb(59, 130, 246)' }}>Grid</code> as a container and <code style={{ color: 'rgb(59, 130, 246)' }}>Col</code> for columns.
                    </p>
                    <div style={{ background: 'rgba(255,255,255,0.03)', padding: '24px', borderRadius: '12px', marginBottom: '16px' }}>
                        <Grid columns={12} gap={4}>
                            <Col span={4}>
                                <Box style={{ background: 'rgb(var(--x-primary))', padding: '16px', borderRadius: '8px', textAlign: 'center' }}>
                                    span=4
                                </Box>
                            </Col>
                            <Col span={4}>
                                <Box style={{ background: 'rgb(var(--x-primary))', padding: '16px', borderRadius: '8px', textAlign: 'center' }}>
                                    span=4
                                </Box>
                            </Col>
                            <Col span={4}>
                                <Box style={{ background: 'rgb(var(--x-primary))', padding: '16px', borderRadius: '8px', textAlign: 'center' }}>
                                    span=4
                                </Box>
                            </Col>
                        </Grid>
                    </div>
                    <CodeBlock language="tsx" code={`<Grid columns={12} gap={4}>
  <Col span={4}>span=4</Col>
  <Col span={4}>span=4</Col>
  <Col span={4}>span=4</Col>
</Grid>`} />
                </section>

                {/* Variable Width Columns */}
                <section style={{ marginBottom: '48px' }}>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--x-foreground)' }}>
                        Variable Width Columns
                    </h2>
                    <div style={{ background: 'rgba(255,255,255,0.03)', padding: '24px', borderRadius: '12px', marginBottom: '16px' }}>
                        <Grid columns={12} gap={4}>
                            <Col span={8}>
                                <Box style={{ background: 'rgb(var(--x-accent))', padding: '16px', borderRadius: '8px', textAlign: 'center' }}>
                                    span=8
                                </Box>
                            </Col>
                            <Col span={4}>
                                <Box style={{ background: 'rgb(var(--x-accent))', padding: '16px', borderRadius: '8px', textAlign: 'center' }}>
                                    span=4
                                </Box>
                            </Col>
                            <Col span={6}>
                                <Box style={{ background: 'rgb(var(--x-accent))', padding: '16px', borderRadius: '8px', textAlign: 'center' }}>
                                    span=6
                                </Box>
                            </Col>
                            <Col span={6}>
                                <Box style={{ background: 'rgb(var(--x-accent))', padding: '16px', borderRadius: '8px', textAlign: 'center' }}>
                                    span=6
                                </Box>
                            </Col>
                        </Grid>
                    </div>
                    <CodeBlock language="tsx" code={`<Grid columns={12} gap={4}>
  <Col span={8}>span=8</Col>
  <Col span={4}>span=4</Col>
  <Col span={6}>span=6</Col>
  <Col span={6}>span=6</Col>
</Grid>`} />
                </section>

                {/* Responsive Grid */}
                <section style={{ marginBottom: '48px' }}>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--x-foreground)' }}>
                        Responsive Grid
                    </h2>
                    <p style={{ color: 'var(--x-mutedForeground)', marginBottom: '16px' }}>
                        Use responsive objects to change column spans at different breakpoints.
                        Try resizing your browser to see the columns reflow!
                    </p>
                    <div style={{ background: 'rgba(255,255,255,0.03)', padding: '24px', borderRadius: '12px', marginBottom: '16px' }}>
                        <Grid columns={12} gap={4}>
                            <Col span={{ base: 12, sm: 6, md: 4 }}>
                                <Box style={{ background: 'linear-gradient(135deg, rgb(16, 185, 129), rgb(5, 150, 105))', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
                                    12 → 6 → 4
                                </Box>
                            </Col>
                            <Col span={{ base: 12, sm: 6, md: 4 }}>
                                <Box style={{ background: 'linear-gradient(135deg, rgb(59, 130, 246), rgb(37, 99, 235))', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
                                    12 → 6 → 4
                                </Box>
                            </Col>
                            <Col span={{ base: 12, sm: 6, md: 4 }}>
                                <Box style={{ background: 'linear-gradient(135deg, rgb(139, 92, 246), rgb(109, 40, 217))', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
                                    12 → 6 → 4
                                </Box>
                            </Col>
                            <Col span={{ base: 12, sm: 6, md: 4 }}>
                                <Box style={{ background: 'linear-gradient(135deg, rgb(244, 63, 94), rgb(225, 29, 72))', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
                                    12 → 6 → 4
                                </Box>
                            </Col>
                            <Col span={{ base: 12, sm: 6, md: 4 }}>
                                <Box style={{ background: 'linear-gradient(135deg, rgb(251, 191, 36), rgb(217, 119, 6))', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
                                    12 → 6 → 4
                                </Box>
                            </Col>
                            <Col span={{ base: 12, sm: 6, md: 4 }}>
                                <Box style={{ background: 'linear-gradient(135deg, rgb(20, 184, 166), rgb(13, 148, 136))', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
                                    12 → 6 → 4
                                </Box>
                            </Col>
                        </Grid>
                    </div>
                    <CodeBlock language="tsx" code={`{/* Responsive: full width on mobile, 2 cols on tablet, 3 cols on desktop */}
<Grid columns={12} gap={4}>
  <Col span={{ base: 12, sm: 6, md: 4 }}>Card 1</Col>
  <Col span={{ base: 12, sm: 6, md: 4 }}>Card 2</Col>
  <Col span={{ base: 12, sm: 6, md: 4 }}>Card 3</Col>
  <Col span={{ base: 12, sm: 6, md: 4 }}>Card 4</Col>
  <Col span={{ base: 12, sm: 6, md: 4 }}>Card 5</Col>
  <Col span={{ base: 12, sm: 6, md: 4 }}>Card 6</Col>
</Grid>

{/* Available breakpoints: base, sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1536px) */}`} />
                </section>

                {/* Gap Variations */}
                <section style={{ marginBottom: '48px' }}>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--x-foreground)' }}>
                        Gap & Spacing
                    </h2>
                    <p style={{ color: 'var(--x-mutedForeground)', marginBottom: '16px' }}>
                        Use <code style={{ color: 'rgb(59, 130, 246)' }}>gap</code>, <code style={{ color: 'rgb(59, 130, 246)' }}>rowGap</code>, and <code style={{ color: 'rgb(59, 130, 246)' }}>columnGap</code> props.
                    </p>
                    <div style={{ background: 'rgba(255,255,255,0.03)', padding: '24px', borderRadius: '12px', marginBottom: '16px' }}>
                        <Grid columns={3} gap={6}>
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <Box key={i} style={{ background: 'rgb(var(--x-secondary))', padding: '24px', borderRadius: '8px', textAlign: 'center' }}>
                                    Item {i}
                                </Box>
                            ))}
                        </Grid>
                    </div>
                    <CodeBlock language="tsx" code={`<Grid columns={3} gap={6}>
  <Box>Item 1</Box>
  <Box>Item 2</Box>
  <Box>Item 3</Box>
  <Box>Item 4</Box>
  <Box>Item 5</Box>
  <Box>Item 6</Box>
</Grid>`} />
                </section>

                {/* Row Component */}
                <section style={{ marginBottom: '48px' }}>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--x-foreground)' }}>
                        Row Shorthand
                    </h2>
                    <p style={{ color: 'var(--x-mutedForeground)', marginBottom: '16px' }}>
                        <code style={{ color: 'rgb(59, 130, 246)' }}>Row</code> is a shorthand for <code style={{ color: 'rgb(59, 130, 246)' }}>Grid columns=12</code>.
                    </p>
                    <div style={{ background: 'rgba(255,255,255,0.03)', padding: '24px', borderRadius: '12px', marginBottom: '16px' }}>
                        <Row gap={4}>
                            <Col span={3}>
                                <Box style={{ background: 'linear-gradient(135deg, rgb(99,102,241), rgb(139,92,246))', padding: '16px', borderRadius: '8px', textAlign: 'center' }}>
                                    3
                                </Box>
                            </Col>
                            <Col span={6}>
                                <Box style={{ background: 'linear-gradient(135deg, rgb(99,102,241), rgb(139,92,246))', padding: '16px', borderRadius: '8px', textAlign: 'center' }}>
                                    6
                                </Box>
                            </Col>
                            <Col span={3}>
                                <Box style={{ background: 'linear-gradient(135deg, rgb(99,102,241), rgb(139,92,246))', padding: '16px', borderRadius: '8px', textAlign: 'center' }}>
                                    3
                                </Box>
                            </Col>
                        </Row>
                    </div>
                    <CodeBlock language="tsx" code={`<Row gap={4}>
  <Col span={3}>3</Col>
  <Col span={6}>6</Col>
  <Col span={3}>3</Col>
</Row>`} />
                </section>

                {/* Multiple Rows */}
                <section style={{ marginBottom: '48px' }}>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--x-foreground)' }}>
                        Multiple Rows
                    </h2>
                    <p style={{ color: 'var(--x-mutedForeground)', marginBottom: '16px' }}>
                        Stack multiple <code style={{ color: 'rgb(59, 130, 246)' }}>Row</code> components to create distinct rows with different column layouts.
                    </p>
                    <div style={{ background: 'rgba(255,255,255,0.03)', padding: '24px', borderRadius: '12px', marginBottom: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        <Row gap={4}>
                            <Col span={6}>
                                <Box style={{ background: 'linear-gradient(135deg, rgb(16, 185, 129), rgb(5, 150, 105))', padding: '16px', borderRadius: '8px', textAlign: 'center' }}>
                                    Row 1 - span=6
                                </Box>
                            </Col>
                            <Col span={6}>
                                <Box style={{ background: 'linear-gradient(135deg, rgb(16, 185, 129), rgb(5, 150, 105))', padding: '16px', borderRadius: '8px', textAlign: 'center' }}>
                                    Row 1 - span=6
                                </Box>
                            </Col>
                        </Row>
                        <Row gap={4}>
                            <Col span={4}>
                                <Box style={{ background: 'linear-gradient(135deg, rgb(59, 130, 246), rgb(37, 99, 235))', padding: '16px', borderRadius: '8px', textAlign: 'center' }}>
                                    Row 2 - span=4
                                </Box>
                            </Col>
                            <Col span={4}>
                                <Box style={{ background: 'linear-gradient(135deg, rgb(59, 130, 246), rgb(37, 99, 235))', padding: '16px', borderRadius: '8px', textAlign: 'center' }}>
                                    Row 2 - span=4
                                </Box>
                            </Col>
                            <Col span={4}>
                                <Box style={{ background: 'linear-gradient(135deg, rgb(59, 130, 246), rgb(37, 99, 235))', padding: '16px', borderRadius: '8px', textAlign: 'center' }}>
                                    Row 2 - span=4
                                </Box>
                            </Col>
                        </Row>
                        <Row gap={4}>
                            <Col span={3}>
                                <Box style={{ background: 'linear-gradient(135deg, rgb(244, 63, 94), rgb(225, 29, 72))', padding: '16px', borderRadius: '8px', textAlign: 'center' }}>
                                    Row 3 - span=3
                                </Box>
                            </Col>
                            <Col span={6}>
                                <Box style={{ background: 'linear-gradient(135deg, rgb(244, 63, 94), rgb(225, 29, 72))', padding: '16px', borderRadius: '8px', textAlign: 'center' }}>
                                    Row 3 - span=6
                                </Box>
                            </Col>
                            <Col span={3}>
                                <Box style={{ background: 'linear-gradient(135deg, rgb(244, 63, 94), rgb(225, 29, 72))', padding: '16px', borderRadius: '8px', textAlign: 'center' }}>
                                    Row 3 - span=3
                                </Box>
                            </Col>
                        </Row>
                    </div>
                    <CodeBlock language="tsx" code={`{/* Stack multiple Rows for distinct row layouts */}
<div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
  <Row gap={4}>
    <Col span={6}>Row 1 - span=6</Col>
    <Col span={6}>Row 1 - span=6</Col>
  </Row>
  <Row gap={4}>
    <Col span={4}>Row 2 - span=4</Col>
    <Col span={4}>Row 2 - span=4</Col>
    <Col span={4}>Row 2 - span=4</Col>
  </Row>
  <Row gap={4}>
    <Col span={3}>Row 3 - span=3</Col>
    <Col span={6}>Row 3 - span=6</Col>
    <Col span={3}>Row 3 - span=3</Col>
  </Row>
</div>`} />
                </section>

                {/* Alignment */}
                <section style={{ marginBottom: '48px' }}>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--x-foreground)' }}>
                        Alignment
                    </h2>
                    <p style={{ color: 'var(--x-mutedForeground)', marginBottom: '16px' }}>
                        Control alignment with <code style={{ color: 'rgb(59, 130, 246)' }}>align</code> and <code style={{ color: 'rgb(59, 130, 246)' }}>justify</code> props.
                    </p>
                    <div style={{ background: 'rgba(255,255,255,0.03)', padding: '24px', borderRadius: '12px', marginBottom: '16px' }}>
                        <Grid columns={3} gap={4} align="center" style={{ minHeight: '150px' }}>
                            <Box style={{ background: 'rgb(var(--x-primary))', padding: '16px', borderRadius: '8px', height: '40px' }}>
                                Short
                            </Box>
                            <Box style={{ background: 'rgb(var(--x-primary))', padding: '16px', borderRadius: '8px', height: '80px' }}>
                                Tall content
                            </Box>
                            <Box style={{ background: 'rgb(var(--x-primary))', padding: '16px', borderRadius: '8px', height: '60px' }}>
                                Medium
                            </Box>
                        </Grid>
                    </div>
                </section>

                {/* Props */}
                <section>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--x-foreground)' }}>
                        Props
                    </h2>

                    <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '12px', color: 'var(--x-foreground)' }}>
                        Grid Props
                    </h3>
                    <ul style={{ color: 'var(--x-mutedForeground)', lineHeight: 2, marginBottom: '24px' }}>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>columns</code> - Number of columns (1-12) or responsive object</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>gap</code> - Gap between items (number or string)</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>rowGap</code> - Row gap</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>columnGap</code> - Column gap</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>align</code> - 'start' | 'center' | 'end' | 'stretch' | 'baseline'</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>justify</code> - 'start' | 'center' | 'end' | 'stretch'</li>
                    </ul>

                    <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '12px', color: 'var(--x-foreground)' }}>
                        Col Props
                    </h3>
                    <ul style={{ color: 'var(--x-mutedForeground)', lineHeight: 2 }}>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>span</code> - Column span (1-12) or responsive object</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>start</code> - Grid column start position</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>end</code> - Grid column end position</li>
                    </ul>
                </section>
            </div>
        </DocsLayout>
    );
}
