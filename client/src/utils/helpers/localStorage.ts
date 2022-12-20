export const LocalStorage = {
  setAuthToken: (token: string) => localStorage.setItem('bb9-token', token),
  getAuthToken: () => localStorage.getItem('bb9-token') as string,
  deleteAuthToken: () => localStorage.removeItem('bb9-token'),
}
