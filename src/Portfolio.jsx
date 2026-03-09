import React from 'react';
import { Box, Typography, Card, CardContent, Grid, Link, CardMedia } from '@mui/material';
import PropTypes from 'prop-types';


function Portfolio({ displayPortfolioPage }) {
    if (!displayPortfolioPage) {
        return null;
    }

    return (
            <Box 
            component="section"
            id="portfolio"
            aria-labelledby="portfolio-heading"
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
                    id="portfolio-heading"
                    variant="h3" 
                    sx={{ marginBottom: 3, textAlign: 'center' }}
                >
                    Portfolio
                </Typography>
                <Grid container spacing={3} justifyContent="center">
                    <Grid item xs={12} sm={10} md={6} lg={5} sx={{ display: 'flex' }}>
                        <Card
                            sx={{
                                backgroundColor: '#1f232b',
                                color: 'white',
                                border: '1px solid #4903fc',
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <Box
                                component="a"
                                href="https://jemwinnipeg.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{ display: 'block' }}
                            >
                                <CardMedia
                                    component="img"
                                    image="/jem-screenshot.webp"
                                    alt="JEM Property Maintenance website screenshot"
                                    sx={{
                                        width: '100%',
                                        height: { xs: 400, sm: 500 },
                                        objectFit: 'cover',
                                        objectPosition: 'top center',
                                        borderBottom: '1px solid #2e3440',
                                    }}
                                />
                            </Box>
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography variant="h6" sx={{ marginBottom: 1.5 }}>
                                    JEM Property Maintenance Website.
                                </Typography>
                                <Typography variant="body1" sx={{ marginBottom: 1 }}>
                                    My first paid project. I was hired to build a website for a property maintenance company.
                                </Typography>
                                <Typography variant="body1" sx={{ marginBottom: 1 }}>
                                    Built with HTML, CSS, and JavaScript.
                                </Typography>
                                <Typography variant="body1" sx={{ marginBottom: 1 }}>
                                    Frontend is built with HTML, CSS, and JavaScript. The backend is built with NodeJS. It is hosted on Vercel and Railway.
                                </Typography>
                                <Typography variant="body1">
                                    Link:{' '}
                                    <Link
                                        href="https://jemwinnipeg.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={{ color: '#4fa3e0' }}
                                    >
                                        https://jemwinnipeg.com/
                                    </Link>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={10} md={6} lg={5} sx={{ display: 'flex' }}>
                        <Card
                            sx={{
                                backgroundColor: '#1f232b',
                                color: 'white',
                                border: '1px solid #4903fc',
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <Box
                                component="a"
                                href="https://github.com/DarianElwood/AddressComplete"
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{ display: 'block' }}
                            >
                                <Box
                                    sx={{
                                        width: '100%',
                                        height: { xs: 240, sm: 300 },
                                        borderBottom: '1px solid #2e3440',
                                        background: 'linear-gradient(135deg, #4903fc 0%, #4fa3e0 100%)',
                                    }}
                                />
                            </Box>
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography variant="h6" sx={{ marginBottom: 1.5 }}>
                                    AddressComplete
                                </Typography>
                                <Typography variant="body1" sx={{ marginBottom: 1 }}>
                                    A Python wrapper for the Canada Post AddressComplete API.
                                </Typography>
                                <Typography variant="body1" sx={{ marginBottom: 1 }}>
                                    Features include fast address search, detailed address retrieval, and robust typed error handling.
                                </Typography>
                                <Typography variant="body1" sx={{ marginBottom: 1 }}>
                                    Built with Python and packaged for PyPI.
                                </Typography>
                                <Typography variant="body1">
                                    Link:{' '}
                                    <Link
                                        href="https://github.com/DarianElwood/AddressComplete"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={{ color: '#4fa3e0' }}
                                    >
                                        github.com/DarianElwood/AddressComplete
                                    </Link>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
    );
}

Portfolio.propTypes = {
    displayPortfolioPage: PropTypes.bool.isRequired,
};

export default Portfolio;