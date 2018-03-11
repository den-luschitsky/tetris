import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM, { render, ReactDOMComponentTree } from 'react-dom';
import configureStore from './store/init';
import RootContainer from './containers/RootContainer';
import $ from 'jquery';

const rootNode = document.getElementById('__react-mount-container');

const store = configureStore();

render( <
    Provider store = { store } >
    <
    RootContainer / >
    <
    /Provider>,
    rootNode
);