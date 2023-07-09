import React, { Suspense } from "react";
import { Navigate, Route, Routes, useLocation, useSearchParams } from "react-router-dom";
import { routeUrl } from "constant";
import Invitation from "page/home/invitation";
import { PreLoading } from "components";
import { decryptId } from "utility/helper/generateInvitation";

const HomePage = React.lazy(() => import("page/home"))

const Router = () => {
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search);
  const decryptedId = decryptId(queryParams.get('userid'))
  // return (
  //   <div>{queryParams.get('userid')}</div>
  // )
  
  if(decryptedId) {
    return (
      <Suspense fallback={<PreLoading />}>
        <Routes>
          {/* <Route path="/*" element={<Navigate to={`${routeUrl.home}/${location.pathname.substring(1)}`} replace />} /> */}
          <Route path={`${routeUrl.home}`} element={<HomePage/>} />
          {/* <Route path={routeUrl.invitation} element={<Invitation/>} /> */}
        </Routes>
      </Suspense>
    )
  } else {
    return (
      <Routes>
        <Route path="/*" element={<Navigate to="/404" replace />} />
        <Route path="/404" element={<Invitation/>} />
      </Routes>
    )
  }
}
 
export default Router