import { StyleSheet, Text, View } from 'react-native';
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";

import MovieApp  from './components/MovieApp';
import MovieCard from './components/MovieCard';

export default function App() {
  return (                                                                                                                                                                                                                                               
    <SafeAreaProvider>
    <SafeAreaView>
    <View style={styles.container}>

      <Text style={styles.title}>
      <MovieApp />
 
      </Text>
    
    </View>
    </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  title: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
