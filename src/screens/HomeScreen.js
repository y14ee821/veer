import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
} from "react-native";


import { HorizontalScroller } from "../components/utils/HorizontalScroller";

import React, { useLayoutEffect, useState } from "react";
import { getCategoryList } from "../services";
import { useNavigation } from "@react-navigation/native";
import { Hero, Category } from "../components";
import Carousel from "react-native-reanimated-carousel";
export const HomeScreen = () => {
  const navigation = useNavigation();
  const [categories, setCategories] = useState([]);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });

    getCategoryList().then((response) => setCategories(response.data));
  }, []);
  // const categories = [
  //   "electronics",
  //   "mens-shirts",
  //   "beauty",
  //   "Sports",
  //   "furniture",
  //   // ...more
  // ];

  const featuredProducts = [
    { id: 1, name: "Smartphone", price: "₹19,999", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=100&q=80" },
    { id: 2, name: "T-Shirt", price: "₹499", image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=100&q=80" },
    { id: 3, name: "Shoes", price: "₹2,499", image: "https://images.unsplash.com/photo-1526178613658-3f1622045557?auto=format&fit=crop&w=100&q=80" },
    { id: 4, name: "Watch", price: "₹3,999", image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=100&q=80" },
        { id: 1, name: "Smartphone", price: "₹19,999", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=100&q=80" },
    { id: 2, name: "T-Shirt", price: "₹499", image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=100&q=80" },
    { id: 3, name: "Shoes", price: "₹2,499", image: "https://images.unsplash.com/photo-1526178613658-3f1622045557?auto=format&fit=crop&w=100&q=80" },
    { id: 4, name: "Watch", price: "₹3,999", image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=100&q=80" },
        { id: 1, name: "Smartphone", price: "₹19,999", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=100&q=80" },
    { id: 2, name: "T-Shirt", price: "₹499", image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=100&q=80" },
    { id: 3, name: "Shoes", price: "₹2,499", image: "https://images.unsplash.com/photo-1526178613658-3f1622045557?auto=format&fit=crop&w=100&q=80" },
    { id: 4, name: "Watch", price: "₹3,999", image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=100&q=80" },
  ];

  const deals = [
    { id: 1, name: "Headphones", price: "₹999", image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=100&q=80", oldPrice: "₹1,999" },
    { id: 2, name: "Backpack", price: "₹799", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=100&q=80", oldPrice: "₹1,299" },
        { id: 1, name: "Headphones", price: "₹999", image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=100&q=80", oldPrice: "₹1,999" },
    { id: 2, name: "Backpack", price: "₹799", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=100&q=80", oldPrice: "₹1,299" },
        { id: 1, name: "Headphones", price: "₹999", image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=100&q=80", oldPrice: "₹1,999" },
    { id: 2, name: "Backpack", price: "₹799", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=100&q=80", oldPrice: "₹1,299" },
        { id: 1, name: "Headphones", price: "₹999", image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=100&q=80", oldPrice: "₹1,999" },
    { id: 2, name: "Backpack", price: "₹799", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=100&q=80", oldPrice: "₹1,299" },
     { id: 1, name: "Headphones", price: "₹999", image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=100&q=80", oldPrice: "₹1,999" },
    { id: 2, name: "Backpack", price: "₹799", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=100&q=80", oldPrice: "₹1,299" },
        { id: 1, name: "Headphones", price: "₹999", image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=100&q=80", oldPrice: "₹1,999" },
    { id: 2, name: "Backpack", price: "₹799", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=100&q=80", oldPrice: "₹1,299" },
        { id: 1, name: "Headphones", price: "₹999", image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=100&q=80", oldPrice: "₹1,999" },
    { id: 2, name: "Backpack", price: "₹799", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=100&q=80", oldPrice: "₹1,299" },
        { id: 1, name: "Headphones", price: "₹999", image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=100&q=80", oldPrice: "₹1,999" },
    { id: 2, name: "Backpack", price: "₹799", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=100&q=80", oldPrice: "₹1,299" },
  ];



  return (
    // <ScrollView className="bg-green-800">
    // <SafeAreaView>
    //   <View className="bg-white">
    //     <View className="bg-white p-3 rounded-b-xl  border-2 border-gray-300">
    //       <Text className="text-red-500 font-bold text-xs">Deliver Now!</Text>
    //     </View>

    //     <ScrollView>
    //       <Hero />
    //     </ScrollView>

    //     <View>
    //       <Category categories={categories} />
    //     </View>
    //   </View>
    // </SafeAreaView>



    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header} className="flex">
        {/* <Image source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/0/05/Flipkart_logo.png" }} style={styles.logo} /> */}
        <Text className="text-white font-bold p-2 mr-1 bg-green-400 rounded-lg">Veer</Text>
        <TextInput
          style={styles.search}
          placeholder="Search for products, brands and more"
          placeholderTextColor="#888"
        />
        <TouchableOpacity style={styles.cartBtn}>
          <Text style={{ fontSize: 22 }}>🛒</Text>
        </TouchableOpacity>
      </View>

      {/* Banner/Carousel */}
      <ScrollView horizontal showsHorizontalScrollIndicator={true} style={styles.bannerScroll}>
        <Image source={{ uri: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" }} style={styles.banner} />
        <Image source={{ uri: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80" }} style={styles.banner} />
        <Image source={{ uri: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80" }} style={styles.banner} />
        <Image source={{ uri: "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=800&q=80" }} style={styles.banner} />
      </ScrollView>

      {/* Categories */}
      
      <View style={styles.categorySection}>
        <Text style={styles.sectionTitle}>Shop by Category</Text>
        <Category categories={categories} />
      </View>

      {/* Featured Products */}
      <Text style={styles.sectionTitle}>Featured Products</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={true} style={styles.productScroll}>
        {featuredProducts.map(product => (
          <View key={product.id} style={styles.productCard}>
            <Image source={{ uri: product.image }} style={styles.productImg} />
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.productPrice}>{product.price}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Deals of the Day */}
      <Text style={styles.sectionTitle}>Deals of the Day</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={true} style={styles.productScroll}>
        {deals.map(deal => (
          <View key={deal.id} style={styles.dealCard}>
            <Image source={{ uri: deal.image }} style={styles.productImg} />
            <Text style={styles.productName}>{deal.name}</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.productPrice}>{deal.price}</Text>
              <Text style={styles.oldPrice}>{deal.oldPrice}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
<Text style={styles.sectionTitle}>Deals of the Day</Text>
<HorizontalScroller itemWidth={120} style={{ marginHorizontal: 10, marginBottom: 10 }}>
  {deals.map(deal => (
    <View key={deal.id} style={styles.dealCard}>
      <Image source={{ uri: deal.image }} style={styles.productImg} />
      <Text style={styles.productName}>{deal.name}</Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={styles.productPrice}>{deal.price}</Text>
        <Text style={styles.oldPrice}>{deal.oldPrice}</Text>
      </View>
    </View>
  ))}
</HorizontalScroller>
      {/* Footer */}
      <View style={styles.footer}>
        <Text style={{ color: "#888", fontSize: 13 }}>© 2025 Veer E-Commerce. All rights reserved.</Text>
      </View>
    </ScrollView>
    // </ScrollView>
  );
};


const styles = StyleSheet.create({
  slide: { justifyContent: "center", alignItems: "center" },
  image: { width: 300, height: 300, resizeMode: "cover" },
  categorySection: {
    backgroundColor: "#fff",
    borderRadius: 16,
    marginHorizontal: 10,
    marginBottom: 10,
    paddingVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 3,
    elevation: 1,
  },
  container: { backgroundColor: "#f6f7fb", flex: 1, marginVertical:30 },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    margin: 10,
    borderRadius: 15,
    backgroundColor: "#2874f0",
  },
  logo: { width: 90, height: 32, resizeMode: "contain", marginRight: 10 },
  search: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 36,
    fontSize: 15,
    marginRight: 10,
  },
  cartBtn: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  bannerScroll: { marginVertical: 12 },
  banner: {
    width: 350,
    height: 120,
    borderRadius: 14,
    marginHorizontal: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginLeft: 16,
    marginTop: 18,
    marginBottom: 8,
    color: "#222",
  },
  productScroll: { 
       backgroundColor: "#fff",
    borderRadius: 16,
    marginHorizontal: 10,
    marginBottom: 10,
    paddingVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 3,
    elevation: 1,
  },
  productCard: {
    width: 120,
    backgroundColor: "#fff",
    borderRadius: 14,
    marginRight: 12,
    alignItems: "center",
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.09,
    shadowRadius: 4,
    elevation: 2,
  },
  dealCard: {
    width: 120,
    backgroundColor: "#fff",
    borderRadius: 14,
    marginRight: 12,
    alignItems: "center",
    padding: 10,
    borderWidth: 2,
    borderColor: "#ff9800",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.09,
    shadowRadius: 4,
    elevation: 2,
  },
  productImg: { width: 80, height: 80, borderRadius: 10, marginBottom: 8 },
  productName: { fontSize: 15, fontWeight: "500", color: "#222", marginBottom: 2, textAlign: "center" },
  productPrice: { fontSize: 15, fontWeight: "700", color: "#2874f0" },
  oldPrice: { fontSize: 13, color: "#888", textDecorationLine: "line-through", marginLeft: 6 },
  footer: {
    alignItems: "center",
    padding: 18,
    marginTop: 18,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
});