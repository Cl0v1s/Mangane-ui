import { Dialog } from './../../ui/ui';
import { useNavigate} from 'react-router-dom';
import { useCallback } from 'preact/hooks';
import { FormattedMessage } from 'react-intl';

const LoginDialog = () => {
    const navigate = useNavigate();

    const onClose = useCallback(() => {
      navigate('./../');
    }, [navigate]);

    return (
      <Dialog open onClose={onClose}>
        <Dialog.Title>
          <FormattedMessage 
              id="WelcomeActivity.login-title"
              defaultMessage="Login"
          />
        </Dialog.Title>
        <Dialog.Description>
          <FormattedMessage 
                id="WelcomeActivity.login-description"
                defaultMessage="Please enter your credentials to log in"
            />
        </Dialog.Description>
        <FormattedMessage 
          id="WelcomeActivity.login-description"
          defaultMessage="Please enter your credentials to log in"
        />

      </Dialog>
    )
};

export { LoginDialog };