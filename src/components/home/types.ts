export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

export interface ChatMessage {
  id: string;
  sender: "user" | "ai";
  text: string;
  time: string;
}
