import React from 'react';
import { StyleSheet,Text,View} from 'react-native';


export default function Output(props) {
    return(
        <View>
            <View style ={styles.view}>
                <Text style = {styles.text12}> Вы ввели:</Text>
                <Text style = {styles.text123}> {props.A} x^2 + {props.B} x + {props.C}=0 </Text>
                <Text style = {styles.text1}> Ответ:</Text>
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    view:{
        marginTop:'5%',
        justifyContent: 'center',
        marginLeft: '30%'
    },
    text1:{
        color: '#51fa22',
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 24,
        marginTop:'5%'

    },
    text12:{
        color: '#8f06a5',
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 24
    },
    text123:{
        color: '#000000',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 24
    }
});