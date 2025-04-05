import { Tabs } from "expo-router";
import { AppProvider, AppContext } from "../Context/AppContext";
import { Ionicons } from "@expo/vector-icons";
import Toast from "react-native-toast-message";
import { View, Text } from "react-native";
import { useContext } from "react";

type RouteName = "index" | "cart" | "wishlist" | "product/[id]";

type TabBarIconProps = {
  color: string;
  size: number;
};

function TabBarIcon({
  routeName,
  color,
  size,
}: {
  routeName: RouteName;
  color: string;
  size: number;
}) {
  const { cart, wishlist } = useContext(AppContext);

  let iconName: keyof typeof Ionicons.glyphMap = "home";
  let count = 0;

  if (routeName === "cart") {
    iconName = "cart";
    count = cart.reduce((total: number, item: any) => total + item.quantity, 0);
  } else if (routeName === "wishlist") {
    iconName = "heart";
    count = wishlist.length;
  } else if (routeName === "index") {
    iconName = "home";
  }

  return (
    <View>
      <Ionicons name={iconName} size={size} color={color} />
      {count > 0 && (
        <View
          style={{
            position: "absolute",
            right: -6,
            top: -3,
            backgroundColor: "red",
            borderRadius: 8,
            width: 16,
            height: 16,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 10, fontWeight: "bold" }}>
            {count}
          </Text>
        </View>
      )}
    </View>
  );
}

export default function Layout() {
  return (
    <AppProvider>
      <>
        <Tabs
          screenOptions={({ route }: { route: { name: string } }) => ({

            tabBarIcon: ({ color, size }: TabBarIconProps) => (
              <TabBarIcon routeName={route.name as RouteName} color={color} size={size} />
            ),
            headerTitle:
              route.name === "index"
                ? "Home"
                : route.name.charAt(0).toUpperCase() + route.name.slice(1),
          })}
        >
          <Tabs.Screen name="index" />
          <Tabs.Screen name="cart" />
          <Tabs.Screen name="wishlist" />
          <Tabs.Screen
            name="product/[id]"
            options={{
              href: null,
              headerTitle: "Product Details",
            }}
          />
        </Tabs>
        <Toast />
      </>
    </AppProvider>
  );
}
