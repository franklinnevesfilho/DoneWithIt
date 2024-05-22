import { StyleSheet, Text, View } from 'react-native';
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import MessagesScreen from "./app/screens/MessagesScreen";

export default function App() {
  return (
      <MessagesScreen />
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f8f4f4',
        padding: 20,
        paddingTop: 100,
    },
});

