import React, { Component } from 'react';
import { View, Text } from 'react-native';
import api from '../services/api';

export default class Main extends Component {
    static navigationOptions = {
        title: "JSHunt"
    };
    
    componentDidMount(){
        this.loadProducts();
    }

    loadProducts = () => {
        
    };
    render (){
        return (
            <View>
                <Text>Página Main</Text>
            </View>
        );
    }
}