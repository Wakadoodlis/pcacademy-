import React from 'react';
import img from './img/cruising.jpg';
import style from './style.css';

const Cruising = () => (
  <React.Fragment>
    <div className="container">
      <div className="row">
        <div className="col s4">
          <img
            src={img}
            alt="woment cruising in a city"
            className={style.cruisingImg}
          />
        </div>
        <div className="col s6">
          <h3>CRUISING</h3>
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

export default Cruising;
