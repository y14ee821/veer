import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { getCategoryList } from "../services";
import { useNavigation } from "@react-navigation/native";
import { Hero, Category } from "../components";
export const HomeScreen = () => {
  const navigation = useNavigation();
  const [categories, setCategories] = useState([]);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });

    getCategoryList().then((response) => setCategories(response.data));
  }, []);

  
  return (
    // <ScrollView className="bg-green-800">
    <SafeAreaView>
      <View className="bg-white">
        <View className="bg-white p-3 rounded-b-xl  border-2 border-gray-300">
          <Text className="text-red-500 font-bold text-xs">Deliver Now!</Text>
        </View>

        <ScrollView>
          <Hero />
        </ScrollView>

        <View>
          <Category categories={categories} />
        </View>
      </View>
    </SafeAreaView>
    // </ScrollView>
  );
};
