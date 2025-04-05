import React, { useContext } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from "react-native";
import { AppContext } from "../Context/AppContext";
import { Ionicons } from "@expo/vector-icons";

export default function Cart() {
  const { cart, increaseQty, decreaseQty, removeFromCart } = useContext(AppContext);

  const total = cart
    .reduce((sum: number, item: any) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image source={{ uri: item.image }} style={{ width: 60, height: 60, marginBottom: 5 }} />

            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.qtyContainer}>
              <TouchableOpacity onPress={() => decreaseQty(item.id)}>
                <Ionicons name="remove-circle-outline" size={24} color="black" />
              </TouchableOpacity>
              <Text style={styles.qtyText}>{item.quantity}</Text>
              <TouchableOpacity onPress={() => increaseQty(item.id)}>
                <Ionicons name="add-circle-outline" size={24} color="black" />
              </TouchableOpacity>
            </View>
            <Text>Total: ${(item.price * item.quantity).toFixed(2)}</Text>
            <TouchableOpacity onPress={() => removeFromCart(item.id)}>
              <Ionicons name="trash-outline" size={24} color="red" />
            </TouchableOpacity>
          </View>
        )}
      />
      <Text style={styles.total}>Total Cart Amount: ${total}</Text>
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
  },
  title: { fontWeight: "bold", marginBottom: 5 },
  qtyContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    gap: 10,
  },
  qtyText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  total: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 20,
  },
});
