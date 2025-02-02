export interface ItemGptResponse {
  item: string;
  description: string;
  imageUrl?: string;
}

export interface FashionItemResponse {
  nickname: string;
  itemGptResponse: ItemGptResponse;
}
