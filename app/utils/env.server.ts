/**
 * This will expose all variables within global ENV
 * Only for client-side env
 * Never expose the REMIX_SESSION_SECRET or any server/node/non-browser env
 */

export function getEnv(request: Request) {
  const url = new URL(request.url);

  return {
    NODE_ENV: process.env.NODE_ENV, // development | test | production
    APP_ENV: process.env.APP_ENV, // local | development | staging | production
    APP_URL: url.origin,
    VERCEL: process.env.VERCEL,

    // REMIX variables are mostly private

    IMAGEKIT_URL_ENDPOINT: process.env.IMAGEKIT_URL_ENDPOINT,
    IMAGEKIT_PUBLIC_KEY: process.env.IMAGEKIT_PUBLIC_KEY,
    IMAGEKIT_PRIVATE_KEY: process.env.IMAGEKIT_PRIVATE_KEY,

    GA_MEASUREMENT_ID: process.env.GA_MEASUREMENT_ID,
  };
}

/**
 * Only use for server-side env
 */

export function getEnvServer(key: string) {
  return getEnvRequired(process.env, key);
}

export function getEnvRequired(
  obj: Record<string, string | undefined>,
  key: string
) {
  const envVal = obj[key];

  if (!envVal) {
    throw new Error(`${key} is a required env variable`);
  }

  return envVal;
}
