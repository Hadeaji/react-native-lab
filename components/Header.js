import { View, Text, StyleSheet } from "react-native";

export default function LittleLemonHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>GeoAlarm</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F4CE14",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    padding: 12,
    fontSize: 30,
    fontWeight: "600",
    color: "black",
  },
});
