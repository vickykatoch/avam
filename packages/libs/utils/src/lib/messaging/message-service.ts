import { Subject } from 'rxjs';
import { Message, SubscribeOptions, Subscription } from './message';

class LastMessageSubject {
  private _lastMsg?: Message;
  private _notifier = new Subject<Message>();

  public next(msg: Message) {
    this._lastMsg = msg;
    this._notifier.next(msg);
  }
  public subscribe(
    onMessage: (message: Message) => void,
    options?: SubscribeOptions
  ): Subscription {
    if (options?.replayMessage && this._lastMsg) {
      onMessage(this._lastMsg);
    }
    return this._notifier.subscribe((msg) => onMessage(msg));
  }
  public complete() {
    this._notifier.complete();
  }
  public unsubscribe() {
    this._notifier.unsubscribe();
  }
}

export class MessageServiceImpl {
  private _topicMap = new Map<string, LastMessageSubject>();
  private _lastId = 0;

  public clear() {
    this._topicMap.forEach((msgSub) => {
      msgSub.complete();
      msgSub.unsubscribe();
    });
    this._topicMap.clear();
    this._lastId = 0;
  }

  public subscribe(
    topic: string,
    onMessage: (message: Message) => void,
    options?: SubscribeOptions
  ): Subscription {
    const observable = this.getOrCreateObservableTopic(topic);
    return observable.subscribe(onMessage, options);
  }
  public publish(topic: string, message: any, sender: string) {
    const notifier = this._topicMap.get(topic);
    notifier?.next(this.createMessage(message, sender));
  }

  private getOrCreateObservableTopic(topic: string): LastMessageSubject {
    if (!this._topicMap.has(topic)) {
      this._topicMap.set(topic, new LastMessageSubject());
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this._topicMap.get(topic)!;
  }
  private createMessage(msg: any, sender: string): Message {
    return {
      id: ++this._lastId,
      ts: Date.now(),
      msg,
      sender,
    };
  }
}

const instance = new MessageServiceImpl();
export const MessageService = instance;
