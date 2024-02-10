import { getTeamStats } from "@/app/statistics/statisticsController";

export default async function handler(req: any, res: any) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }
    const teamId = req.headers.teamId;
    try {
        const stats = await getTeamStats(teamId);
        res.status(200).json(stats);
    } catch (error) {
        console.error("Error fetching team stats: ", error);
        res.status(500).json({ message: "Internal server error" });
    }
}