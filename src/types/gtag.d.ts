// Google Analytics gtag.js type definitions

declare function gtag(
  command: 'config',
  targetId: string,
  config?: {
    page_path?: string;
    [key: string]: any;
  }
): void;

declare function gtag(
  command: 'event',
  eventName: string,
  eventParams?: {
    event_category?: string;
    event_label?: string;
    value?: any;
    [key: string]: any;
  }
): void;

declare function gtag(
  command: 'js',
  date: Date
): void;

declare function gtag(
  command: string,
  ...args: any[]
): void;
