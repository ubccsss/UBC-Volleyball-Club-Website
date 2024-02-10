import { login } from "../login/login_action"
import { createClient } from "@/src/utils/supabase/server_action_client"
import { cookies } from "next/headers"

const cookieStore = cookies()
const supabase = createClient(cookieStore)

// CRUD operations for player stats

// get all stats for a player
export async function getPlayerStats(playerId: string) {
  const { data: stats, error } = await supabase.from("player_stats").select().eq("player_id", playerId)
  return stats
}

// get all stats for a team
export async function getTeamStats(teamId: string) {
  const stats = await fetch(`/api/stats/${teamId}`)
  return stats
}

// get all stats for all players
export async function getAllStats() {
    const { data: stats, error } = await supabase.from("player_stats").select()
  return stats
}

// get stats for a particular metric, sorted in descending order
export async function getGroupedStats(metric: string) {
  const { data: stats, error } = await supabase.from("player_stats").select(metric).order(metric, { ascending: false })
  return stats
}

export async function updateStats(playerId: string, data: any) {
  const { error } = await supabase.from("player_stats").update(data).eq("player_id", playerId)
}