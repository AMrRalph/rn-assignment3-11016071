import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'

const ongoing = [
    {
        task: 'Mobile Development'
    },
    {
        task: 'Web Development'
    },
    {
        task: 'Push Ups'
    },
    {
        task: 'Painting'
    },
    {
        task: 'SAT Class'
    },
    {
        task: 'Cleaning'
    },
    {
        task: 'Analyze The Chart'
    },
    {
        task: 'Watch A Movie'
    },
    {
        task: 'Pick Children Up'
    },
    {
        task: 'Take My Medicine'
    },
    {
        task: 'Driving Lessons'
    },
    {
        task: 'Wish Mike'
    },
    {
        task: 'Call Christine'
    },
    {
        task: 'Mathematics Tutorials'
    },
    {
        task: 'Swimming'
    },

]

export const count = (tasks) => {
    return ongoing.length
}

export default function OnGoing() {
  return (

    <View style = {{marginTop: 20}}>
        <Text style = {{fontSize: 28, fontWeight: 600, marginBottom: 10}}>On Going</Text>
        <View style  ={styles.OnGoing}> 
            {ongoing.map((ongoing, index) => (
                <View key = {index} style = {styles.each}>
                    <Text style = {{fontSize: '22', fontWeight: 500}}>{ongoing.task}</Text>
                </View>
            ))}
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    OnGoing : {
    },
    each : {
        borderWidth: 2,
        borderColor: '#e8dcd0',
        backgroundColor: '#fff',
        height: 110,
        marginBottom: 15,
        borderRadius: 15,
        paddingLeft: 25,
        justifyContent: 'center',

    }
})