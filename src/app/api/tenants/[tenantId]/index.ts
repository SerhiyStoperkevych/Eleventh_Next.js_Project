import type { NextApiRequest, NextApiResponse } from 'next';
import { getTenantById, updateTenant } from '@/lib/tenant';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { tenantId } = req.query;

    if (req.method === 'GET') {
        const tenant = await getTenantById(tenantId as string);
        if (!tenant) {
            return res.status(404).json({ message: 'Tenant not found' });
        }
        return res.status(200).json(tenant);
    }

    if (req.method === 'PUT') {
        const updateTenant = await updateTenant(tenantId as string, req.body);
        return res.status(200).json(updateTenant);
    }

    res.setHeader('Allow', ['GET', 'PUT']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
}