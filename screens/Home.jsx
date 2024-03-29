import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Home({navigation}) {
  
  
    const onPressLearnMore = () => {
        navigation.navigate('EventScreen')
    }
  
  
    return (
    <View style={styles.container}>
      <Button
          onPress={onPressLearnMore}
          title="Formulaire"
          color="#00f"
          accessibilityLabel="Learn more about this purple button"
      />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  