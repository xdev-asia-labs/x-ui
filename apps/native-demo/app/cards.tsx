import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Card, Avatar, Badge, Button } from '@xdev-asia/x-ui-native';

export default function CardsScreen() {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.content}>
            {/* Basic Cards */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Card Variants</Text>

                <Card variant="elevated" style={styles.card}>
                    <Text style={styles.cardTitle}>Elevated Card</Text>
                    <Text style={styles.cardText}>
                        This card has a subtle shadow elevation effect.
                    </Text>
                </Card>

                <Card variant="outlined" style={styles.card}>
                    <Text style={styles.cardTitle}>Outlined Card</Text>
                    <Text style={styles.cardText}>
                        This card has a border outline style.
                    </Text>
                </Card>

                <Card variant="filled" style={styles.card}>
                    <Text style={styles.cardTitle}>Filled Card</Text>
                    <Text style={styles.cardText}>
                        This card has a filled background.
                    </Text>
                </Card>
            </View>

            {/* Profile Card */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Profile Card</Text>

                <Card variant="elevated" style={styles.profileCard}>
                    <View style={styles.profileHeader}>
                        <Avatar size="lg" fallback="JD" />
                        <View style={styles.profileInfo}>
                            <Text style={styles.profileName}>John Doe</Text>
                            <Text style={styles.profileRole}>Software Engineer</Text>
                        </View>
                        <Badge colorScheme="success">Pro</Badge>
                    </View>
                    <Text style={styles.profileBio}>
                        Building beautiful user interfaces with React and React Native.
                    </Text>
                    <View style={styles.profileActions}>
                        <Button size="sm" variant="outline">Message</Button>
                        <Button size="sm">Follow</Button>
                    </View>
                </Card>
            </View>

            {/* Interactive Card */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Interactive Card</Text>

                <Card variant="elevated" isInteractive style={styles.card}>
                    <Text style={styles.cardTitle}>Tap Me!</Text>
                    <Text style={styles.cardText}>
                        This card responds to touch with a press effect.
                    </Text>
                </Card>
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
        gap: 32,
    },
    section: {
        gap: 16,
    },
    sectionTitle: {
        fontSize: 14,
        fontWeight: '600',
        color: 'rgba(255,255,255,0.5)',
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
    card: {
        padding: 20,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#fff',
        marginBottom: 8,
    },
    cardText: {
        fontSize: 14,
        color: 'rgba(255,255,255,0.6)',
        lineHeight: 20,
    },
    profileCard: {
        padding: 20,
    },
    profileHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        marginBottom: 16,
    },
    profileInfo: {
        flex: 1,
    },
    profileName: {
        fontSize: 18,
        fontWeight: '600',
        color: '#fff',
    },
    profileRole: {
        fontSize: 14,
        color: 'rgba(255,255,255,0.5)',
    },
    profileBio: {
        fontSize: 14,
        color: 'rgba(255,255,255,0.7)',
        lineHeight: 20,
        marginBottom: 16,
    },
    profileActions: {
        flexDirection: 'row',
        gap: 12,
    },
});
