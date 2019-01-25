import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SocialButtons from '../SocialButtons';
import style from './style.css';

export default class SignupDialog extends React.Component {
  state = {
    open: false,
  };

  openDialog = () => {
    this.setState({ open: true });
  };

  closeDialog = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div className={style.Font}>
        <Button className={style.btnDialog} onClick={this.openDialog}>
          Registruotis
        </Button>
        <Dialog open={this.state.open} onClose={this.closeDialog}>
          <DialogTitle className={style.Font}>
            Registruokis!
            <p className={(style.textDialog, style.font)}>
              Jau memberis?{' '}
              <Link to="/login" className={style.Font}>
                Prisijunk!
              </Link>{' '}
            </p>
          </DialogTitle>

          <DialogContent className={style.signupDialog}>
            <SocialButtons />
            <p className={(style.textDialog, style.dialogArba)}>arba</p>
            <Link to="/Signup" className={style.dialogAnch}>
              <button type="button" className={style.dialogBtn}>
                registruokis su el. pastu
              </button>
            </Link>
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
