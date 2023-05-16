import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../Lib/api";
const intitalState = {
  data: [],
};

const fetchInventory = () => createAsyncThunk("inventory/fetchData", () => {});
