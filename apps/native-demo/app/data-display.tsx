import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Avatar, Badge, Tag } from '@xdev-asia/x-ui-native';

export default function DataDisplayScreen() {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.content}>
            {/* Avatars */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Avatars</Text>

                <View style={styles.row}>
                    <Avatar size="sm" fallback="SM" />
                    <Avatar size="md" fallback="MD" />
                    <Avatar size="lg" fallback="LG" />
                    <Avatar size="xl" fallback="XL" />
                </View>
            </View>

            {/* Avatar Group */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Avatar Group</Text>

                <View style={styles.avatarGroup}>
                    <Avatar size="md" fallback="A" style={styles.avatarGroupItem} />
                    <Avatar size="md" fallback="B" style={[styles.avatarGroupItem, { marginLeft: -12 }]} />
                    <Avatar size="md" fallback="C" style={[styles.avatarGroupItem, { marginLeft: -12 }]} />
                    <View style={[styles.avatarMore, { marginLeft: -12 }]}>
                        <Text style={styles.avatarMoreText}>+5</Text>
                    </View>
                </View>
            </View>

            {/* Badges */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Badges</Text>

                <View style={styles.row}>
                    <Badge>Default</Badge>
                    <Badge colorScheme="primary">Primary</Badge>
                    <Badge colorScheme="success">Success</Badge>
                    <Badge colorScheme="warning">Warning</Badge>
                    <Badge colorScheme="error">Error</Badge>
                </View>
            </View>

            {/* Badge Variants */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Badge Variants</Text>

                <View style={styles.row}>
                    <Badge variant="solid" colorScheme="primary">Solid</Badge>
                    <Badge variant="outline" colorScheme="primary">Outline</Badge>
                    <Badge variant="subtle" colorScheme="primary">Subtle</Badge>
                </View>
            </View>

            {/* Tags */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Tags</Text>

                <View style={styles.row}>
                    <Tag>Default</Tag>
                    <Tag colorScheme="primary">Primary</Tag>
                    <Tag colorScheme="success">Success</Tag>
                    <Tag closable>Closable</Tag>
                </View>
            </View>

            {/* Tag Sizes */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Tag Sizes</Text>

                <View style={styles.row}>
                    <Tag size="sm">Small</Tag>
                    <Tag size="md">Medium</Tag>
                    <Tag size="lg">Large</Tag>
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
        flexWrap: 'wrap',
        gap: 12,
        alignItems: 'center',
    },
    avatarGroup: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatarGroupItem: {
        borderWidth: 3,
        borderColor: '#0a0a0f',
    },
    avatarMore: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: 'rgba(99, 102, 241, 0.2)',
        borderWidth: 3,
        borderColor: '#0a0a0f',
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatarMoreText: {
        fontSize: 14,
        fontWeight: '600',
        color: 'rgb(129, 140, 248)',
    },
});
