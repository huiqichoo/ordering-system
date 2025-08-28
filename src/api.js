import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000/api/v1"
});

export const getProducts = () => API.get("/products");
export const getProduct = (id) => API.get(`/products/${id}`);
export const createProduct = (data) => API.post("/createProduct", data);
export const updateProduct = (id, data) => API.put(`/products/${id}`, data);

export const getOrders = () => API.get("/orders");
export const getOrder = (id) => API.get(`/orders/${id}`);
export const createOrder = (data) => API.post("/createOrder", data);

export const getOrderDetails = () => API.get("/orderDetails");
export const getOrderDetail = (id) => API.get(`/orderDetails/${id}`);
export const createOrderDetail = (data) => API.post("/createOrderDetails", data);

export const getTables = () => API.get("/tables");
export const getTable = (id) => API.get(`/tables/${id}`);

export default API;
