import Data from '../assets/ass2data.json';
import Contact from './Contact.js';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Contacts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {data: Data};
        console.log(this.state.data);
    }

    render() {
        const sorted = this.state.data.sort(function(a, b){
            if(a.name.first_name < b.name.first_name) return -1;
            if(a.name.first_name > b.name.first_name) return 1;
            return 0;
        });
        const fields = sorted.map((item, i) =>
            <Text key={i}> {item.name.first_name}</Text>
        );
        console.log(sorted);
        return (
            <View>
                {fields}
            </View>
        );
    }
}

export default Contacts;
