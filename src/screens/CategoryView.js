import {ScrollView, View, Text } from 'react-native'
import {useEffect,useState} from 'react'
import {getProductsOfCategory} from "../services"
import { useRoute,useNavigation } from '@react-navigation/native';

import { Spinner } from "@/components/ui/spinner"

import { ProductsOfCategory } from "../components"
export const CategoryView = () => {
  const navigation = useNavigation();

  const route = useRoute()
  const [products, setProducts] = useState({status:null, data:[]})
  const { categoryName } = route.params
  useEffect(()=>{
    navigation.setOptions({ title: categoryName });

  },[navigation])



  useEffect(()=>{

    getProductsOfCategory(categoryName).then(response=>
      {
        response.status==200?
        setProducts({status:200,data:response["data"]["products"]}):
        setProducts({status:response.status,data:[]})
      }
    )
  },[])
  return (
    <ScrollView className='bg-white'>
      {products.status!=null?(products.data.length!=0?<ProductsOfCategory products={products.data} />: <View><Text>No Matching Products Found</Text></View>):<View className='flex justify-center items-center top-1/2'><Text className='text-blue-700 font-semibold text-lg'>Fetching the Data...</Text><Spinner size="large" color="midnightBLue" /></View>}
    </ScrollView>
  )
}

