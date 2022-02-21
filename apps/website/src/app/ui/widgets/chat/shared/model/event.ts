export enum Event {
    CONNECT = 'connect',
    DISCONNECT = 'disconnect',
    ONLINE = 'online', // interviewer joined chat
    OFFLINE = 'offline', // interviewer left chat
    ONLINES = 'onlines', // just after connection get all online interviewees
    CHAT_STARTED = 'chat-started', // chat started
    CHAT_ENDED = 'chat-ended', // chat completed
    ERROR = 'error'
}
