// @ts-ignore
import { Route, Routes } from 'react-router-dom';

import { IndexView } from "./IndexView";
import { LoginDialog } from './LoginDialog';

function WelcomeActivity() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginDialog />} />
      </Routes>
      <IndexView />
    </>
  );
}

export default WelcomeActivity;
