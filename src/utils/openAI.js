import OpenAI from "openai";
import { DEEP_SEEK_API_KEY, OPEN_AI_KEY } from "./constants";

const openAI = new OpenAI({
  baseURL: "https://api.deepseek.com",
  //   apiKey: OPEN_AI_KEY,
  apiKey: DEEP_SEEK_API_KEY,
  dangerouslyAllowBrowser: true, // This is the default and can be omitted
});

export default openAI;
