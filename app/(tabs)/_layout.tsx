import { Stack } from 'expo-router';
import { Tabs } from 'expo-router';
import { config } from '@gluestack-ui/config';
import { Ionicons } from '@expo/vector-icons';
import { StyledProvider } from '@gluestack-style/react';

export default function TabLayout() {
  return (
    <StyledProvider config={config}>
      <Stack.Screen options={{ title: 'GYMBro' }} />
      <Tabs
        screenOptions={{
          headerShown: false,
          animation: 'shift',
          tabBarStyle: {
            position: 'sticky',
            bottom: 0,
            borderBlockColor: '#ffffff00',
            left: 0,
            right: 0,
            height: 55,
            backgroundColor: '#000000',
          },
          tabBarActiveTintColor: '#FF5F1F',
          tabBarInactiveTintColor: '#888',
        }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Ana Sayfa',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="program"
          options={{
            title: 'Program',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="barbell-outline" size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </StyledProvider>
  );
}
