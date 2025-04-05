import React, { useContext } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from "react-native";
import { AppContext } from "../Context/AppContext";
import { Ionicons } from "@expo/vector-icons";

export default function Wishlist() {
  const { wishlist, removeFromWishlist } = useContext(AppContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={wishlist}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image source={{ uri: item.image }} style={{ width: 60, height: 60, marginBottom: 5 }} />
            <Text style={styles.title}>{item.title}</Text>
            <TouchableOpacity onPress={() => removeFromWishlist(item.id)}>
              <Ionicons name="trash-outline" size={24} color="red" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1 },
  item: {
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: { fontWeight: "bold", flex: 1 },
});
