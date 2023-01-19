import axios from "axios";

export const productsApi= axios.create({
    baseURL: "src/data/dataBase.json"
})