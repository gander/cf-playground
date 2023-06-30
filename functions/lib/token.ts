import * as jose from 'jose';

export async function generateToken(secret_key: string, sub: string = ''): Promise<string> {
    const secret = new TextEncoder().encode(secret_key);
    return await new jose.SignJWT({sub: `${sub}`}).setProtectedHeader({alg: 'HS256'}).sign(secret);
}

export function JsonResponse(obj: Object): Response {
    return new Response(JSON.stringify(obj, null, 2));
}
