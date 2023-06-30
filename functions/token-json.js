import * as jose from 'jose';

export const onRequest = async (context) => {
    const secret = new TextEncoder().encode(context.env.VITE_TOKEN_HMAC_SECRET_KEY);
    const token = await new jose.SignJWT({sub: ""}).setProtectedHeader({alg: 'HS256'}).sign(secret);
    return new Response(JSON.stringify({token}));
};

