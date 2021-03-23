import React from 'react'
import {StyleSheet,View, Text} from "react-native";

export const AppHeader = ({title}) => {

    return(
        <View style={styles.Head}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Head:{
        height: 70,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#9408a4',
        paddingBottom: 10
    },
    text: {
        color: 'white',
        fontSize: 20
    }
});