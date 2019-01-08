import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import SocialButtons from '../SocialButtons/SocialButtons';
import style from './style.css';

export default class SignupDialog extends React.Component {
  state = {
    open: false,
  };

  componentDidMount() {
    console.log('mount');
  }

  openDialog = () => {
    this.setState({ open: true });
  };

  closeDialog = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Button className={style.btnDialog} onClick={this.openDialog}>
          Sign up
        </Button>
        <Dialog open={this.state.open} onClose={this.closeDialog}>
          <DialogTitle>
            <h3>Prisiregistruok!</h3>
            <p className={style.textDialog}>
              Jau memberis? <a href="/login">Log in</a>{' '}
            </p>
          </DialogTitle>

          <DialogContent className={style.signupDialog}>
            <SocialButtons />
            <p className={(style.textDialog, style.arba)}>arba</p>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}
