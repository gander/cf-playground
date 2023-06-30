import * as jose from 'jose';

interface Env {
    VITE_TOKEN_HMAC_SECRET_KEY: string;
}

export const onRequest: PagesFunction<Env> = async (context) => {
    const secret = new TextEncoder().encode(context.env.VITE_TOKEN_HMAC_SECRET_KEY);

    const token = await new jose.SignJWT({sub: ""})
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .sign(secret)

    return new Response(token);
}

