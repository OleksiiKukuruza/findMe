import 'index.html'; // eslint-disable-line
import React from 'react';
import { render } from 'react-dom';
import Layout from './components/Layout';

const app = document.getElementById('root');
render(<Layout />, app);
