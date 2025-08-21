import axios from "axios";
export const getCategoryList = async () => {
  url = `${process.env.EXPO_PUBLIC_API_URL}/products/category-list`;
  try {
    const response = await axios.get(url);
    const { data, status } = response;
    return { data, status };
  } catch (error) {
    console.log(`Error - ${error}`);
    return { data: [], status: 500 };
  }
};

export const getProductsOfCategory = async (category) => {
  url = `${process.env.EXPO_PUBLIC_API_URL}/products/category/${category}`;

  try {
    const response = await axios.get(url);
    const { data, status } = response;
    return { data, status };
  } catch (error) {
    return { data: [], status: 500 };
  }
};

export const getProductData = async (productId) => {
  url = `${process.env.EXPO_PUBLIC_API_URL}/products/${productId}`;
  try {
    response = await axios.get(url);
    const { data, status } = response;
    return { data, status };
  } catch (error) {
    return { data: {}, status: 500 };
  }
};
