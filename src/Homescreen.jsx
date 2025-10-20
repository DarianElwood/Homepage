import './App.jsx';
import Typography from '@mui/material/Typography';
import { Box, Chip, Paper, Link } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

// main homescreen element. 
function Homescreen() {
    // Use a single state to track which page is active
    const [activePage, setActivePage] = useState('about'); // Default to 'about'
    
    // click handlers for the about and contact buttons
    function contactClickHandler() {
        setActivePage('contact');
    }
    
    function aboutClickHandler() {
        setActivePage('about');
    }
    
    return (
        <Box 
            component="main"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
                width: '100vw',
                backgroundColor: '#282c34',
                color: 'white',
            }}
        >
            <SplashScreen 
                aboutClickHandler={aboutClickHandler}
                contactClickHandler={contactClickHandler}
                activePage={activePage}
            />
            <ContactScreen displayContactPage={activePage === 'contact'} />
            <AboutPage displayAboutPage={activePage === 'about'} />
        </Box> 
    );
}

function SplashScreen({ aboutClickHandler, contactClickHandler, activePage }) {
    return (
        <Box 
            component="header"
            sx={{ 
                width: '100%',
                flexShrink: 0,
            }}
        >
            <Paper elevation={24} sx={{ 
                background: '#d6d8d8', 
                width: '100%',
                borderRadius: 0,
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    padding: 4,
                    minHeight: '60vh',
                }}>
                    <Typography variant="h1" sx={{ marginBottom: 2, fontWeight: 'bold' }}>
                        Darian Elwood
                    </Typography>
                    <Typography variant="h2" sx={{ marginBottom: 4, maxWidth: '600px' }}>
                        1st year application development and delivery student at Red River Polytechnic.
                    </Typography>
                    
                    <Box 
                        component="nav"
                        aria-label="Main navigation"
                        sx={{ 
                            display: 'flex', 
                            flexWrap: 'wrap',
                            gap: 2, 
                            justifyContent: 'center',
                        }}
                    >
                        <Chip 
                            label="About" 
                            onClick={aboutClickHandler}
                            sx={{ 
                                color: 'white', 
                                background: activePage === 'about' ? '#4fa3e0' : '#4903fc',
                                '&:hover': { 
                                    color: 'black',
                                    background: '#4fa3e0'
                                },
                                fontSize: '1rem',
                                padding: '8px 16px',
                            }}
                        />
                        <Chip 
                            label="GitHub" 
                            component="a" 
                            href="https://github.com/DarianElwood"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ 
                                color: 'white', 
                                background: '#4903fc', 
                                '&:hover': { 
                                    color: 'black',
                                    background: '#4fa3e0'
                                },
                                fontSize: '1rem',
                                padding: '8px 16px',
                            }}
                        />
                        <Chip 
                            label="LinkedIn" 
                            component="a" 
                            href="https://www.linkedin.com/in/darian-elwood-bb713b330/"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ 
                                color: 'white', 
                                background: '#4903fc', 
                                '&:hover': { 
                                    color: 'black',
                                    background: '#4fa3e0'
                                },
                                fontSize: '1rem',
                                padding: '8px 16px',
                            }}
                        />
                        <Chip 
                            label="Contact" 
                            onClick={contactClickHandler}
                            sx={{ 
                                color: 'white', 
                                background: activePage === 'contact' ? '#4fa3e0' : '#4903fc',
                                '&:hover': { 
                                    color: 'black',
                                    background: '#4fa3e0'
                                },
                                fontSize: '1rem',
                                padding: '8px 16px',
                            }}
                        />
                    </Box>
                </Box>
            </Paper>
        </Box>
    );
}

// about page - display controlled by displayAboutPage boolean 
function AboutPage({ displayAboutPage }) {
    if (!displayAboutPage) {
        return null;
    }
    
    return (
        <Box 
            component="section"
            aria-labelledby="about-heading"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center',
                minHeight: '50vh',
                width: '100%',
                backgroundColor: '#282c34',
                color: 'white',
                padding: 4,
                boxSizing: 'border-box',
            }}
        >
            <Typography 
                id="about-heading"
                variant="h3" 
                sx={{ marginBottom: 3, textAlign: 'center' }}
            >
                About Me
            </Typography>    
            <Box sx={{ maxWidth: '800px', textAlign: 'center' }}>
                <Typography variant="body1" sx={{ marginBottom: 2, lineHeight: 1.6, fontSize: '1.1rem' }}>
                    I am a first year student at Red River Polytechnic in the Application Development and Delivery program.
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: 2, lineHeight: 1.6, fontSize: '1.1rem' }}>
                    I am excited to gain experience working in the tech field.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.6, fontSize: '1.1rem' }}>
                    I have experience with the Python, JavaScript, Java and PHP programming languages, the ReactJS framework, 
                    the Bootstrap framework, MaterialUI, as well as with PostgreSQL, HTML and CSS. Additionally, I am a competent 
                    Linux system administrator.
                </Typography>
            </Box>
        </Box>
    );
}
    
// display contact page - display controlled by displayContactPage boolean
function ContactScreen({ displayContactPage }) {
    if (!displayContactPage) {
        return null;
    }

    return (
        <Box 
            component="section"
            aria-labelledby="contact-heading"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center',
                minHeight: '50vh',
                width: '100%',
                backgroundColor: '#282c34',
                color: 'white',
                padding: 4,
                boxSizing: 'border-box',
            }}
        >
            <Typography 
                id="contact-heading"
                variant="h3" 
                sx={{ marginBottom: 3, textAlign: 'center' }}
            >
                Contact Information
            </Typography>    
            <Box 
                component="address"
                sx={{ 
                    maxWidth: '600px', 
                    textAlign: 'center',
                    fontStyle: 'normal'
                }}
            >
                <Typography variant="body1" sx={{ marginBottom: 2, fontSize: '1.1rem' }}>
                    Email: <Link href="mailto:delwood@academic.rrc.ca" sx={{ color: '#308bd5' }}>delwood@academic.rrc.ca</Link>
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: 2, fontSize: '1.1rem' }}>
                    Cell: <Link href="tel:12045575027" sx={{ color: '#308bd5' }}>+1 (204) 557-5027</Link>
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: 2, fontSize: '1.1rem' }}>
                    Signal: <Link href="https://signal.me/#eu/TSxSg9gLzGUGmfMlqLYA5Jko1ayooDtd0-XrOMnNQr87P4JkiPBEtpTk8gtmG1uO" sx={{ color: '#308bd5' }}>@delwood.92</Link>
                </Typography>
                <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
                    WhatsApp: <Link href="https://wa.me/12045575027" sx={{ color: '#308bd5' }}>+1 (204) 557-5027</Link>
                </Typography>
            </Box>
        </Box>
    );
}

AboutPage.propTypes = {
    displayAboutPage: PropTypes.bool.isRequired
};
    
ContactScreen.propTypes = {
    displayContactPage: PropTypes.bool.isRequired
};

SplashScreen.propTypes = {
    aboutClickHandler: PropTypes.func.isRequired,
    contactClickHandler: PropTypes.func.isRequired,
    activePage: PropTypes.string.isRequired,
};

export default Homescreen;