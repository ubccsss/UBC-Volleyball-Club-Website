import { getGroupedStats } from "@/app/statistics/statisticsController";


export default async function handler(req: any, res: any) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }
    const metric = req.headers.metric;
    try {
        const stats = await getGroupedStats(metric);
        res.status(200).json(stats);
    } catch (error) {
        console.error("Error fetching stats: ", error);
        res.status(500).json({ message: "Internal server error" });
    }
}