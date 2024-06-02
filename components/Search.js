import { View, Text, TextInput, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function Search() {
  return (
    <View style = {{flexDirection: 'row',alignItems: 'center', justifyContent: 'space-between'}}>
      <View style = {{flexDirection: 'row', backgroundColor: '#fff', alignItems: 'center', paddingLeft: 12, borderRadius: 15}}>
        <Image source={require('../assets/icons8-search-50.png')} style ={styles.magnify}/>
        <TextInput style = {styles.search} placeholder='Search'/>
      </View>
      <Image 
        source = {require('../assets/icons8-filter-100.png')}
        style = {styles.filter}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  search : {
    backgroundColor: '#fff',
    paddingTop: 18,
    paddingBottom: 18,
    paddingLeft: 18,
    borderRadius: 12,
    width: '70%',
    
  },

  filter : {
    width: 20,
    height: 20,
    backgroundColor: '#f54f2d',
    borderRadius: 8,
    padding: 23
  },
  magnify : {
    width: 20,
    height: 20,
    padding: 15,

  }
})