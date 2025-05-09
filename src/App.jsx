import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Homescreen from './Homescreen';
//import React, { StrictMode } from 'react';
import React from 'react';
import {createRoot} from 'react-dom/client'
import './index.css';


createRoot(document.getElementById('root')).render(
        <Homescreen />
        
);
