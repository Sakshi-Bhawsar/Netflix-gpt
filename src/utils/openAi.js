import OpenAI from 'openai';
import { OPEN_API_KEY } from './constant';
const openAi = new OpenAI({
  apiKey: OPEN_API_KEY, // This is the default and can be omitted
  dangerouslyAllowBrowser: true
});

export default openAi;
