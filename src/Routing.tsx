import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeUrl } from "constant";
import Invitation from "page/home/invitation";
import { PreLoading } from "components";

const HomePage = React.lazy(() => import("page/home"))

const Router = () => {
  return (
    <Suspense fallback={<PreLoading />}>
      <Routes>
        {/* <Route path="/" element={<Navigate to={routeUrl.home} replace />} /> */}
        <Route path={routeUrl.home} element={<HomePage/>} />
        <Route path={routeUrl.invitation} element={<Invitation/>} />
      </Routes>
    </Suspense>
  )
}
 
export default Router