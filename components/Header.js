import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import {count, ongoing} from '../components/OnGoing';

export default function Header() {
  return (
    <View style = {styles.container}>
        <View>
            <Text style = {styles.bigText}>Hello , Devs</Text>
            <Text style = {styles.smallText}>{count(ongoing)} tasks today</Text> 
        </View>
        <View>
            <Image 
                source = {require('../assets/icons8-user-80.png')}
                style = {styles.userImage}
            />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
        marginBottom: 25,
        alignItems: 'center',
    },

    bigText : {
        fontSize : 40,
        fontWeight : '600',

    },
    smallText: {
        fontSize: 18,
    },
    
    userImage : {
        width: 50,
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 40,
    }
})