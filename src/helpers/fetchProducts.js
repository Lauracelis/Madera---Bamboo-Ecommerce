import { productsApi } from "../api/productsApi";

export const fetchProducts = async () => {
  const resp = await productsApi.get();
  const { data } = resp;
  return data.products;
};


