export interface Message<T = any> {
  id: number;
  ts: number;
  msg: T;
  sender: string;
}
export interface SubscribeOptions {
  replayMessage: boolean;
}
export interface Subscription {
  unsubscribe: () => void;
}
