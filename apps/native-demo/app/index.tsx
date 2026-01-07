import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

const components = [
    {
        name: 'Buttons',
        href: '/buttons' as const,
        description: 'Solid, Outline, Ghost, Glass variants',
        icon: '🔘'
    },
    {
        name: 'Form Inputs',
        href: '/inputs' as const,
        description: 'Input, TextArea, Select, Checkbox, Switch',
        icon: '📝'
    },
    {
        name: 'Cards',
        href: '/cards' as const,
        description: 'Elevated, Outlined, Glass cards',
        icon: '🃏'
    },
    {
        name: 'Feedback',
        href: '/feedback' as const,
        description: 'Spinner, Progress, Toast',
        icon: '💫'
    },
    {
        name: 'Data Display',
        href: '/data-display' as const,
        description: 'Avatar, Badge, Tag',
        icon: '📊'
    },
];

export default function HomeScreen() {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.content}>
            {/* Hero Section */}
            <View style={styles.hero}>
                <Text style={styles.heroTitle}>X-UI</Text>
                <Text style={styles.heroSubtitle}>
                    Modern React Native Component Library
                </Text>
                <View style={styles.heroBadge}>
                    <Text style={styles.heroBadgeText}>Liquid Glass Design</Text>
                </View>
            </View>

            {/* Component Grid */}
            <View style={styles.grid}>
                {components.map((component) => (
                    <Link key={component.href} href={component.href} asChild>
                        <TouchableOpacity style={styles.card} activeOpacity={0.8}>
                            <Text style={styles.cardIcon}>{component.icon}</Text>
                            <Text style={styles.cardTitle}>{component.name}</Text>
                            <Text style={styles.cardDescription}>{component.description}</Text>
                        </TouchableOpacity>
                    </Link>
                ))}
            </View>

            {/* Footer */}
            <View style={styles.footer}>
                <Text style={styles.footerText}>
                    Built with ❤️ by XDEV Asia
                </Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0a0a0f',
    },
    content: {
        padding: 20,
        paddingBottom: 40,
    },
    hero: {
        alignItems: 'center',
        paddingVertical: 40,
        marginBottom: 20,
    },
    heroTitle: {
        fontSize: 48,
        fontWeight: '800',
        color: '#fff',
        letterSpacing: -2,
    },
    heroSubtitle: {
        fontSize: 16,
        color: 'rgba(255,255,255,0.6)',
        marginTop: 8,
        textAlign: 'center',
    },
    heroBadge: {
        marginTop: 16,
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 100,
        backgroundColor: 'rgba(99, 102, 241, 0.2)',
        borderWidth: 1,
        borderColor: 'rgba(99, 102, 241, 0.3)',
    },
    heroBadgeText: {
        color: 'rgb(129, 140, 248)',
        fontSize: 14,
        fontWeight: '600',
    },
    grid: {
        gap: 16,
    },
    card: {
        backgroundColor: 'rgba(255,255,255,0.06)',
        borderRadius: 20,
        padding: 24,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.1)',
    },
    cardIcon: {
        fontSize: 32,
        marginBottom: 12,
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: '#fff',
        marginBottom: 6,
    },
    cardDescription: {
        fontSize: 14,
        color: 'rgba(255,255,255,0.5)',
        lineHeight: 20,
    },
    footer: {
        marginTop: 40,
        alignItems: 'center',
    },
    footerText: {
        color: 'rgba(255,255,255,0.4)',
        fontSize: 14,
    },
});
