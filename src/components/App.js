import React from 'react';
import InputArea from './InputArea';
import OutputArea from './OutputArea';
import LanguageSelector  from './LanguageSelector';
import translate from '../apis/translate';
import './app.css';


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      translatedText: [],
      lang: ""
    };
  }

  onLanguageSelection = (term) =>{
    this.setState({lang: term})
  }



  onTextSubmit = async (term) =>{
    if (term === ''){
      this.setState({translatedText: [""]})
    }
    else{
      const response = await translate.get('',{
        params: { text: term, lang: this.state.lang }
      })
      this.setState({ translatedText: response.data.text });
    }

  };

  render(){
    return(
      <div className = "ui container">
      <h2>Your Personal Translator</h2>
      <div id = "divOfLanguageSelector">
        <LanguageSelector onLanguageSelect = {this.onLanguageSelection} />
      </div>
      <div id = "divOfInputArea">
        <InputArea onTextSubmit = {this.onTextSubmit} />
      </div>
      <div id = "divOfOutputArea">
        <OutputArea Translated={this.state.translatedText} />
      </div>



      </div>



    );

  }
}

export default App;
