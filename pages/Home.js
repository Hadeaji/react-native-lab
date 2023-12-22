import { View, Text, StyleSheet } from "react-native";

export default function WelcomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.header}>Welcome to Little Lemon</Text>
      <Text style={styles.sub}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear your experience with us!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 40,
    fontSize: 30,
    color: "#EDEFEE",
    textAlign: "center",
  },
  sub: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
  },
});
