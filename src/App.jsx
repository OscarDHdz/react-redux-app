import React from 'react';
import NewAppointment from './components/NewAppointment';
import AppointmentsList from './components/AppointmentsList';
import store from './store';  
import {Provider} from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <header>
          <h1 className="text-center">Veterinary Administrator</h1>
        </header>

        <div className="row mt-3">
          <div className="col-md-6">
            <NewAppointment/>
          </div>
          <div className="col-md-6">
            <AppointmentsList/>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
