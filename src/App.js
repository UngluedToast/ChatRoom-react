import React from 'react';
import logo from './logo.svg';
import './App.css';
// <<<<<<< victor-ChatForm
import ChatForm from './ChatForm';
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      messages:[],
      text:''
    }
  }
  render() {
    return (
      <div className="App">
        <ChatForm 
        text={this.state.text}
        handleChange={this._setText}
        handleSend={this._sendMessage}
        />
      </div>
    );
  }
  _setText =(text)=>{
    console.log('_setText is called')
    this.setState({
      text
    });
  }
  _sendMessage=(messages)=>{
    console.log('_sendMessage is called')
    this.setState({
      messages: this.state.text
    })
  }
}

export default App;
