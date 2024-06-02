import { View, Text, StyleSheet, ScrollView, ImageBackground } from 'react-native'
import React from 'react'

const categories = [
    {
        category: 'Exercise',
        noOfTasks: '12 Tasks',
        image: require('../assets/icons8-exercise-48.png')
    },
    {
        category: 'Cook',
        noOfTasks: '8 Tasks',
        image: require('../assets/icons8-chef-48.png')
    },
    {
        category: 'Code',
        noOfTasks: '10 Tasks',
        image: require('../assets/icons8-code-64.png')
    },
    {
        category: 'Sleep',
        noOfTasks: '2 Tasks',
        image: require('../assets/icons8-sleep-48.png')
    },
    {
        category: 'Study',
        noOfTasks: '15 Tasks',
        image: require('../assets/icons8-study-100.png')
    },
    {
        category: 'Write',
        noOfTasks: '3 Tasks',
        image: require('../assets/icons8-write-100.png')
    },
    {
        category: 'Work',
        noOfTasks: '3 Tasks',
        image: require('../assets/icons8-trade-64.png')
    },
    {
        category: 'Clean',
        noOfTasks: '3 Tasks',
        image: require('../assets/icons8-clean-48.png')
    },
    {
        category: 'Birthday Reminder',
        noOfTasks: '3 Tasks',
        image: require('../assets/icons8-edit-calendar-48.png')
    },
    {
        category: 'Leisure',
        noOfTasks: '3 Tasks',
        image: require('../assets/icons8-snorkel-64.png')
    },
]



export default function Categories() {
  return (
    <View style = {{marginTop: 20}}>
        <Text style = {{fontSize: 28, fontWeight: 600}}>Categories</Text>
        <View style = {styles.allCats}>
            <ScrollView horizontal = {true} showsHorizontalScrollIndicator = {false}>
                {categories.map((category, index) => (
                    
                     <View key = {index} style = {styles.Cats}>
                            <Text style = {{fontSize: '20', fontWeight: 500}}>{category.category}</Text>
                            <Text style = {{fontSize: '15', fontWeight: 500}}>{category.noOfTasks}</Text>
                            <ImageBackground source={category.image} style = {{width: '80%', height: '80%', alignSelf:'center'}}></ImageBackground>
                    </View>
                ))}
            </ScrollView>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    allCats : {
        flexDirection: 'row',
        marginTop: 10,

    },

    Cats : {
        backgroundColor: '#fff',
        width: 200,
        height: 200,
        marginRight: 20,
        borderRadius: 15,
        paddingLeft: 20,
        paddingTop: 20,
        
    }
})