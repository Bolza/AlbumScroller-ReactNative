import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';

import AlbumDetail from './album-detail.component';

const url = 'https://rallycoding.herokuapp.com/api/music_albums';

class AlbumList extends Component {
    state = {
        albums: []
    }

    componentWillMount() {
        axios.get(url)
            .then((resp) => {
              this.setState({ albums: resp.data });
            });
    }

    renderAlbums() {
        return this.state.albums.map((album) => 
            <AlbumDetail key={album.title} album={album} />
        );
    }
    
    render() {
        return (
            <ScrollView style={styles.container}>
               {this.renderAlbums()}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {

    },
	textStyle: {
	} 
});

export default AlbumList;
