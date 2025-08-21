import { View, Text, TouchableOpacity, Image, Platform } from "react-native";
import React from "react";
import {
  Button,
  ButtonText,
  ButtonSpinner,
  ButtonIcon,
  ButtonGroup,
} from "@/components/ui/button";
import { useNavigation } from '@react-navigation/native';
import Icon from "react-native-vector-icons/FontAwesome";

// import { Button, ButtonText, Heading } from "@gluestack-ui/button"
export const ProductsOfCategory = ({ products }) => {
  const navigation = useNavigation();
  return (
    <View className="flex flex-row flex-wrap justify-center bg-white">
      {products.map((item, idx) => (
        <TouchableOpacity
          onPress={() => navigation.navigate("ProductView",{id:item.id})}
          key={idx}
          className={`flex justify-center items-center border border-gray-100 bg-white rounded-lg p-2 m-2 overflow-hidden shadow-md ${
            Platform.OS == "web" ? "flex-row w-[15%]" : "w-[44%]"
          }`}
          style={Platform.OS === "web" ? { minWidth: 200, maxWidth: 300 } : {}}
        >
          <View className="w-full m-auto">
            <View>
              <Image
                className="  top-0 "
                style={Platform.OS === "web" ?{ height: 200, width: 200 }:{ height: 180, width: 150 }}
                source={{
                  uri: item["thumbnail"],
                }}
              />
              <View className="absolute top-0 bg-blue-700 w-10 rounded-tl-lg min-h-6 flex justify-center items-center ">
                <Text className="text-white text-center text-[10px] ">
                  {item.discountPercentage
                    ? item.discountPercentage.toFixed(1)
                    : "0.0"}
                  % Off
                </Text>
              </View>
            </View>
            <View className="border-t border-gray-300 mt-1 ">
              <Text
                className="w-full mt-1 font-bold"
                numberOfLines={1}
                ellipsizeMode="tail"
                style={{ maxWidth: "100%", flexWrap: "wrap" }}
              >
                {item.title} 
              </Text>

                {item.brand &&  <Text
                className="w-full mt-1 font-semibold"
                numberOfLines={1}
                ellipsizeMode="tail"
                style={{ maxWidth: "100%", flexWrap: "wrap" }}
              >
                 {item.brand}
              </Text>}
              <Text className="text-gray-400 my-1" style={{ flexWrap: "wrap" }}>
                {item.stock || 0}pc
              </Text>

              <View className=" rounded-md flex flex-row mt-1">
                <View className=" bg-green-600 rounded-md flex flex-row w-[35px] h-[22px] justify-center items-center ">
                  <Text
                    className=" text-center  text-[12px] text-white font-semibold"
                    style={{ flexWrap: "wrap" }}
                  >
                    <Icon name="star" size={12} color="white" />
                    {item.rating ? item.rating.toFixed(1) : "0.0"}
                  </Text>
                </View>
                <Text className="text-gray-400">
                  ({item.reviews.length || 0})
                </Text>
              </View>
            </View>
          <View className=" bottom-0 w-full mt-1 space-y-1">
            <Text className="text-gray-400 line-through">₹: {Math.round((100/(100-item.discountPercentage))*item.price)}</Text>
            <Text className="font-bold" style={{ flexWrap: "wrap" }}>₹: {Math.round(item.price)}</Text>
            <Button className="bg-primary-500 hover:bg-primary-600 border border-red-400 rounded-lg w-full">
              <ButtonText className="text-red-400">
                Add To Cart
              </ButtonText>
            </Button>
          </View>            
          </View>

        </TouchableOpacity>
      ))}
    </View>
  );
};
