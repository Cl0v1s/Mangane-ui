import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ConfigProvider } from './hooks/useConfig';
import { InstanceProvider } from './hooks/useInstance';

import WelcomeActivity from './features/WelcomeActivity/WelcomeActivity';



export function App() {
  return (
    <ConfigProvider>
      <InstanceProvider>
      <Router>
        <Switch>
          <Route index>
            <WelcomeActivity />
          </Route>
        </Switch>
      </Router>
      </InstanceProvider>
    </ConfigProvider>
  );
}
