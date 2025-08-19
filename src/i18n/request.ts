import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({locale}) => {
  // Default to 'en' if locale is undefined
  const safeLocale = locale || 'en';

  return {
    messages: (await import(`../../messages/${safeLocale}.json`)).default
  };
});