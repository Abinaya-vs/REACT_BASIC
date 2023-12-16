import React, { Component } from 'react'

export class ErrorBon extends Component {
state = {
    hasError: false
}
static getDerivedStateFromError(error) {
    return {
        hasError: true
    }
}

 render() {
    if(this.state.haserror === true) {
        return <h1> Something went wrong</h1>
    }
    return this.props.childern
}
 }

