import React from 'react';
import "./app.css";



class InputArea extends React.Component{
  state = {term: ''};

 onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onTextSubmit(this.state.term);
  };

  onInputChange = (event) =>{
    this.setState({term: event.target.value});
  };

  render(){
    return(
      <div className = "search-bar ui segement">
        <form className = "ui form" onSubmit = {this.onFormSubmit}>
          <div className="field">
            <label>Enter your text below</label>
            <input  id = "inputText" value = {this.state.term} onChange = {this.onInputChange} type = "text" />
            <input className="ui primary basic button" type = "submit" value = "Submit"></input>
          </div>
        </form>
      </div>
    );
  }
}

export default InputArea;
