import { Routes, Route } from 'react-router-dom';

import VoidLayout from '@/layouts/VoidLayout';

import { ERoutePath } from '@/constants';
import Homepage from '@/pages';

function AppRouter() {
  return (
    <Routes>
      <Route
        path={ERoutePath.HOMEPAGE}
        element={<VoidLayout />}
      >
        <Route
          index
          element={<Homepage />}
        />
      </Route>
    </Routes>
  );
}

export default AppRouter;
