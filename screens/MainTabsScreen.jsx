// screens/MainTabsScreen.jsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// Her bir sekme için ayrı bir bileşen oluşturalım (şimdilik placeholder içerikle):
const AllNotifications = () => (
    <View style={styles.tabScreen}>
        <Text style={styles.text}>TÜM BİLDİRİMLER (Kronolojik Akış)</Text>
        <Text style={styles.subText}>(Burada Bildirim Arşivi listesi yer alacak.)</Text>
    </View>
);

const MessagingNotifications = () => (
    <View style={styles.tabScreen}>
        <Text style={styles.text}>GELEN MESAJLAR (WhatsApp, SMS, vb.)</Text>
        <Text style={styles.subText}>(Mesajlaşma bildirimleri filtreli olarak burada yer alacak.)</Text>
    </View>
);

const GroupedNotifications = () => (
    <View style={styles.tabScreen}>
        <Text style={styles.text}>UYGULAMA GRUPLARI (Bankacılık, Sosyal)</Text>
        <Text style={styles.subText}>(Uygulama adı veya kategoriye göre gruplandırılmış bildirimler burada listelenecek.)</Text>
    </View>
);

const Tab = createMaterialTopTabNavigator();

/**
 * Bu bileşen, isteğiniz üzerine kaydırmalı (swipeable) 3 sekmeli arayüzü oluşturur.
 */
export default function MainTabsScreen() {
    return (
        <Tab.Navigator
            initialRouteName="TümBildirimler"
            screenOptions={{
                tabBarActiveTintColor: '#007AFF', // Sekme metin rengi aktifken
                tabBarInactiveTintColor: 'gray', // Sekme metin rengi inaktifken
                tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' }, // Sekme metin stili
                tabBarStyle: { marginTop: 30, backgroundColor: 'white' }, // Sekme çubuğu (Header altında)
                tabBarIndicatorStyle: { backgroundColor: '#007AFF' }, // Seçili sekmenin altındaki çizgi
            }}
        >
            <Tab.Screen
                name="TümBildirimler"
                component={AllNotifications}
                options={{ tabBarLabel: 'TÜMÜ' }}
            />
            <Tab.Screen
                name="GelenMesajlar"
                component={MessagingNotifications}
                options={{ tabBarLabel: 'MESAJLAR' }}
            />
            <Tab.Screen
                name="UygulamaGruplari"
                component={GroupedNotifications}
                options={{ tabBarLabel: 'GRUPLAR' }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    tabScreen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    subText: {
        fontSize: 14,
        color: 'gray',
    }
});