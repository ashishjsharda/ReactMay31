import React, { Component } from 'react';
class App extends Component {
    state = {
        header:"This is coming from header",
        footer:"This is coming from footer"
      }
    render() { 
        return (<div>
            <h1> {this.state.header}</h1>
            <h1> {this.state.footer}</h1>
        </div>  );
    }
    
}

 
export default App;