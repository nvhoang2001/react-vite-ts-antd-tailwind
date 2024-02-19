import { ECustomEventName } from '@/constants';

declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

interface CustomEventMap {
  [ECustomEventName.CUSTOM_EVENT]: CustomEvent<{
    data: { value: string };
  }>;
}

declare global {
  interface Window {
    addEventListener<K extends keyof CustomEventMap>(
      type: K,
      listener: (this: Window, ev: CustomEventMap[K]) => void,
    ): void;
    removeEventListener<K extends keyof CustomEventMap>(
      type: K,
      listener: (this: Window, ev: CustomEventMap[K]) => void,
    ): void;
    dispatchEvent<K extends keyof CustomEventMap>(ev: CustomEventMap[K]): void;
  }

  interface HTMLAudioElement {
    sinkId?: string;
    setSinkId?: (sinkId: string) => Promise<void>;
  }
}
