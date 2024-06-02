import { Text, View, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import  Header  from './components/Header';
import  Search  from './components/Search';
import  Categories  from './components/Categories'
import  OnGoing  from './components/OnGoing';


export default function App() {
  return (
  
    <SafeAreaView style = {styles.main}>
      <View style = {{width: '90%', marginLeft: 'auto', marginRight: 'auto'}}>
        {/* Header */}
        <Header/>

        {/* Search */}
        <Search/>
        <ScrollView showsVerticalScrollIndicator = {false}>

          {/* Categories */}
          <Categories/>

          {/* OnGoing */}
          <OnGoing/>

        </ScrollView>
      </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  main : {
    flex: 1,
    backgroundColor: '#f7f0e8',
    width: '100%',
  }
})
