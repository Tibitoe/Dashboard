import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Fetchar top 10 kryptovalutor
export const fetchCryptoData = createAsyncThunk(
  "crypto/fetchCryptoData",
  async () => {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets",
      {
        params: {
          vs_currency: "usd",
          order: "market_cap_desc",
          per_page: 10,
          page: 1,
          sparkline: false,
        },
      }
    );
    return response.data;
  }
);

// Fetchar historiska Bitcoin-priser baserat på tidsperiod
export const fetchBitcoinHistory = createAsyncThunk(
  "crypto/fetchBitcoinHistory",
  async (days) => {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart`,
      {
        params: {
          vs_currency: "usd",
          days: days,
          interval: days === 1 ? "hourly" : "daily",
        },
      }
    );

    return response.data.prices.map((entry) => ({
      date: new Date(entry[0]).toLocaleDateString(),
      price: parseFloat(entry[1].toFixed(2)),
    }));
  }
);

const cryptoSlice = createSlice({
  name: "crypto",
  initialState: {
    data: [],
    bitcoinHistory: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCryptoData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCryptoData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchCryptoData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchBitcoinHistory.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBitcoinHistory.fulfilled, (state, action) => {
        state.loading = false;
        state.bitcoinHistory = action.payload;
      })
      .addCase(fetchBitcoinHistory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default cryptoSlice.reducer;
