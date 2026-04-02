import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './style';

const DashboardScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Dashboard Screen (Top Tab 1)</Text>
        </View>
    );
};

export default DashboardScreen;
