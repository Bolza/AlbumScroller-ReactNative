/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/
// IOS

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

import Header from './src/components/header.component';
import AlbumList from './src/components/album-list.component';

export default class albums extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Header text={'Albums!'} />
				<AlbumList />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		
	},
});

AppRegistry.registerComponent('albums', () => albums);
