import React, { Component } from 'react';

class Form extends Component {

  render() {
    return(
      <form onSubmit={(e) => this.props.onFormSubmit(e, this.lastName)}>
        <div className="row">
          <div className="col-sm-6">
            <div className="form-group">
              <label>First Name</label>
              <input
                onChange={this.props.onFirstNameChange}
                value={this.props.firstName}
                type="text"
                className="form-control" />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                ref={(input => this.lastName = input)}
                className="form-control" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <label>This person codes
              <input
                checked={this.props.isProgrammer}
                onClick={this.props.onProgrammerClick}
                type="checkbox" />
            </label>
            <select className="form-control" onChange={this.props.onAgeSelect}>
              <option value="">Select age range</option>
              {this.props.ageRanges.map(age => {
                return <option key={age} value={age}>{age}</option>
              })}
            </select>
          </div>
          <div className="col-sm-6 radios">
            <h4>Which would you like for lunch?</h4>
            {this.props.lunchOptions.map(option => {
              return (
                <label key={option}>
                  {option}
                  <input
                    type="radio"
                    name="lunch"
                    onClick={() => this.props.onLunchSelect(option)}
                    checked={this.props.lunchChoice === option} />
                </label>
              )
            })}
          </div>
        </div>
        <input
          className="btn btn-primary"
          type="submit"
          value="Submit" />
      </form>
    )
  }
}

export default Form;
