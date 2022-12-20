export enum E_Routes {
  start = '/',
  auth = '/auth',
  signIn = '/auth/sign-in',
  signUp = '/auth/sign-up',
  home = '/home',
  reviews = '/list',
  review = '/details/:reviewId',
  createReview = '/details/new',
  editReview = '/details/edit/:reviewId',
  users = '/users',
  user = '/users/:userId',
  every = '*',
}
