import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {data: Data};
        console.log(this.state.data);
    }

    render() {
        return (
            <View>
                <Text>Contact</Text>
            </View>
        );
    }
}

export default Contact;
