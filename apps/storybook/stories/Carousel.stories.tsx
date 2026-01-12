import type { Meta, StoryObj } from '@storybook/react';
import { Carousel } from '@xdev-asia/x-ui-react';

const meta: Meta<typeof Carousel> = {
    title: 'Data Display/Carousel',
    component: Carousel,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const slides = [
    { bg: '#6366f1', text: 'Slide 1' },
    { bg: '#8b5cf6', text: 'Slide 2' },
    { bg: '#a855f7', text: 'Slide 3' },
    { bg: '#d946ef', text: 'Slide 4' },
];

export const Default: Story = {
    render: () => (
        <div style={{ width: '600px' }}>
            <Carousel>
                {slides.map((slide, i) => (
                    <div
                        key={i}
                        style={{
                            height: '300px',
                            backgroundColor: slide.bg,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontSize: '32px',
                            fontWeight: 'bold',
                        }}
                    >
                        {slide.text}
                    </div>
                ))}
            </Carousel>
        </div>
    ),
};

export const AutoPlay: Story = {
    render: () => (
        <div style={{ width: '600px' }}>
            <Carousel autoPlay interval={2000}>
                {slides.map((slide, i) => (
                    <div
                        key={i}
                        style={{
                            height: '300px',
                            backgroundColor: slide.bg,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontSize: '32px',
                            fontWeight: 'bold',
                        }}
                    >
                        {slide.text}
                    </div>
                ))}
            </Carousel>
        </div>
    ),
};

export const NoArrows: Story = {
    render: () => (
        <div style={{ width: '600px' }}>
            <Carousel showArrows={false}>
                {slides.map((slide, i) => (
                    <div
                        key={i}
                        style={{
                            height: '300px',
                            backgroundColor: slide.bg,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontSize: '32px',
                            fontWeight: 'bold',
                        }}
                    >
                        {slide.text}
                    </div>
                ))}
            </Carousel>
        </div>
    ),
};

export const NoLoop: Story = {
    render: () => (
        <div style={{ width: '600px' }}>
            <Carousel loop={false}>
                {slides.map((slide, i) => (
                    <div
                        key={i}
                        style={{
                            height: '300px',
                            backgroundColor: slide.bg,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontSize: '32px',
                            fontWeight: 'bold',
                        }}
                    >
                        {slide.text}
                    </div>
                ))}
            </Carousel>
        </div>
    ),
};

export const ImageGallery: Story = {
    render: () => (
        <div style={{ width: '600px' }}>
            <Carousel>
                {[1, 2, 3, 4].map((i) => (
                    <div
                        key={i}
                        style={{
                            height: '400px',
                            backgroundImage: `url(https://picsum.photos/seed/${i}/600/400)`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                ))}
            </Carousel>
        </div>
    ),
};
