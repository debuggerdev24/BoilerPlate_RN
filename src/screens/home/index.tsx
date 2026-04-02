import React from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { styles } from './style';
import { RootState } from '../../store/rootReducer';
import { fetchDataRequest, postDataRequest } from '../../store/slices/dummySlice';

const HomeScreen = () => {
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state: RootState) => state.dummy);

    const handleGet = () => {
        dispatch(fetchDataRequest(1));
    };

    const handlePost = () => {
        dispatch(postDataRequest({ title: 'foo', body: 'bar', userId: 1 }));
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.header}>Redux Saga Example</Text>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handleGet}>
                    <Text style={styles.buttonText}>GET Request (ID: 1)</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button, styles.postButton]} onPress={handlePost}>
                    <Text style={styles.buttonText}>POST Request</Text>
                </TouchableOpacity>
            </View>

            {loading && <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />}
            {error && <Text style={styles.error}>Error: {error}</Text>}

            {data && (
                <View style={styles.resultContainer}>
                    <Text style={styles.resultHeader}>Result:</Text>
                    <Text style={styles.resultText}>{JSON.stringify(data, null, 2)}</Text>
                </View>
            )}
        </ScrollView>
    );
};

export default HomeScreen;
