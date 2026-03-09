import './App.jsx';
import Typography from '@mui/material/Typography';
import { Box, Chip, Paper, Link, Stack } from '@mui/material';
import React from 'react';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PortfolioPage from './Portfolio';
import { 
    FaPython, 
    FaJava, 
    FaPhp, 
    FaReact, 
    FaBootstrap, 
    FaLinux 
} from 'react-icons/fa';
import { SiJavascript, SiPostgresql, SiMui } from 'react-icons/si';

const PAGE_META = {
    about: {
        title: 'About | Darian Elwood',
        description: 'Learn about Darian Elwood, a software development student focused on React, Python, and modern web technologies.',
    },
    contact: {
        title: 'Contact | Darian Elwood',
        description: 'Contact Darian Elwood for software roles, freelance opportunities, or collaboration projects.',
    },
    portfolio: {
        title: 'Portfolio | Darian Elwood',
        description: 'Browse portfolio projects by Darian Elwood, including client websites and developer tools.',
    },
};

function setMetaTag(selector, attribute, content) {
    const element = document.querySelector(selector);
    if (!element) {
        return;
    }
    element.setAttribute(attribute, content);
}

// main homescreen element. 
function Homescreen() {
    // Use a single state to track which page is active
    const [activePage, setActivePage] = useState('about'); // Default to 'about'
    
    // click handlers for the about and contact buttons
    function contactClickHandler() {
        setActivePage('contact');
        window.location.hash = 'contact';
    }
    
    function aboutClickHandler() {
        setActivePage('about');
        window.location.hash = 'about';
    }

    function portfolioClickHandler() {
        setActivePage('portfolio');
        window.location.hash = 'portfolio';
    }

    useEffect(() => {
        const normalizeHash = (rawHash) => {
            const hash = rawHash.replace('#', '').toLowerCase();
            if (hash === 'contact' || hash === 'portfolio') {
                return hash;
            }
            return 'about';
        };

        const handleHashChange = () => {
            setActivePage(normalizeHash(window.location.hash));
        };

        handleHashChange();
        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    useEffect(() => {
        const fallback = {
            title: 'Darian Elwood - Software Developer Portfolio',
            description: 'Portfolio website for Darian Elwood, an application development student open to jobs and freelance work.',
        };
        const metadata = PAGE_META[activePage] || fallback;
        document.title = metadata.title;
        setMetaTag('meta[name="description"]', 'content', metadata.description);
        setMetaTag('meta[property="og:title"]', 'content', metadata.title);
        setMetaTag('meta[property="og:description"]', 'content', metadata.description);
        setMetaTag('meta[name="twitter:title"]', 'content', metadata.title);
        setMetaTag('meta[name="twitter:description"]', 'content', metadata.description);
    }, [activePage]);
    
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
                portfolioClickHandler={portfolioClickHandler}
            />
            <ContactScreen displayContactPage={activePage === 'contact'} />
            <AboutPage displayAboutPage={activePage === 'about'} />
            <PortfolioPage displayPortfolioPage={activePage === 'portfolio'} />
            <Box
                component="footer"
                sx={{
                    mt: 'auto',
                    width: '100%',
                    textAlign: 'center',
                    paddingY: 2,
                    borderTop: '1px solid #3a3f48',
                    backgroundColor: '#282c34',
                }}
            >
                <Typography variant="body2" sx={{ color: 'white' }}>
                    {'\u00A9 Darian Elwood 2026'}
                </Typography>
            </Box>
        </Box> 
    );
}

function SplashScreen({ aboutClickHandler, contactClickHandler, portfolioClickHandler }) {
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
                    <Typography component="h2" variant="h2" sx={{ marginBottom: 4, maxWidth: '600px' }}>
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
                            component="a"
                            href="#about"
                            onClick={aboutClickHandler}
                            sx={{ 
                                color: 'white',
                                background: '#4903fc',
                                '&:hover': {
                                    color: 'black',
                                    background: '#4fa3e0'
                                },
                                '&.Mui-focusVisible, &:focus': {
                                    outline: 'none',
                                    boxShadow: 'none',
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
                                textDecoration: 'none',
                                '&:hover': {
                                    color: 'black',
                                    background: '#4fa3e0',
                                    textDecoration: 'none',
                                },
                                '&.Mui-focusVisible, &:focus': {
                                    outline: 'none',
                                    boxShadow: 'none',
                                },
                                '&:visited': {
                                    color: 'white',
                                },
                                '& .MuiChip-label': {
                                    color: 'inherit',
                                    fontSize: '1rem',
                                    fontFamily: 'inherit',
                                    fontWeight: 400,
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
                                textDecoration: 'none',
                                '&:hover': {
                                    color: 'black',
                                    background: '#4fa3e0',
                                    textDecoration: 'none',
                                },
                                '&.Mui-focusVisible, &:focus': {
                                    outline: 'none',
                                    boxShadow: 'none',
                                },
                                '&:visited': {
                                    color: 'white',
                                },
                                '& .MuiChip-label': {
                                    color: 'inherit',
                                    fontSize: '1rem',
                                    fontFamily: 'inherit',
                                    fontWeight: 400,
                                },
                                fontSize: '1rem',
                                padding: '8px 16px',
                            }}
                        />
                        <Chip 
                            label="Contact" 
                            component="a"
                            href="#contact"
                            onClick={contactClickHandler}
                            sx={{ 
                                color: 'white',
                                background: '#4903fc',
                                '&:hover': {
                                    color: 'black',
                                    background: '#4fa3e0'
                                },
                                '&.Mui-focusVisible, &:focus': {
                                    outline: 'none',
                                    boxShadow: 'none',
                                },
                                fontSize: '1rem',
                                padding: '8px 16px',
                            }}
                        />
                        <Chip label="Portfolio"
                            component="a"
                            href="#portfolio"
                            onClick={portfolioClickHandler}
                            sx={{ 
                                color: 'white',
                                background: '#4903fc',
                                '&:hover': {
                                    color: 'black',
                                    background: '#4fa3e0'
                                },
                                '&.Mui-focusVisible, &:focus': {
                                    outline: 'none',
                                    boxShadow: 'none',
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
            id="about"
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
                <LanguageList />
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
            id="contact"
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
                    Email: <Link href="mailto:dellwood546@gmail.com" sx={{ color: '#308bd5' }}>dellwood546@gmail.com</Link>
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

function LanguageList() {
    const technologies = [
        { name: 'Python', icon: <FaPython />, color: '#3776ab' },
        { name: 'JavaScript', icon: <SiJavascript />, color: '#f7df1e' },
        { name: 'Java', icon: <FaJava />, color: '#ed8b00' },
        { name: 'React', icon: <FaReact />, color: '#61dafb' },
        { name: 'PHP', icon: <FaPhp />, color: '#777bb4' },
        { name: 'Bootstrap', icon: <FaBootstrap />, color: '#7952b3' },
        { name: 'Material-UI', icon: <SiMui />, color: '#0081cb' },
        { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#336791' },
        { name: 'Linux', icon: <FaLinux />, color: '#fcc624' }
    ];
    
    return (
        <Stack 
            direction="row" 
            spacing={2} 
            justifyContent="center" 
            flexWrap="wrap"
            sx={{ marginBottom: 3, gap: 2 }}
        >
            {technologies.map((technology) => (
                <Box 
                    key={technology.name}
                    sx={{ 
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        color: 'white',
                        fontSize: '2rem',
                        '&:hover': {
                            color: '#4fa3e0',
                            transform: 'scale(1.1)',
                            transition: 'all 0.3s ease'
                        }
                    }}
                    title={technology.name} // Tooltip on hover
                >
                    {technology.icon}
                    <Typography 
                        variant="caption" 
                        sx={{ 
                            fontSize: '0.8rem', 
                            marginTop: 0.5,
                            opacity: 0.8
                        }}
                    >
                        {technology.name}
                    </Typography>
                </Box>
            ))}
        </Stack>
    )
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
    portfolioClickHandler: PropTypes.func.isRequired,
};

export default Homescreen;