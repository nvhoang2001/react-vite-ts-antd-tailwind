import { ECustomEventName } from '@/constants';

export default function dispatchCustomEvent(eventName: ECustomEventName, data?: object) {
  const pushChangeEvent = new CustomEvent(eventName, {
    detail: {
      data,
    },
  });

  window.dispatchEvent(pushChangeEvent);
}
