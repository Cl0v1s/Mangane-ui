import { Dialog } from './../../ui/Dialog';
import { useNavigate} from 'react-router-dom';
import { useCallback } from 'preact/hooks';
import { FormattedMessage } from 'react-intl';
import { Input} from './../../ui/Input';
import { Button } from '../../ui/Button';
import { TargetedEvent } from 'preact/compat';

import { auth } from '../../services/accounts';
import { useUser } from '../../hooks/useUser';

const LoginDialog = () => {
    const navigate = useNavigate();
    const { actions } = useUser();

    const onClose = useCallback(() => {
      navigate('./../');
    }, [navigate]);

    const onSubmit = useCallback((e: TargetedEvent<HTMLFormElement, Event>) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(e.currentTarget).entries());
      actions.login(data.username.toString(), data.password.toString());
    }, []);

    return (
      <Dialog open onClose={onClose}>
        <Dialog.Title>
          <h3 className="text-2xl font-bold">
            <FormattedMessage 
                id="WelcomeActivity.login-title"
                defaultMessage="Login"
            />
          </h3>
        </Dialog.Title>
        <Dialog.Description>
          <span className="text-gray-500">
            <FormattedMessage 
                  id="WelcomeActivity.login-description"
                  defaultMessage="Please enter your credentials to log in"
              />
            </span>
        </Dialog.Description>
        <form className="mt-3 flex flex-col gap-2" onSubmit={onSubmit}>
          <div>
            <label htmlFor="username">
                <FormattedMessage 
                    id="WelcomeActivity.login-username"
                    defaultMessage="Username"
                />
            </label>
            <div>
              <Input name="username" id="username" required />
            </div>
          </div>
          <div>
            <label htmlFor="username">
                <FormattedMessage 
                    id="WelcomeActivity.login-password"
                    defaultMessage="Password"
                />
            </label>
            <div>
              <Input name="password" id="password" type="password" required />
            </div>
          </div>
          <div className="text-right">
            <Button type="submit">
                <FormattedMessage 
                    id="WelcomeActivity.login-submit"
                    defaultMessage="Submit"
                />
            </Button>
          </div>
        </form>
      </Dialog>
    )
};

export { LoginDialog };