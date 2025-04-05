// app/product/[id].tsx
import { useLocalSearchParams } from "expo-router";
import { useContext } from "react";
import { View, Text, Image, Button, StyleSheet } from "react-native";
import { AppContext } from "../../Context/AppContext";
import Toast from "react-native-toast-message";
import {Product} from "../types/Product"
export default function ProductDetails() {
  const { id } = useLocalSearchParams();
  const { products, cart, wishlist, addToCart, addToWishlist } = useContext(AppContext);

  const product = products.find((p: Product) => p.id.toString() === id);
  if (!product) return <Text>Loading...</Text>;

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.desc}>{product.description}</Text>
      <Text style={styles.price}>${product.price}</Text>

      <View style={styles.buttonGroup}>
        <Button
          title={`Add to Cart (${cart.length})`}
          color="#4CAF50"
          onPress={() => {
            addToCart(product);
            Toast.show({ type: "success", text1: "Added to Cart!" });
          }}
        />
        <Button
          title={`Add to Wishlist (${wishlist.length})`}
          color="#2196F3"
          onPress={() => {
            addToWishlist(product);
            Toast.show({ type: "success", text1: "Added to Wishlist!" });
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  image: { width: "100%", height: 200, resizeMode: "contain", marginBottom: 10 },
  title: { fontSize: 18, fontWeight: "bold" },
  desc: { marginVertical: 10 },
  price: { fontSize: 16, fontWeight: "600", marginBottom: 10 },
  buttonGroup: { marginTop: 10, gap: 10 },
});
