import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import Profile from './Profile';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      data: 'String',
    };
  }

  onChangeValue = (x) => {
    this.setState({data: x * 10});
  };

  render() {
    return (
      <View style={styles.container}>
        <Profile data="hello world" />
        <TextInput
          testID={'username'}
          style={{height: 40, backgroundColor: 'grey'}}
          placeHolder="Enter Username"
          onChangeText={(value) => this.onChangeValue(value)}
        />
        <TextInput
          testID={'password'}
          style={{height: 40, backgroundColor: 'grey'}}
          placeHolder="Enter Password"
          onChangeText={(value) => this.onChangeValue(value)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
