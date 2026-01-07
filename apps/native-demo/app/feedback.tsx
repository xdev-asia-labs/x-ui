import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Spinner } from '@xdev-asia/x-ui-native';

export default function FeedbackScreen() {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.content}>
            {/* Spinners */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Spinners</Text>

                <View style={styles.row}>
                    <View style={styles.spinnerItem}>
                        <Spinner size="sm" />
                        <Text style={styles.label}>Small</Text>
                    </View>
                    <View style={styles.spinnerItem}>
                        <Spinner size="md" />
                        <Text style={styles.label}>Medium</Text>
                    </View>
                    <View style={styles.spinnerItem}>
                        <Spinner size="lg" />
                        <Text style={styles.label}>Large</Text>
                    </View>
                </View>
            </View>

            {/* Spinner Colors */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Spinner Colors</Text>

                <View style={styles.row}>
                    <View style={styles.spinnerItem}>
                        <Spinner color="primary" />
                        <Text style={styles.label}>Primary</Text>
                    </View>
                    <View style={styles.spinnerItem}>
                        <Spinner color="secondary" />
                        <Text style={styles.label}>Secondary</Text>
                    </View>
                    <View style={styles.spinnerItem}>
                        <Spinner color="white" />
                        <Text style={styles.label}>White</Text>
                    </View>
                </View>
            </View>

            {/* Loading States */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Loading States</Text>

                <View style={styles.loadingCard}>
                    <Spinner size="lg" />
                    <Text style={styles.loadingText}>Loading content...</Text>
                </View>
            </View>

            {/* Progress (Coming Soon) */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Progress</Text>
                <View style={styles.comingSoon}>
                    <Text style={styles.comingSoonText}>🚧 Coming Soon</Text>
                </View>
            </View>

            {/* Toast (Coming Soon) */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Toast</Text>
                <View style={styles.comingSoon}>
                    <Text style={styles.comingSoonText}>🚧 Coming Soon</Text>
                </View>
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
    row: {
        flexDirection: 'row',
        gap: 32,
        justifyContent: 'flex-start',
    },
    spinnerItem: {
        alignItems: 'center',
        gap: 12,
    },
    label: {
        fontSize: 12,
        color: 'rgba(255,255,255,0.5)',
    },
    loadingCard: {
        backgroundColor: 'rgba(255,255,255,0.06)',
        borderRadius: 20,
        padding: 40,
        alignItems: 'center',
        gap: 16,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.1)',
    },
    loadingText: {
        fontSize: 16,
        color: 'rgba(255,255,255,0.6)',
    },
    comingSoon: {
        backgroundColor: 'rgba(255,255,255,0.03)',
        borderRadius: 16,
        padding: 24,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.05)',
        borderStyle: 'dashed',
    },
    comingSoonText: {
        fontSize: 14,
        color: 'rgba(255,255,255,0.4)',
    },
});
