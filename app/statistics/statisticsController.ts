import { createClient } from "@/src/utils/supabase/server_action_client"
import { cookies } from "next/headers"

const cookieStore = cookies()
const supabase = createClient(cookieStore)

// CRUD operations for player stats

// get all stats for a given player
export async function getPlayerStats(playerId: string) {
  const { data: stats, error } = await supabase.from("player_stats").select().eq("player_id", playerId)
  if (error) {
    console.error("Error fetching player stats: ", error)
  }
  return stats
}

// get all stats for a given team
export async function getTeamStats(teamId: string) {
  const { data: stats, error } = await supabase.from("player_stats").select().eq("team_id", teamId)
  if (error) {
    console.error("Error fetching team stats: ", error)
  }
  return stats
}

// get all stats for all players
export async function getAllStats() {
    const { data: stats, error } = await supabase.from("player_stats").select()
    if (error) {
      console.error("Error fetching stats: ", error)
    }
  return stats
}

// get stats for a particular metric, sorted in descending order
export async function getGroupedStats(metric: string) {
  const { data: stats, error } = await supabase.from("player_stats").select("player_id", metric).order(metric, { ascending: false })
    if (error) {
        console.error("Error fetching stats: ", error)
    }
  return stats
}

// get any individual stat for a given player
export async function getStat(playerId: string, metric: string) {
  const { data: stats, error } = await supabase.from("player_stats").select(metric).eq("player_id", playerId)
    if (error) {
        console.error("Error fetching stats: ", error)
    }
  return stats
}

// update the stats of a given player
export async function updateStats(playerId: string, data: any) {
  const { error } = await supabase.from("player_stats").update(data).eq("player_id", playerId)
    if (error) {
        console.error("Error updating player stats: ", error)
    }
}