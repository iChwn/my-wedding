import React, { Suspense } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { routeUrl } from "constant";
import Blank from "page/home/404";
import { PreLoading } from "components";
import { decryptId } from "utility/helper/generateInvitation";
import guest_list from "constant/guestList";

const HomePage = React.lazy(() => import("page/home"))
const Invitation = React.lazy(() => import("page/home/invitation"))

const Router = () => {
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search);
  const decryptedId = decryptId(queryParams.get('userid'))
  const isValidGuset = guest_list.find((guest) => guest.id === decryptedId)
  console.log(isValidGuset)
  if(isValidGuset) {
    return (
      <Suspense fallback={<PreLoading />}>
        <Routes>
          {/* <Route path="/*" element={<Navigate to={`${routeUrl.home}/${location.pathname.substring(1)}`} replace />} /> */}
          <Route path={`${routeUrl.invitation}`} element={<Invitation/>} />
          <Route path={`${routeUrl.home}`} element={<HomePage/>} />
          {/* <Route path={routeUrl.invitation} element={<Invitation/>} /> */}
        </Routes>
      </Suspense>
    )
  } else {
    return (
      <Routes>
        <Route path="/*" element={<Navigate to="/404" replace />} />
        <Route path="/404" element={<Blank/>} />
      </Routes>
    )
  }
}
 
export default Router