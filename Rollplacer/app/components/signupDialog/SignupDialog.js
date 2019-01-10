import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
// import PropTypes from 'prop-types';
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
          Registruotis
        </Button>
        <Dialog open={this.state.open} onClose={this.closeDialog}>
          <DialogTitle>
            Registruokis!
            <p className={style.textDialog}>
              Jau memberis? <a href="/login">Prisijunk!</a>{' '}
            </p>
          </DialogTitle>

          <DialogContent className={style.signupDialog}>
            <SocialButtons />
            <p className={(style.textDialog, style.dialogArba)}>arba</p>
            <a href="/Signup" className={style.dialogAnch}>
              <button type="button" className={style.dialogBtn}>
                registruokis su el. pastu
              </button>
            </a>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

// SignupDialog.PropTypes = {
//   openDialog: PropTypes.func.isRequired,
//   closeDialog: PropTypes.func.isRequired,
//   open: PropTypes.bool,
// };
