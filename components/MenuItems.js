import { View, Text, ScrollView } from "react-native";

const menuItemsToDisplay = [
  "Hummus\nMoutabal\nFalafel\nMarinated Olives\nKofta\nEggplant Salad\nLentil Burger\nSmoked Salmon\nKofta Burger\nTurkish Kebab\nFries\nButtered Rice\nBread Sticks\nPita Pocket\nLentil Soup\nGreek Salad\nRice Pilaf\nBaklava\nTartufo\nTiramisu\nPanna Cotta",
];

const MenuItems = () => {
  return (
    <View>
      <ScrollView
        indicatorStyle="white"
        style={{
          paddingHorizontal: 40,
          paddingVertical: 40,
          marginBottom: 70,
          backgroundColor: "black",
        }}
      >
        <Text style={{ color: "white", fontSize: 40, flexWrap: "wrap" }}>
          View Menu
        </Text>
        <Text style={{ color: "#F4CE14", fontSize: 36 }}>
          {menuItemsToDisplay[0]}
        </Text>
      </ScrollView>
    </View>
  );
};

export default MenuItems;
