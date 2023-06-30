import {sign} from '@tsndr/cloudflare-worker-jwt'

interface Env {
    KV: KVNamespace;
    VITE_TOKEN_HMAC_SECRET_KEY: string;
}

export const onRequest: PagesFunction<Env> = async (context) => {
    const token = await sign({sub: ""}, context.env.VITE_TOKEN_HMAC_SECRET_KEY);
    return new Response(token);
}

