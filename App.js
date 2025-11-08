import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// App.js

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainTabsScreen from './screens/MainTabsScreen'; // Yeni bileşenimizi import ediyoruz

export default function App() {
    return (
        // Tüm navigasyonu kapsayan zorunlu bileşen
        <NavigationContainer>
            {/* 3 sekmeli ana ekranımızı yüklüyoruz */}
            <MainTabsScreen />
        </NavigationContainer>
    );
}