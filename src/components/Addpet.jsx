import axios from 'axios';
import React, { useState } from 'react';


const Addpet = () => {

  const [input, setInput] = useState({
    booking_id: "",
    pet_name: "",
    pet_type: "",
    breed: "",
    age: "",
    weight: "",
    vaccination_status: "",
    owner_name: "",
    owner_phone: "",
    owner_email: "",
    check_in_date: "",
    check_out_date: "",
    kennel_number: ""
  });

  const inputHandler = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const readValues = () => {
    console.log(input);

    axios
      .post("http://localhost:3002/add-booking", input)
      .then((response) => {
        console.log(response.data);
        alert("Pet Booking Added Successfully");
      })
      .catch((err) => {
        console.log(err);
        alert("Booking Failed");
      });
  };

  return (
    <div>
      

      <div className="container mt-4">
        <div className="card shadow p-4">

          <h2 className="text-center mb-4">Pet Boarding Booking</h2>

          <div className="row g-3">

            <div className="col-md-6">
              <label>Booking ID</label>
              <input
                type="text"
                className="form-control"
                name="booking_id"
                value={input.booking_id}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label>Pet Name</label>
              <input
                type="text"
                className="form-control"
                name="pet_name"
                value={input.pet_name}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label>Pet Type</label>
              <input
                type="text"
                className="form-control"
                name="pet_type"
                placeholder="Dog / Cat / Bird"
                value={input.pet_type}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label>Breed</label>
              <input
                type="text"
                className="form-control"
                name="breed"
                value={input.breed}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label>Age</label>
              <input
                type="text"
                className="form-control"
                name="age"
                value={input.age}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label>Weight (kg)</label>
              <input
                type="text"
                className="form-control"
                name="weight"
                value={input.weight}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label>Vaccination Status</label>
              <select
                className="form-control"
                name="vaccination_status"
                value={input.vaccination_status}
                onChange={inputHandler}
              >
                <option value="">--SELECT--</option>
                <option value="Vaccinated">Vaccinated</option>
                <option value="Not Vaccinated">Not Vaccinated</option>
              </select>
            </div>

            <div className="col-md-6">
              <label>Owner Name</label>
              <input
                type="text"
                className="form-control"
                name="owner_name"
                value={input.owner_name}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label>Owner Phone</label>
              <input
                type="text"
                className="form-control"
                name="owner_phone"
                value={input.owner_phone}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label>Owner Email</label>
              <input
                type="text"
                className="form-control"
                name="owner_email"
                value={input.owner_email}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label>Check-in Date</label>
              <input
                type="text"
                className="form-control"
                name="check_in_date"
                value={input.check_in_date}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label>Check-out Date</label>
              <input
                type="text"
                className="form-control"
                name="check_out_date"
                value={input.check_out_date}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label>Kennel Number</label>
              <input
                type="text"
                className="form-control"
                name="kennel_number"
                value={input.kennel_number}
                onChange={inputHandler}
              />
            </div>

            <div className="col-12 text-center mt-3">
              <button
                className="btn btn-primary"
                onClick={readValues}
              >
                Book Pet Stay
              </button>
            </div>

          </div>

        </div>
      </div>

    </div>
  )
}

export default Addpet;