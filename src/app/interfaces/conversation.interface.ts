export interface ConversationInterface {
  message: string;
  to_id: string | number;
  from_id: string | number;
  short_id: string | number;
  status: number | boolean;
  created_at: string | Date;
}
