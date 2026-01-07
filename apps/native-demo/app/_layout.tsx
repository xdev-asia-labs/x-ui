import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from '@xdev-asia/x-ui-native';

export default function RootLayout() {
    return (
        <ThemeProvider defaultTheme="dark">
            <StatusBar style="light" />
            <Stack
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#0a0a0f',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: '600',
                    },
                    contentStyle: {
                        backgroundColor: '#0a0a0f',
                    },
                }}
            >
                <Stack.Screen
                    name="index"
                    options={{
                        title: 'X-UI Components',
                        headerLargeTitle: true,
                    }}
                />
                <Stack.Screen name="buttons" options={{ title: 'Buttons' }} />
                <Stack.Screen name="inputs" options={{ title: 'Form Inputs' }} />
                <Stack.Screen name="cards" options={{ title: 'Cards' }} />
                <Stack.Screen name="feedback" options={{ title: 'Feedback' }} />
                <Stack.Screen name="data-display" options={{ title: 'Data Display' }} />
            </Stack>
        </ThemeProvider>
    );
}
