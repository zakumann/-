import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const source ={url: 'https://via.placeholder.com/150'};

function Empty(){
    return (
        <View style={styles.block}>
            <Image
             source={{source}} 
             style={styles.image}
             resizeMode="center"
            />
            <Text style={styles.description}>야호! 할 일이 없습니다.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    block: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 300,
        height: 200,
        backgroundColor: 'gray',
    },
    description: {
        fontSize: 24,
        color: '#9e9e9e',
    },
});

export default Empty;