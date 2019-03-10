import React from 'react';
import './app.css'

class OutputArea extends React.Component{

  render(){
    return(
      <div className = "  ui segement">
        <form className = "ui form" >
        <div className = "field">
        <label id = "outputArea">Translated text</label>
        <input value= {this.props.Translated[0]} type="text"/>
        </div>
        </form>
      </div>
    );
  }

}

export default OutputArea;
