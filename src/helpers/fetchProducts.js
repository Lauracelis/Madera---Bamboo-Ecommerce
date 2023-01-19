import { productsApi } from "../api/productsApi";

const fetchProducts = async () => {
  const resp = await productsApi.get();
  const { data } = resp;
  return data;
};

export default fetchProducts;
