interface I_AuthDataBody {
  access_token: string
  refresh_token: string
  id: string
  email: string
  created_at: string
  updated_at: string
}

export interface I_AuthData {
  message: string
  data: I_AuthDataBody
  timestamp: string
}
