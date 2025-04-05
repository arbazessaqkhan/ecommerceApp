import { useRouter } from "expo-router";
import { Text, Image, Pressable, StyleSheet, View } from "react-native";

export default function ProductCard({ product }: any) {
  const router = useRouter();

  return (
    <Pressable style={styles.card} onPress={() => router.push(`/product/${product.id}`)}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text numberOfLines={2} style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 5,
    padding: 10,
    backgroundColor: "#f8f8f8",
    borderRadius: 8,
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    marginVertical: 5,
    textAlign: "center",
  },
  price: {
    fontSize: 14,
    color: "green",
  },
});
