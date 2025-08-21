import { Text, ScrollView, TouchableOpacity,View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
export const Category = ({ categories }) => {
  const navigation = useNavigation();
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
        // width: "100%",
      }}
      horizontal
      showsHorizontalScrollIndicator={true}
    >
      {categories.map((item,idx) => (
        
          <TouchableOpacity
          key={idx}
            className="size-20 border-2 bg-red-800"
            onPress={() => navigation.navigate("CategoryView",{categoryName:item})}
          >
            <View>
              <Text>{item}</Text>
              </View>
          </TouchableOpacity>
        
      ))}
    </ScrollView>
  );
};
