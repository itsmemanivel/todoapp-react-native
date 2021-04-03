/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
// import  from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  // Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { Container, Header, Fab, Title, Content, Body,  Icon } from 'native-base';

import AddToDo from './add_todo_list';
import AddToDoButton from './add_todo_button';
import { Provider as PaperProvider } from 'react-native-paper';


class App extends React.Component {
  render() {    
    return (
      <SafeAreaView style={{ flex:1, alignItems: 'center'}} >
        <ScrollView 
        contentInsetAdjustmentBehavior="automatic" style={{backgroundColor: '#fff', width: "100%"}}>
           <Header><Body><Title>Growcify TODO</Title></Body></Header>
           <View>
             <AddToDo />
             <AddToDo />
             <AddToDo />
           </View>
       </ScrollView>
       <AddToDoButton  style={styles.floatinBtn} />           
      </SafeAreaView>
    );
  }
}



const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  floatinBtn: {

    position: 'absolute',
    alignSelf: 'center',
    // right: 10,
  }
});


export default function Main(){
  return(
    <PaperProvider>
      <App />
    </PaperProvider>
  )
};
