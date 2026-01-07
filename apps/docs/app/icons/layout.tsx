import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Icons | X-UI',
    description: 'Explore our complete library of custom SVG icons. Search and find the perfect icon for your project.',
};

export default function IconsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {children}
        </>
    );
}
