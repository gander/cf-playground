import * as jose from 'jose';

interface Env {
    VITE_TOKEN_HMAC_SECRET_KEY: string;
}

export const onRequest: PagesFunction<Env> = async ({env: {VITE_TOKEN_HMAC_SECRET_KEY: secret_key}, params: {sub}}) => {
    const secret = new TextEncoder().encode(secret_key);
    const token = await new jose.SignJWT({sub}).setProtectedHeader({alg: 'HS256'}).sign(secret);
    return new Response(JSON.stringify({sub, token}, null, 2));
};

export const onRequestOptions: PagesFunction<Env> = async () => {
    return new Response(null, {
        status: 204,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Methods': 'GET, OPTIONS',
            'Access-Control-Max-Age': '86400',
        },
    });
};
