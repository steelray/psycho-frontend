import { CHAT_COMMANDS } from '../enum/chat.enum';

export interface IChat {
  group_date: number;
  messages: IChatMessage[]
}

export interface IChatMessage {
  message: string;
  created_at: number; // timestamp
  owner_id: number; // owner_id === user.id = is author
  read?: boolean;
  receiver_id?: number; // chat partner id
  system_message?: number
}

export interface IChatMessageRequest {
  command: CHAT_COMMANDS,
  user: number;
  receiver?: number;
  message?: string;
}

