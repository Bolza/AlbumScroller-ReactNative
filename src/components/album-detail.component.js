import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, Linking } from 'react-native';

import Card from './card.component';
import CardSection from './card-section.component';

const AlbumDetail = ({ album }) => {
    const onButtonPress = () => {
        Linking.openURL(album.url);
    };

    return (
        <View>
            <Card>
                <CardSection >
                    <View style={styles.thumbnailContainer}> 
                        <Image  
                            style={styles.thumbnail}
                            source={{ uri: album.thumbnail_image }} 
                        />
                    </View>
                    <View style={styles.details}> 
                        <Text style={styles.title}> {album.title}</Text>
                        <Text>{album.artist}</Text>
                    </View>
                </CardSection>
                 <CardSection >
                        <Image  
                            style={styles.cover}
                            source={{ uri: album.image }} 
                        />
                </CardSection>
                 <CardSection >
                    <TouchableOpacity style={styles.button}>
                        <Button 
                            onPress={onButtonPress}
                            title="Buy Now"
                        />
                    </TouchableOpacity>
                </CardSection>
            </Card>
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
    thumbnailContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
    },
    thumbnail: {
        height: 50,
        width: 50,
    },
    cover: {
        height: 300,
        width: null,
        flex: 1,
    },
    details: {
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    title: {
        fontSize: 18
    },
	textStyle: {
		fontSize: 20,
	},
    button: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5,
    },

});

export default AlbumDetail;
