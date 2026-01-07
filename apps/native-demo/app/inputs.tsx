import { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Input, Switch, Checkbox } from '@xdev-asia/x-ui-native';

export default function InputsScreen() {
    const [switchValue, setSwitchValue] = useState(true);
    const [checkValue, setCheckValue] = useState(true);

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.content}>
            {/* Text Inputs */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Text Inputs</Text>
                <View style={styles.column}>
                    <Input placeholder="Default input" />
                    <Input placeholder="With label" label="Email" />
                    <Input
                        placeholder="With error"
                        isInvalid
                        errorMessage="This field is required"
                    />
                    <Input
                        placeholder="Disabled"
                        isDisabled
                    />
                </View>
            </View>

            {/* Input Variants */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Variants</Text>
                <View style={styles.column}>
                    <Input placeholder="Outline" variant="outline" />
                    <Input placeholder="Filled" variant="filled" />
                    <Input placeholder="Underline" variant="underline" />
                </View>
            </View>

            {/* Switch */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Switch</Text>
                <View style={styles.column}>
                    <Switch
                        value={switchValue}
                        onValueChange={setSwitchValue}
                        label="Enable notifications"
                    />
                    <Switch
                        value={false}
                        label="Disabled switch"
                        isDisabled
                    />
                </View>
            </View>

            {/* Checkbox */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Checkbox</Text>
                <View style={styles.column}>
                    <Checkbox
                        checked={checkValue}
                        onChange={setCheckValue}
                        label="Accept terms and conditions"
                    />
                    <Checkbox
                        checked={false}
                        label="Disabled checkbox"
                        isDisabled
                    />
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
    column: {
        gap: 16,
    },
});
