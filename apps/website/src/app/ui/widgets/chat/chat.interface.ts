import { CHAT_COMMANDS } from './chat.enum';

export interface IChat {
  group_date: number;
  messages: IChatMessage[]
}

export interface IChatMessage {
  message: string;
  datetime: number; // timestamp
  owner_id: number; // owner_id === user.id = is author
  receiver_id: number; // chat partner id
}

export interface IChatMessageRequest {
  command: CHAT_COMMANDS,
  user: number;
  receiver?: number;
  message?: string;
}

