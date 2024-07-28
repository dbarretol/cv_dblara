import React from 'react';
import profileImg from './../assets/icons/energy.png';

function AcademicMain() {
  return (
    <section className="mb-4">
      <div className="container">
        {/* Formación académica */}
        <h2>Formación académica</h2>
        <div className="row">
          <div className="col">
            <div className="mb-3">
              <img src={profileImg} alt="Logo" className="img-fluid rounded-circle" style={{ width: '50px', height: '50px' }} />
            </div>
          </div>
          <div className="col">
            <div className="row">
              <div className="col">
                <h3>Maestría en ABC</h3>
              </div>
              <div className="col">
                <p>Inicio - Fin</p>
              </div>
            </div>
            <div className="row">
              <p>Institución educativa #01</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="mb-3">
              <img src={profileImg} alt="Logo" className="img-fluid rounded-circle" style={{ width: '50px', height: '50px' }} />
            </div>
          </div>
          <div className="col">
            <div className="row">
              <div className="col">
                <h3>Pregrado en ABC</h3> {/* Corregido de "pregardo" a "Pregrado" */}
              </div>
              <div className="col">
                <p>Inicio2 - Fin2</p>
              </div>
            </div>
            <div className="row">
              <p>Institución educativa #02</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="mb-3">
              <img src={profileImg} alt="Logo" className="img-fluid rounded-circle" style={{ width: '50px', height: '50px' }} />
            </div>
          </div>
          <div className="col">
            <div className="row">
              <div className="col">
                <h3>Diplomado en ABC</h3> {/* Corregido de "diplomado" a "Diplomado" */}
              </div>
              <div className="col">
                <p>Inicio3 - Fin3</p>
              </div>
            </div>
            <div className="row">
              <p>Institución educativa #03</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AcademicMain;