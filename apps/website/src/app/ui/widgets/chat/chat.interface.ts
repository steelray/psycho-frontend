export interface IChat {
  group_date: number;
  messages: IChatMessage[]
}

export interface IChatMessage {
  message: string;
  date: number; // timestamp
  isOwner: boolean;
  edited?: boolean;
  author?: IChatMessageAuthor;
}

export interface IChatMessageAuthor {
  first_name: string;
  last_name: string;
  avatar?: string;
}