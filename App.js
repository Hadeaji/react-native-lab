// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MenuItems from "./components/MenuItems";
// import Home from "./pages/Home";


export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Header />
        {/* <Text>Open up App.js to start working on your app!</Text> */}
        {/* <StatusBar style="auto" animated /> */}
        {/* <Home /> */}
        <MenuItems />
      </View>
      <View>
        <Footer />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#495E57",
  },
});
