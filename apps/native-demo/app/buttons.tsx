import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Button } from '@xdev-asia/x-ui-native';

export default function ButtonsScreen() {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.content}>
            {/* Variants */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Variants</Text>
                <View style={styles.row}>
                    <Button>Solid</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                </View>
            </View>

            {/* Sizes */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Sizes</Text>
                <View style={styles.column}>
                    <Button size="sm">Small</Button>
                    <Button size="md">Medium</Button>
                    <Button size="lg">Large</Button>
                </View>
            </View>

            {/* Color Schemes */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Color Schemes</Text>
                <View style={styles.column}>
                    <Button colorScheme="primary">Primary</Button>
                    <Button colorScheme="secondary">Secondary</Button>
                    <Button colorScheme="success">Success</Button>
                    <Button colorScheme="warning">Warning</Button>
                    <Button colorScheme="error">Error</Button>
                </View>
            </View>

            {/* States */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>States</Text>
                <View style={styles.row}>
                    <Button isLoading>Loading</Button>
                    <Button isDisabled>Disabled</Button>
                </View>
            </View>

            {/* Full Width */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Full Width</Text>
                <Button fullWidth>Full Width Button</Button>
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
        flexWrap: 'wrap',
        gap: 12,
    },
    column: {
        gap: 12,
    },
});
