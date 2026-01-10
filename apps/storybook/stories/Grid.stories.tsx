import type { Meta, StoryObj } from '@storybook/react';
import { Grid, Col, Row } from '@xdev-asia/x-ui-react';

const meta: Meta<typeof Grid> = {
    title: 'Components/Grid',
    component: Grid,
    parameters: { layout: 'padded' },
    tags: ['autodocs'],
    argTypes: {
        columns: { control: { type: 'number', min: 1, max: 12 } },
        gap: { control: { type: 'number', min: 0, max: 10 } },
    },
};

export default meta;
type Story = StoryObj<typeof Grid>;

const boxStyle = (color: string) => ({
    padding: '16px',
    background: color,
    borderRadius: '8px',
    color: 'white',
    textAlign: 'center' as const,
    fontWeight: 500,
});

export const Default: Story = {
    render: () => (
        <Grid columns={12} gap={4}>
            <Col span={4} style={boxStyle('rgba(99, 102, 241, 0.8)')}>Col 4</Col>
            <Col span={4} style={boxStyle('rgba(139, 92, 246, 0.8)')}>Col 4</Col>
            <Col span={4} style={boxStyle('rgba(168, 85, 247, 0.8)')}>Col 4</Col>
        </Grid>
    ),
};

export const TwelveColumns: Story = {
    render: () => (
        <Grid columns={12} gap={2}>
            {[...Array(12)].map((_, i) => (
                <Col key={i} span={1} style={boxStyle('rgba(99, 102, 241, 0.7)')}>
                    {i + 1}
                </Col>
            ))}
        </Grid>
    ),
};

export const VariableSpans: Story = {
    render: () => (
        <Grid columns={12} gap={4}>
            <Col span={6} style={boxStyle('rgba(99, 102, 241, 0.8)')}>Span 6</Col>
            <Col span={6} style={boxStyle('rgba(139, 92, 246, 0.8)')}>Span 6</Col>
            <Col span={3} style={boxStyle('rgba(168, 85, 247, 0.8)')}>Span 3</Col>
            <Col span={6} style={boxStyle('rgba(192, 132, 252, 0.8)')}>Span 6</Col>
            <Col span={3} style={boxStyle('rgba(233, 213, 255, 0.8)')}>Span 3</Col>
            <Col span={12} style={boxStyle('rgba(99, 102, 241, 0.9)')}>Span 12 (Full Width)</Col>
        </Grid>
    ),
};

export const RowShorthand: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Row gap={4}>
                <Col span={4} style={boxStyle('rgba(59, 130, 246, 0.8)')}>Row 1 - Col 4</Col>
                <Col span={8} style={boxStyle('rgba(99, 102, 241, 0.8)')}>Row 1 - Col 8</Col>
            </Row>
            <Row gap={4}>
                <Col span={3} style={boxStyle('rgba(139, 92, 246, 0.8)')}>Row 2 - Col 3</Col>
                <Col span={3} style={boxStyle('rgba(168, 85, 247, 0.8)')}>Row 2 - Col 3</Col>
                <Col span={3} style={boxStyle('rgba(192, 132, 252, 0.8)')}>Row 2 - Col 3</Col>
                <Col span={3} style={boxStyle('rgba(233, 213, 255, 0.8)')}>Row 2 - Col 3</Col>
            </Row>
        </div>
    ),
};

export const CardLayout: Story = {
    render: () => (
        <Grid columns={3} gap={6}>
            {[1, 2, 3, 4, 5, 6].map((i) => (
                <Col key={i} style={{
                    padding: '24px',
                    background: 'rgba(255,255,255,0.05)',
                    borderRadius: '16px',
                    border: '1px solid rgba(255,255,255,0.1)',
                }}>
                    <h3 style={{ margin: '0 0 8px 0', color: 'white' }}>Card {i}</h3>
                    <p style={{ margin: 0, color: 'rgba(255,255,255,0.6)', fontSize: '14px' }}>
                        Grid layout makes it easy to create card grids.
                    </p>
                </Col>
            ))}
        </Grid>
    ),
};

export const DashboardLayout: Story = {
    render: () => (
        <Grid columns={12} gap={4} style={{ minHeight: '300px' }}>
            <Col span={12} style={{ ...boxStyle('rgba(59, 130, 246, 0.8)'), padding: '24px' }}>
                Header / Navigation
            </Col>
            <Col span={3} style={{ ...boxStyle('rgba(99, 102, 241, 0.6)'), minHeight: '200px' }}>
                Sidebar
            </Col>
            <Col span={9} style={{ ...boxStyle('rgba(139, 92, 246, 0.4)'), minHeight: '200px' }}>
                Main Content Area
            </Col>
            <Col span={12} style={boxStyle('rgba(168, 85, 247, 0.6)')}>
                Footer
            </Col>
        </Grid>
    ),
};
