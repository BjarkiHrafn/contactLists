import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Image,
  Button,
  TouchableOpacity
} from "react-native";

import data from "./data";

const styles = StyleSheet.create({
  appContainer: {
    marginTop: 20,
    flex: 1,
    alignItems: "center"
  },
  imageStyle: {
    marginTop: 30,
    width: 200,
    height: 200,
    resizeMode: "cover",
    borderColor: "black",
    borderWidth: 1
  },
  infoContainer: {
    width: "90%",
    alignItems: "center"
  },
  text: {
    margin: 10,
    borderBottomColor: "black",
    borderBottomWidth: 2,
    textAlign: "center",
    width: "90%"
  },
  name: {
    margin: 10
  },
  button: {
    borderRadius: 20,
    paddingTop: 15,
    paddingBottom: 15,
    margin: 10
  }
});

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workInfo: false,
      info: "",
      person: data[0],
      buttonText: ""
    };

    this.infoAnimation = new Animated.Value(0);
  }

  componentDidMount() {
    Animated.timing(this.infoAnimation, {
      toValue: 1,
      duration: 1000
    }).start();
  }

  info = () => {
    if (this.state.workInfo) {
      return (
        <View style={styles.infoContainer}>
          <TouchableOpacity style={styles.button}>
            <Button onPress={this.onButtonPress} title={"show home info"} />
          </TouchableOpacity>
          <Animated.Text style={[styles.text, { opacity: this.infoAnimation }]}>
            {this.state.person.work.address}
          </Animated.Text>
          <Animated.Text style={[styles.text, { opacity: this.infoAnimation }]}>
            {this.state.person.work.email}
          </Animated.Text>
          <Animated.Text style={[styles.text, { opacity: this.infoAnimation }]}>
            {this.state.person.work.phone_number}
          </Animated.Text>
          <Animated.Text style={[styles.text, { opacity: this.infoAnimation }]}>
            {this.state.person.work.company}
          </Animated.Text>
          <Animated.Text style={[styles.text, { opacity: this.infoAnimation }]}>
            {`${this.state.person.work.department}, ${
              this.state.person.work.job_title
            }`}
          </Animated.Text>
        </View>
      );
    } else {
      return (
        <View style={styles.infoContainer}>
          <TouchableOpacity style={styles.button}>
            <Button onPress={this.onButtonPress} title={"show work info"} />
          </TouchableOpacity>
          <Animated.Text style={[styles.text, { opacity: this.infoAnimation }]}>
            {this.state.person.home.address}
          </Animated.Text>
          <Animated.Text style={[styles.text, { opacity: this.infoAnimation }]}>
            {this.state.person.home.email}
          </Animated.Text>
          <Animated.Text style={[styles.text, { opacity: this.infoAnimation }]}>
            {this.state.person.home.phone_number}
          </Animated.Text>
        </View>
      );
    }
  };

  onButtonPress = () => {
    this.infoAnimation.setValue(0);
    Animated.timing(this.infoAnimation, {
      toValue: 1,
      duration: 500
    }).start();
    this.setState({ workInfo: !this.state.workInfo });
  };

  render() {
    return (
      <View style={styles.appContainer}>
        <Image
          source={{ uri: this.state.person.avatar }}
          style={styles.imageStyle}
        />
        <Text style={styles.name}>{`${this.state.person.name.first_name} ${
          this.state.person.name.last_name
        }`}</Text>
        {this.info()}
        <Animated.Text style={[]} />
      </View>
    );
  }
}
