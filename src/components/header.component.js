import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>{props.text}!</Text>
        </View>
    ); 
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 15,
        height: 60,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative',

    },
	textStyle: {
		fontSize: 20,
	} 
});

export default Header;
