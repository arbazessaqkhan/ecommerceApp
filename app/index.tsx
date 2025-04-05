import { useEffect, useContext } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { AppContext } from "../Context/AppContext";
import ProductCard from "../components/ProductCard";

export default function HomeScreen() {
  const { fetchProducts, products } = useContext(AppContext);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ProductCard product={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
