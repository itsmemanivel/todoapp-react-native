import React from 'react';
import { Container, Fab, Icon } from 'native-base';
import { Portal } from 'react-native-paper';
import  { NewTodo } from './App';

export default class AddToDoButton extends React.Component{
    render(){
        return(
                <Fab
                    style={{ backgroundColor: '#5067FF'}}
                    onPress={() => console.log('New TODO!!!') }>    
                        <Icon name="add" />
                </Fab>
        );
    }
}