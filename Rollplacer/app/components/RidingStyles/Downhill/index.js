import React from 'react';
import Navbar from '../../Navbar';
import style from './style.css';

const Downhill = () => (
  <React.Fragment>
    <Navbar />
    <div className="container">
      <div className="row">
        <div className="col s4">
          <img
            src={img}
            alt="woment cruising in a city"
            className={style.downhillImg}
          />
        </div>
        <div className="col s6">
          <h3>Downhill</h3>
          <p>
            Tai paprasčiausiai įsisavinamas važinėjimo stilius, kuriam
            longboardas dažniausiai naudojamas lengviems ir manevringiems
            pasivažinėjimams mieste arba tiesiog kaip transporto priemonė.
            Tinkamų lentų formos ir ilgiai gali būti labai įvairūs nuo 75cm iki
            130cm. Praktiškai visų formų longboardai tinkami šiam stiliui,
            tačiau didžiausią malonumą jausite važinėdami minkšta lenta su
            minkštais ratais. Tad verdiktas paprastas, tinkamiausios formos šiam
            stiliui – Pintail, Cruiser.
          </p>
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default Downhill;
