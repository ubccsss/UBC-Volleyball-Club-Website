import { updateStats } from "@/app/statistics/statisticsController";

export default async function handler(req: any, res: any) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }
    const playerId = req.headers.playerId;
    const data = req.body;
    try {
        const stats = await updateStats(playerId, data);
        res.status(200).json(stats);
    } catch (error) {
        console.error("Error updating stats: ", error);
        res.status(500).json({ message: "Internal server error" });
    }
}