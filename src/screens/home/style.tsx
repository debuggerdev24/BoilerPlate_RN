import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
        color: '#333',
    },
    buttonContainer: {
        width: '100%',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#007AFF',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 10,
    },
    postButton: {
        backgroundColor: '#34C759',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    loader: {
        marginVertical: 20,
    },
    error: {
        color: 'red',
        marginTop: 10,
        fontSize: 14,
    },
    resultContainer: {
        marginTop: 20,
        padding: 15,
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        width: '100%',
    },
    resultHeader: {
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
    },
    resultText: {
        fontFamily: 'monospace',
        fontSize: 12,
        color: '#333',
    },
});
