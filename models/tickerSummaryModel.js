import mongoose from "mongoose";

const tickerSummarySchema = mongoose.Schema(
  {
    ticker: {
      type: String,
      required: true,
    },
    summaryCompany: {
      type: String,
      required: true,
    },
    summaryPredict: {
      type: String,
      required: true,
    },
    createAt: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const TickerSummary = mongoose.model("TickerSummary", tickerSummarySchema);
