import React from 'react';

const InfoPanel = (props) => {
  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">Form Data</h3>
      </div>
      <div className="panel-body">
        <h3>{props.formData.firstName} {props.formData.lastName}</h3>
        <p><b>Age Range:</b> {props.formData.ageRange}</p>
        <p><b>Programmer:</b> {props.formData.programmer ? 'true' : 'false'}</p>
        <p><b>Lunch choice:</b> {props.formData.lunchChoice}</p>
      </div>
    </div>
  );
}
 export default InfoPanel;
