export enum CHAT_COMMANDS {
  COMMAND_REGISTER_USER = 'register', // check if user exists in db and save his data in clients array
  COMMAND_SEND_MESSAGE = 'send-message', // send message to 
  COMMAND_GET_ONLINE_PSYCHOLOGISTS = 'get-online-psychologists', // send message to 
}

export enum CHAT_RESPONSE_TYPES {
  RESPONSE_CLOSED = 'closed',
  RESPONSE_REGISTERED = 'registered',
  RESPONSE_TEXT_MESSAGE = 'message',
  RESPONSE_ONLINE_PSYCHOLOGISTS = 'online-psychologists',
  RESPONSE_ERROR = 'error',
}