import React from 'react';
import style from './style.css';

const SocialButtons = () => (
  <div>
    <button type="button" className={style.btnRegFb}>
      <span className={style.spanFb}>f</span> Registruotis su Facebook
    </button>
    <button type="button" className={style.btnRegGplus}>
      <span className={style.spanG}>
        G <span className={style.gPlus}>+</span>
      </span>
      Registruotis su Google
    </button>
  </div>
);

export default SocialButtons;
