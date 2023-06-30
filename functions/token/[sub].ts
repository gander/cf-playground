import {generateToken} from '../lib/token';
import {Env} from '../lib/types';

export const onRequest: PagesFunction<Env> = async ({env: {VITE_TOKEN_HMAC_SECRET_KEY: secret_key}, params: {sub}}) => {
    return new Response(await generateToken(secret_key, sub as string));
};


