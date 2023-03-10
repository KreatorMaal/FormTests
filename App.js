
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import Navigation from './navigation/HomeStack';

export default function App() {
  return (
    <SafeAreaView style={styles.root}>
    <Navigation />
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
