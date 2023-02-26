// @ts-ignore
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {IntlProvider} from 'react-intl'
import { ConfigProvider } from './hooks/useConfig';
import { InstanceProvider } from './hooks/useInstance';
import { DirectoryProvider } from './hooks/useDirectory';
import { UserProvider, useUser } from './hooks/useUser';

import { WelcomeActivity } from './features/WelcomeActivity/WelcomeActivity';
import { TimelineActivity } from './features/TimelineActivity/TimelineActivity';

import fr from './locales/fr.json';

const AppRoutes = () => {
  const { state } = useUser();
  return (
    <Routes>
    { 
      state.account && (
        <Route path="/*" element={<TimelineActivity />} />
      )
    }
    {
      !state.account && (
        <Route path="/*" element={<WelcomeActivity />} />
      )
    }
  </Routes>
  )
}

export function App() {
  return (
    <IntlProvider messages={fr} locale="fr" defaultLocale="en">
          {/* 
    // @ts-ignore */}
      <ConfigProvider>
        <DirectoryProvider>
          <InstanceProvider>
            <UserProvider>
              <BrowserRouter>
                <AppRoutes />
              </BrowserRouter>
            </UserProvider>
          </InstanceProvider>
        </DirectoryProvider>
      </ConfigProvider>
    </IntlProvider>
  );
}
