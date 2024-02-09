import { login } from "../login/login_action"

// boilerplate code for CRUD operations for statistics

// get all stats for a player
export async function getPlayerStats(playerId: string) {
  const stats = await fetch(`/api/stats/${playerId}`)
  return stats
}

// get all stats for a team
export async function getTeamStats(teamId: string) {
  const stats = await fetch(`/api/stats/${teamId}`)
  return stats
}

// get all stats for all players
export async function getAllStats() {
  const stats = await fetch(`/api/stats`)
  return stats
}

// get stats for a particular metric and return in sorted order
export async function getGroupedStats(metric: string) {
  const stats = await fetch(`/api/stats/${metric}`)
  return stats
}

export async function updateStats(playerId: string, data: any) {
  const stats = await fetch(`/api/stats`, {
    method: "PUT",
    body: JSON.stringify(data),
  })
  return stats
}