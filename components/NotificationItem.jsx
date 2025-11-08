// components/NotificationItem.jsx

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// Bileşen, 'notification' adında bir prop bekleyecek
const NotificationItem = ({ notification }) => {
    // Zamanı daha okunaklı bir formata çevirme (sadece saat gibi)
    const time = new Date(notification.timestamp).toLocaleTimeString('tr-TR', {
        hour: '2-digit',
        minute: '2-digit'
    });

    return (
        // TouchableOpacity: Öğeye tıklandığında detay sayfasına gitmek için idealdir
        <TouchableOpacity style={styles.container}>
            <View style={styles.iconPlaceholder}>
                <Text style={styles.iconText}>{notification.appIcon}</Text>
            </View>

            <View style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.appName}>{notification.appName}</Text>
                    <Text style={styles.time}>{time}</Text>
                </View>

                <Text style={styles.title} numberOfLines={1}>
                    {notification.title}
                </Text>
                
                <Text style={styles.contentBody} numberOfLines={2}>
                    {notification.content}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#ebebeb', // Hafif ayırıcı çizgi
        backgroundColor: 'white',
        alignItems: 'center',
    },
    iconPlaceholder: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#DCDCDC', // Uygulama ikonunun şimdilik yerini tutacak gri alan
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    iconText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    content: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 2,
    },
    appName: {
        fontSize: 12,
        color: 'gray',
    },
    time: {
        fontSize: 12,
        color: 'gray',
    },
    title: {
        fontSize: 15,
        fontWeight: '600', // Başlık daha belirgin
        marginBottom: 2,
    },
    contentBody: {
        fontSize: 14,
        color: '#333',
    }
});

export default NotificationItem;