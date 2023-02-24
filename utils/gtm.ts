import { event } from "nextjs-google-analytics-gtm";

export const gtmEvents = (data: any) => {
  interface PageEventProps {
    event: string;
    page: string;
  }

  const pageEvent: PageEventProps = {
    ...data,
  };
  //@ts-ignore
  event(data);
  return pageEvent;
};
