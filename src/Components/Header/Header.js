import React from 'react';
import Grid from '@material-ui/core/Grid';
import logo from '../../images/logos/Group 1329.png';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <Grid container item xs={12} style={{height:'60px', padding:'10px 20px'}} alignItems='center' >
                <Grid item xs={7}>
                    <Link to='/'> <img style={{width:'250px'}} src={logo} alt="Volunteer Network"/> </Link>
                </Grid>
                <Grid container item xs={5} justify='space-around'>
                    <Link to='/' className='link'><b>Home</b></Link>
                    <Link to='/donation' className='link'><b>Donation</b></Link>
                    <Link to='/events' className='link'><b>Events</b></Link>
                    <Link to='/blog' className='link'><b>Blog</b></Link>
                    <Link to='/logIn' className='link'>
                        <Button  variant="contained" color="primary">
                            Register
                        </Button>
                    </Link>
                    <Link to='/admin' className='link'>
                        <Button variant="contained" style={{background:'black', color:"white"}}>
                            Admin
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        </div>
    );
};

export default Header;