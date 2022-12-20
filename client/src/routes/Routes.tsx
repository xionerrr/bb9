import { Routes, Route, Navigate } from 'react-router-dom'

import { AuthRouter } from './AuthRouter'
import { MainRouter } from './MainRouter'
import { ProtectedRoute } from './ProtectedRouter'

import { E_Routes } from 'models/routes'
import * as P from 'pages'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainRouter />}>
        <Route element={<ProtectedRoute />}>
          <Route path={E_Routes.start} element={<Navigate to={E_Routes.home} />} />
          <Route path={E_Routes.home} element={<P.Home />} />
          <Route path={E_Routes.reviews} element={<P.Reviews />} />
          <Route path={E_Routes.review} element={<P.Review />} />
          <Route path={E_Routes.createReview} element={<P.CreateReview />} />
          <Route path={E_Routes.editReview} element={<P.EditReview />} />
          <Route path={E_Routes.users} element={<P.Users />} />
          <Route path={E_Routes.user} element={<P.User />} />
        </Route>
        <Route path={E_Routes.every} element={<P.NotFound />} />
      </Route>
      <Route element={<AuthRouter />}>
        <Route path={E_Routes.auth} element={<Navigate to={E_Routes.signIn} />} />
        <Route path={E_Routes.signIn} element={<P.SignIn />} />
        <Route path={E_Routes.signUp} element={<P.SignUp />} />
      </Route>
    </Routes>
  )
}
