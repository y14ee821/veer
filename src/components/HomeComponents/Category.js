import { Text, ScrollView, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { HorizontalScroller } from "../utils/HorizontalScroller";
const categoryIcons = {
  electronics: "💻",
  "mens-shirts": "👗",
  beauty: "💄",
  Sports: "🏀",
  furniture: "🏠",
  // Add more mappings as needed
};

export const Category = ({ categories }) => {
  const navigation = useNavigation();
  return (
    <HorizontalScroller itemWidth={120} style={{ marginHorizontal: 10, marginBottom: 10 }}

      contentContainerStyle={{
        paddingHorizontal: 16,
        paddingTop: 18,
        paddingBottom:18,
        gap: 14,
      }}
      horizontal
      showsHorizontalScrollIndicator={true}
    >
      {categories.map((item, idx) => (
        <TouchableOpacity
          key={idx}
          style={{
            width: 90,
            height: 110,
            backgroundColor: "#fff",
            borderRadius: 18,
            marginRight: 10,
            marginBottom: 10,
            marginTop: 10,
            alignItems: "center",
            justifyContent: "center",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.12,
            shadowRadius: 6,
            elevation: 4,
          }}
          activeOpacity={0.8}
          onPress={() =>
            navigation.navigate("CategoryView", { categoryName: item })
          }
        >
          <View
            style={{
              backgroundColor: "#f3f4f6",
              borderRadius: 999,
              width: 48,
              height: 48,
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 10,
            }}
          >
            <Text style={{ fontSize: 28 }}>
              {categoryIcons[item] || "🛒"}
            </Text>
          </View>
          <Text
            style={{
              fontWeight: "600",
              fontSize: 15,
              color: "#222",
              textAlign: "center",
            }}
            numberOfLines={2}
          >
            {item}
          </Text>
        </TouchableOpacity>
      ))}
    </HorizontalScroller>
  );
};
