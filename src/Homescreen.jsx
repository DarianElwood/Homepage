import './App.jsx';
import Typography from '@mui/material/Typography';
import { Box, Grid, Chip, Paper, Link} from '@mui/material';
import React from 'react';
import { useState } from 'react';



// main homescreen element. 
function Homescreen(){
    // click handlers for the about and contact buttons
    function contactClickHandler(displayContactPage){
        setDisplayContactPage(!displayContactPage.displayAboutPage);
        setDisplayAboutPage(false);
    }
    function aboutClickHandler(displayAboutPage){
        setDisplayAboutPage(!displayAboutPage.displayAboutPage);
        setDisplayContactPage(false);
    }

    const [displayContactPage, setDisplayContactPage] = useState(false);
    const [displayAboutPage, setDisplayAboutPage] = useState(true);
    return (
            <Box sx={{
            direction: 'column',
            display: 'inherit',
            justifyContent: 'center',
            alignItems: 'center',
            height: '85vh',
            width: '100vw',
            backgroundColor: '#282c34',
            color: 'white',
    }}>
        <Paper elevation={24} sx={{background: '#d6d8d8', width: '100vw', justifyContent: 'center'}}>
        <Grid container 
        direction="column"
        sx={{
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            padding: 2,
            paddingBottom: 10,

        }}>
            <Typography variant="h1" >Darian Elwood</Typography>
            <Typography variant="h3" sx={{paddingBottom: 5}}>1st year application development and delivery student at Red River Polytechnic.</Typography>
        
            
            
            <Grid container direction="row" spacing={2} sx={{justifyContent: 'center', paddingBottom: 20}}>
                <Chip label="About" onClick={() => aboutClickHandler(displayAboutPage, displayContactPage)}
                    sx={{color: 'white', background: '#308bd5', '&:hover': { color: 'black',}}}/>
                <Chip label="GitHub" component="a" href="https://github.com/DarianElwood" sx={{color: 'white', background: '#308bd5', '&:hover': { color: 'black',}}}/>
                <Chip label="LinkedIn" component="a" href="https://www.linkedin.com/in/darian-elwood-bb713b330/" sx={{color: 'white', background: '#308bd5', '&:hover': { color: 'black',}}}/>
                <Chip label="Contact" onClick={() => contactClickHandler(displayContactPage, displayAboutPage)}
                    sx={{color: 'white', background: '#308bd5', '&:hover': { color: 'black',}}}/>

            </Grid>
            
        </Grid>
        </Paper>
        <ContactScreen displayContactPage={displayContactPage}/>
        <AboutPage displayAboutPage={displayAboutPage}/>
        </Box> 
    );

    }

//about page - display controlled by displayAboutPage boolean 
function AboutPage(displayAboutPage){
    if (!displayAboutPage.displayAboutPage) return (
        <></>
    );
    else return (
        <Box sx={{
            direction: 'column',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '15vh',
            width: '100vw',
            backgroundColor: '#282c34',
            color: 'white',
            paddingBottom: 10,
            }}>
                <Grid container direction="column" spacing={1} sx={{justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    backgroundColor: '#282c34',
                    //spadding: 2,
                }}>
                    <Box sx={{height: 140, width: '100vw', backgroundColor: '#282c34'}}/>
                    <Typography variant="h3">About Me</Typography>    
                    <Typography variant="h5">I am a first year student at Red River Polytechnic in the Application Development and Delivery program.</Typography>
                    <Typography variant="h5">I am excited to gain experience working in the tech field.</Typography>
                    <Typography variant="h5">I have experience with the Python, JavaScript, Java and PHP programming langauges, the ReactJS framework, the Bootstrap framework, MaterialUI, as well as with PostgreSQL, HTML and CSS. Additionally, I am a competent Linux system administrator.  </Typography>
                </Grid>
            </Box>
    );
    }
    
//display contact page - display controlled by displayContactPage boolean
function ContactScreen(displayContactPage){
    if (!displayContactPage.displayContactPage) return (
        <>
        <Box />
        </>
    );

    else return  (
            <Box sx={{
                direction: 'column',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '15vh',
                width: '100vw',
                backgroundColor: '#282c34',
                color: 'white',
                
                paddingBottom: 10,
                }}>
                <Grid container direction="column" spacing={1} sx={{justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    //padding: 2,
                    backgroundColor: '#282c34',
                }}>
                    <Box sx={{height: 20, width: '100vw'}}/>
                    <Typography variant="h3">Contact Information</Typography>    
                    <Typography variant="h5">Email: <Link href="mailto:delwood@academic.rrc.ca">delwood@academic.rrc.ca</Link></Typography>
                    <Typography variant="h5">Cell: <Link href="tel:12045575027">+1 (204) 557-5027</Link></Typography>
                    <Typography variant="h5">Signal: <Link href="https://signal.me/#eu/TSxSg9gLzGUGmfMlqLYA5Jko1ayooDtd0-XrOMnNQr87P4JkiPBEtpTk8gtmG1uO">@delwood.92</Link></Typography>
                    <Typography variant="h5">WhatsApp: <Link href="https://wa.me/12045575027">+1 (204) 557-5027</Link></Typography>
                </Grid>
            </Box>
        );
   
}




export default Homescreen;