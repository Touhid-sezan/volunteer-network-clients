import { Button, Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../Header/Header';
import ServiceCard from '../ServiceCard/ServiceCard';

const Home = () => {
    const history = useHistory()
    const handleRegister = (title) => {
        history.push(`/volunteer-register/${title}`);
    }
const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://fierce-ocean-51131.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <>
            <div>

                <Header></Header>
                <div style={{textAlign:'center'}}>
                    <h1>I GROW BY HELPING PEOPLE IN NEED</h1>
                    
                        <input style={{width:'300px', padding:'9px'}} type="text" name="" id=""/>
                        <Button variant="contained" color="primary">Search</Button>
                    
                </div>
                
                <div className='container' style={{marginTop:'70px'}}>
                    <Grid container item xs={12} spacing='3' justify='center'  style={{ textAlign:'center', margin:'auto'}}>
                    {   
                        services.map(service=>{
                            
                            return(
                                <Grid onClick={() => handleRegister(service.title)} item xs={12} sm={6} md={3} >
                                    <ServiceCard service={service}></ServiceCard>
                                </Grid>
                            )
                        })
                    }
                    </Grid>
                </div>
            </div>
        </>
    );
};

export default Home;