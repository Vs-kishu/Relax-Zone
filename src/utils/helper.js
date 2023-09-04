import OpenAI from "openai";

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMBDAPI,
  },
};

export const openai = new OpenAI({
  apiKey: process.env.REACT_APP_APIKEY,
  dangerouslyAllowBrowser: true, // defaults to process.env["OPENAI_API_KEY"]
});
