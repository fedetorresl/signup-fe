import { Route, Routes, useLocation } from "react-router-dom";
import type { Location } from "react-router-dom";

import { CreateAccountScreen } from "../screens";
import { ROUTES } from "./routes";

export const Router = () => {
  const location = useLocation();
  const { previousLocation } = (location.state ?? {}) as {
    previousLocation?: Location;
  };

  return (
    <Routes location={previousLocation ?? location}>
      <Route element={<CreateAccountScreen />} path={ROUTES.signup} />
    </Routes>
  );
};
