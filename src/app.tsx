import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ConfigProvider } from './hooks/useConfig';

import WelcomeActivity from './feature/WelcomeActivity/WelcomeActivity';

export function App() {
  return (
    <ConfigProvider>
      <Router>
        <Switch>
          <Route index>
            <WelcomeActivity />
          </Route>
        </Switch>
      </Router>
    </ConfigProvider>
  );
}
