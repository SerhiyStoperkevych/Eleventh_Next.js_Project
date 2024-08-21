import { NextApiRequest, NextApiResponse, NextApiHandler } from "next";
import { getTenant } from "./getTenant";

export function withTenant(handler: NextApiHandler) {
    return async (req: NextApiRequest, res: NextApiResponse) => {
        const host = req.headers.host || '';
        const tenant = await getTenant(host);

        if(!tenant) {
            return res.status(404).json({ error: 'Tenant not found' });
        }

        req.tenant = tenant;
        return handler(req, res);
    }
}