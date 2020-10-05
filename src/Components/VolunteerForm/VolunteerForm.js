import React, { useContext } from 'react';
import { UserContext } from '../../App';
import logo from '../../images/logos/Group 1329.png';
import { Link, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './VolunteerForm.css';
import UserRegistered from '../UserRegistered/UserRegistered';



const VolunteerForm = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const {title} = useParams();
    const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    
    fetch('https://fierce-ocean-51131.herokuapp.com/registeredServices', {
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then (data => {
        console.log(data);
    })
  };
  return (
    <div className="volunteer-form">
    <Link to='/'> <img src={logo} alt="Volunteer Network"/> </Link>
    <div className="register-form">
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Full Name</label>
            <input name="name" className="input-style" defaultValue={loggedInUser.name} ref={register} />
            <label>Email</label>
            <input name="email" className="input-style" defaultValue={loggedInUser.email} ref={register} />
            <label>Date</label>
            <input name="date" className="input-style" defaultValue={new Date()} ref={register} />
            <label>Description</label>
            <input
                className="input-style"
                name="description"
                ref={register}
            />
            {errors.description && <p>This field is required</p>}
            <label>Service Name</label>
            <input name="service" className="input-style" defaultValue={title} ref={register} />
            <input type="submit" value="Register" />
        </form>
    </div>
    <UserRegistered></UserRegistered>
    </div>
  );
}
export default VolunteerForm;