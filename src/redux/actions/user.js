export const setUser = (userData) => ({
  type: 'SET_USER',
  payload: userData
});

export const removeUser = (userData) => ({
  type: 'REMOVE_USER',
  payload: userData
});