import Data from "../assets/ass2data.json";
import Contact from "./Contact.js";
import React from "react";
import { StyleSheet, Text, View, SectionList } from "react-native";

class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Data,
      ArrArr: []
    };
    console.log(this.state.data);
  }

  render() {
    const sorted = this.state.data.sort(function(a, b) {
      if (a.name.first_name < b.name.first_name) return -1;
      if (a.name.first_name > b.name.first_name) return 1;
      return 0;
    });

    const doubleArr = sorted.reduce((acc, info) => {
      const firstletter = info.name.first_name[0];
      if (!acc[firstletter]) {
        acc[firstletter] = [];
      }
      acc[firstletter].push(info.name.first_name);
      return acc;
    });

    let sectionArr = [];
    for (let key in doubleArr) {
      sectionArr.push({ title: key, data: doubleArr[key] });
    }

    console.log(sectionArr);
    return (
      <SectionList
        renderItem={({ item, index, section }) => (
          <Text key={index}>{item}</Text>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={{ fontWeight: "bold" }}>{title}</Text>
        )}
        sections={sectionArr}
        keyExtractor={(item, index) => item + index}
      />
    );
  }
}

export default Contacts;
