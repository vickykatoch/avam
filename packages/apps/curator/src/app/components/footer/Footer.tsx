import { MessageService } from '@avam/utils';
import { useEffect } from 'react';

/* eslint-disable-next-line */
export interface FooterProps {}

export function Footer(props: FooterProps) {
  useEffect(() => {
    const subscription = MessageService.subscribe(
      'topic',
      (message) => {
        console.log(message);
      },
      { replayMessage: false }
    );

    return () => subscription.unsubscribe();
  }, []);

  return (
    <div className="d-flex flex-shrink-0 px-1">
      <h1>Welcome to Footer!</h1>
    </div>
  );
}

export default Footer;
