import axios from "axios";
import { AsyncStorage } from "react-native";

export default axios.create({
  baseURL: "https://api.nully.app",
  headers: {
    Authorization: `Bearer ${AsyncStorage.getItem("accessToken")}`,
  },
});
