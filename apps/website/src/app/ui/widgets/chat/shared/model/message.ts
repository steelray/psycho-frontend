export interface Message {
    consultation_id: number;
    message?: string;
    receiver_id?: number;
    system_message?: 0 | 1;
    action?: any;
    created_at?: number;
}
