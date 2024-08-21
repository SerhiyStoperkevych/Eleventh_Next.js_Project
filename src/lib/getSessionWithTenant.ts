import { getSession } from "next-auth/react";
import { getTenant } from "./getTenant";

export async function getSessionWithTenant(context: any) {
    const session = await getSession(context);
    const host = context.req.headers.host || '';
    const tenant = await getTenant(host);

    return { session, tenant };
}