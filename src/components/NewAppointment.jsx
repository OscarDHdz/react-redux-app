import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addAppointmentAction} from '../actions/appointmentsActions';
import uuid from 'uuid/v4';

const NewAppointment = () => {

    const [pet, setPet] = useState('');
    const [owner, setOwner] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [notes, setNotes] = useState('');
    const [error, setError] = useState(false);

    // Dispatch to execute actions
    const dispatch = useDispatch();
    const addNewAppointment = (appointment) => dispatch(addAppointmentAction(appointment))

    const submitAppointment = e => {
        e.preventDefault();
        if (pet === '' || owner === '' || date === '' ||
            time === '' || notes === '' ) {
            return setError(true);
        }

        setError(false);


        addNewAppointment({
            id: uuid(), pet, owner, date, time, notes
        })
    }

    return (
        <div className="card mt-5">
            <div className="card-body">
                <h2 className="card-title text-center mb-5">Add a new Appointment:</h2>
                <form onSubmit={submitAppointment}>
                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Pet Name</label>
                        <div className="col-sm-8 col-lg-10">
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Pet Name"
                                value={pet}
                                onChange={e => setPet(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Owner</label>
                        <div className="col-sm-8 col-lg-10">
                            <input 
                                type="text" 
                                className="form-control"  
                                placeholder="Owner Name"
                                value={owner}
                                onChange={e => setOwner(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">date</label>
                        <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
                            <input 
                                type="date" 
                                className="form-control"
                                value={date}
                                onChange={e => setDate(e.target.value)}
                            />
                        </div>                            

                        <label className="col-sm-4 col-lg-2 col-form-label">time</label>
                        <div className="col-sm-8 col-lg-4">
                            <input 
                                type="time" 
                                className="form-control"
                                value={time}
                                onChange={e => setTime(e.target.value)}
                            />
                        </div>
                    </div>
                    
                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Notes</label>
                        <div className="col-sm-8 col-lg-10">
                            <textarea 
                                className="form-control"
                                value={notes}
                                onChange={e => setNotes(e.target.value)}
                            ></textarea>
                        </div>
                    </div>
                    <div className="form-group row justify-content-end">
                        <div className="col-sm-3">
                            <button type="submit" className="btn btn-success w-100">Add</button>
                        </div>
                    </div>
                </form>
               
            </div>
        </div>
    );
}
 
export default NewAppointment;