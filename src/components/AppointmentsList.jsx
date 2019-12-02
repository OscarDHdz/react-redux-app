import React from 'react';

const AppointmentsList = () => {
    return (
        <div className="media mt-3">
            <div className="media-body">
                <h3 className="mt-0">List</h3>
                <p className="card-text"><span>Owner:</span></p>
                <p className="card-text"><span>Date:</span></p>
                <p className="card-text"><span>Time:</span>  </p>
                <p className="card-text"><span>Notes:</span> <br /> </p>
                <button 
                    className="btn btn-danger">Delete &times;
                </button>
            </div>
        </div>
    );
}
 
export default AppointmentsList;