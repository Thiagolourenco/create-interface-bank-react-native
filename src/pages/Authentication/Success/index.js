import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';

export default function Success() {
  const navigation = useNavigation();

  function handleHomePage() {
    navigation.navigate('Home');
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Success!</Text>
      <Text style={styles.subTitle}>
        You have successfully registered in our app and start working in it.
      </Text>
      <View style={styles.viewGroupButton}>
        <RectButton style={styles.buttonStart} onPress={handleHomePage}>
          <Text style={styles.buttonStartText}>Start using</Text>
        </RectButton>
      </View>
    </SafeAreaView>
  );
}
