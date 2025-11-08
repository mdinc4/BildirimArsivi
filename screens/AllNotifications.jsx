// screens/AllNotifications.jsx

import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import NotificationItem from '../components/NotificationItem'; // Önceki adımda yazdığımız bileşen

// --- Geçici (Statik) Bildirim Verisi ---
const DUMMY_NOTIFICATIONS = [
  {
    id: '1',
    appName: 'WhatsApp',
    appIcon: 'WA',
    title: 'Ayşe T.',
    content: 'Bugünkü toplantı saat kaçta başlıyor?',
    timestamp: '2025-11-08T19:30:00Z',
    isRead: false,
    isFavorite: false,
  },
  {
    id: '2',
    appName: 'Banka App',
    appIcon: '₺',
    title: 'Güvenlik Uyarısı',
    content: 'Tek kullanımlık şifreniz: 543210. Kimseyle paylaşmayın.',
    timestamp: '2025-11-08T18:55:00Z',
    isRead: false,
    isFavorite: false,
  },
  {
    id: '3',
    appName: 'Twitter',
    appIcon: 'X',
    title: 'Yeni Takipçi',
    content: '@kullanici123 sizi takip etmeye başladı.',
    timestamp: '2025-11-08T18:40:00Z',
    isRead: true, // Okunmuş
    isFavorite: false,
  },
];
// ----------------------------------------

export default function AllNotifications() {
  // Şimdilik statik veriyi kullanıyoruz. Gerçek bildirimler buraya gelecek.
  const [notifications, setNotifications] = useState(DUMMY_NOTIFICATIONS);

  // FlatList, büyük listeleri verimli bir şekilde render etmek için kullanılır.
  return (
    <View style={styles.container}>
      {/* Listeyi göstermek için FlatList kullanıyoruz */}
      <FlatList
        data={notifications} // Gösterilecek veri dizisi
        keyExtractor={(item) => item.id} // Her öğeye benzersiz bir anahtar verir
        renderItem={({ item }) => (
          <NotificationItem notification={item} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Beyaz arka plan
  },
});