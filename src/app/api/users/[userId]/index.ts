import type { NextApiRequest, NextApiResponse } from "next";
import { getUserById, updateUser } from '@/lib/user';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { userId } = req.query;

    if (req.method === 'GET') {
        const user = await getUserById(userId as string);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        return res.status(200).json(user);
    }

    if (req.method === 'PUT') {
        const updatedUser = await updateUser(userId as string, req.body);
        return res.status(200).json(updatedUser);
    }

    res.setHeader('Allow', ['GET', 'PUT']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
}