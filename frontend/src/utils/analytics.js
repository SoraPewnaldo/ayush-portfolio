import { track } from '@vercel/analytics';

export function trackEvent(eventName, properties = {}) {
  try {
    track(eventName, properties);
  } catch {
    // Analytics tracking is safely ignored during local development or if blocked by client
  }
}
