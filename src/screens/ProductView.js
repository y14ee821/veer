import { View, Text, Image, Platform, StyleSheet,ScrollView } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { getProductData } from "../services";
import { useEffect, useState } from "react";
import Carousel from "react-native-reanimated-carousel";
import {
  Button,
  ButtonText,
  ButtonSpinner,
  ButtonIcon,
  ButtonGroup,
} from "@/components/ui/button";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Icon from "react-native-vector-icons/FontAwesome";
export const ProductView = () => {
  const [product, setProduct] = useState({ status: null, data: {} });
  const [images, setImages] = useState([]);

  const navigation = useNavigation();

  const route = useRoute();
  const { id } = route.params;
  useEffect(() => {
    navigation.setOptions({ title: product.data.name || "Product Details" });
  }, [navigation]);
  useEffect(() => {
    // This will be used to fetch the product data based on the product ID
    getProductData(id).then((response) => {
      setProduct({ status: response.status, data: response.data });

      setImages(response.data.images || []);
    });
  }, []);
  const styles = StyleSheet.create({
    slide: { justifyContent: "center", alignItems: "center" },
    image: { width: 300, height: 300, resizeMode: "cover" },
  });

  return (
    <ScrollView>
      {product.status && (
        <View
          className={`flex p-2 ${
            Platform.OS === "web" ? "flex-row items-center" : ""
          }`}
        >
          <View
            className={`border border-gray-200 rounded-lg  bg-white ${
              Platform.OS === "web" ? "w-[400px] h-[400px]" : ""
            }`}
          >
            <Carousel
              width={400}
              height={300}
              loop
              autoPlay
              data={images}
              renderItem={({ item }) => (
                <View style={styles.slide}>
                  <Image source={{ uri: item }} style={styles.image} />
                </View>
              )}
            />
          </View>

          <View className="border border-gray-200 rounded-lg bg-white p-2 mt-2">
            <View className="flex flex-row items-center">
              <Text className="font-bold text-lg mt-2">
                {product.data.title }
              </Text>
              {product.data.brand != undefined && (
                <Text className="font-bold text-md mt-2">
                   {" | "} {product.data.brand}
                </Text>
              )}
              
            </View>
            {product.data.description && <Text className="text-gray-500">{product.data.description}</Text>                          }   
            <View className=" rounded-md flex flex-row mt-2  items-center">
              <View className=" bg-green-600 rounded-md flex flex-row w-[35px] h-[22px] justify-center items-center mt-1">
                <Text
                  className=" text-center  text-[12px] text-white font-semibold"
                  style={{ flexWrap: "wrap" }}
                >
                  <Icon name="star" size={12} color="white" />
                  {product.data.rating ? product.data.rating.toFixed(1) : "0.0"}
                </Text>
              </View>
              <Text className="text-blue-400 mx-2">
                {product.data.reviews.length || 0} Ratings
              </Text>
            </View>

            <View className="  rounded-lg min-h-6 flex flex-row mt-2">
              <View className="flex flex-row items-center mr-2">
                <MaterialIcons name="arrow-downward" size={28} color="green" />
                <Text className=" text-green-700 text-[20px]  ">
                  {product.data.discountPercentage
                    ? product.data.discountPercentage.toFixed(1)
                    : "0.0"}
                  %
                </Text>
              </View>
              <Text className="text-gray-400 line-through text-[20px] mx-2">
                ₹
                {Math.round(
                  (100 / (100 - product.data.discountPercentage)) *
                    product.data.price
                )}
              </Text>
              <Text
                className="font-bold mx-2 text-[20px]"
                style={{ flexWrap: "wrap" }}
              >
                ₹{Math.round(product.data.price)}
              </Text>
              
              
            </View>
            {
            product.data.availabilityStatus === "In Stock"?
            <Text className="text-gray-500 mt-2">
              In Stock: <Text style={{ color: 'green' }}>{product.data.stock}</Text>
              , {product.data.shippingInformation}, Free Shipping <Icon name="truck" size={16} color="blue" /> 
  
            </Text>:<Text>Out Of Stock</Text>
            }
          </View>

          <View className="fixed bottom-0  bg-white  mt-2 p-1 rounded-lg border-t border-gray-200">
          <View className="flex flex-row bg-white justify-between items-center">
            <Button className="bg-primary-500 hover:bg-primary-600    w-1/2 ">
              <ButtonText className="text-blue-400">
                Add To Cart
              </ButtonText>
            </Button>
            <Button className=" bg-yellow-400   w-1/2">
              <ButtonText className="">
                Buy Now
              </ButtonText>
            </Button>            
          </View>
            </View>


        </View>
      )}
    </ScrollView>
  );
};
