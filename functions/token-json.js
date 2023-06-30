import {sign} from '@tsndr/cloudflare-worker-jwt'

export const onRequest = async (context) => {
    const token = await sign({sub: ""}, context.env.VITE_TOKEN_HMAC_SECRET_KEY);
    return new Response(JSON.stringify({token}));
}

