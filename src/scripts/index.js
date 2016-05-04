// Node Modules
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// Components
import { App } from './app'

// Scss entry point
require('../scss/base.scss');

// App entry point
ReactDOM.render( <App /> , document.getElementById( 'app' ) )
