import { StyleSheet, Text, View } from "react-native";

export default function Footer() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        All rights reserved by DevTerminal, {new Date().getFullYear()}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F4CE14",
  },
  text: {
    fontSize: 18,
    color: "black",
    textAlign: "center",
  },
});
