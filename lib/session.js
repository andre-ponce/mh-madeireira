export function createFreshSession(ip, ua, env) {
  return {
    sessionId: Date.now() + ''
  }
}

export function validateSession(sessionId, ip, ua, env) {
  return {
    sessionId
  }
}
