// @ts-ignore
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {IntlProvider} from 'react-intl'
import { ConfigProvider } from './hooks/useConfig';
import { InstanceProvider } from './hooks/useInstance';
import { DirectoryProvider } from './hooks/useDirectory';


import WelcomeActivity from './features/WelcomeActivity/WelcomeActivity';

import fr from './locales/fr.json';

export function App() {
  return (
    <IntlProvider messages={fr} locale="fr" defaultLocale="en">
          {/* 
    // @ts-ignore */}
      <ConfigProvider>
        <DirectoryProvider>
          <InstanceProvider>
            <Router>
              <Switch>
                <Route index>
                  <WelcomeActivity />
                </Route>
              </Switch>
            </Router>
          </InstanceProvider>
        </DirectoryProvider>
      </ConfigProvider>
    </IntlProvider>
  );
}
