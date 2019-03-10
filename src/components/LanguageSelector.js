import React from 'react';


class LanguageSelector extends React.Component{

  onLanguageClick = (event) =>{
    this.props.onLanguageSelect(event.target.value);
    var buttons = document.querySelectorAll('button');

    for(var i =0; i<buttons.length; i++){
      if(buttons[i].value === event.target.value){
        buttons[i].className = "ui brown basic button";
      }
      else{
        buttons[i].className = "ui button";
      }
    }
  }



  render(){
    return(
      <div className ="ui buttons">
        <button id = "1" className = "ui button" value = "en-ru" onClick={this.onLanguageClick}>Russian</button>
        <button id = "2" className = "ui button" value = "en-es" onClick={this.onLanguageClick}>Spanish</button>
        <button id = "3" className = "ui button" value = "en-hi" onClick={this.onLanguageClick}>Hindi</button>
        <button id = "4" className = "ui button" value = "en-zh" onClick={this.onLanguageClick}>Chinese</button>
        <button id = "5" className = "ui button" value = "en-hr" onClick={this.onLanguageClick}>Croatian</button>
        <button id = "6" className = "ui button" value = "en-la" onClick={this.onLanguageClick}>Latin</button>
        <button id = "7" className = "ui button" value = "en-ar" onClick={this.onLanguageClick}>Arabic</button>
        <button id = "8" className = "ui button" value = "en-ur" onClick={this.onLanguageClick}>Urdu</button>
        <button id = "9" className = "ui button" value = "en-gu" onClick={this.onLanguageClick}>Gujrati</button>
        <button id = "10" className = "ui button" value = "en-af" onClick={this.onLanguageClick}>Africans</button>
        <button id = "11" className = "ui button" value = "en-de" onClick={this.onLanguageClick}>German</button>
        <button id = "12" className = "ui button" value = "en-da" onClick={this.onLanguageClick}>Danish</button>
        <button id = "13" className = "ui button" value = "en-cs" onClick={this.onLanguageClick}>Czech</button>
      </div>
    );
  }
}
export default LanguageSelector;
