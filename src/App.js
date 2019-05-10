import React from 'react';
import './App.css';
// <<<<<<< victor-ChatForm
import ChatForm from './forms/ChatForm'
import ChatList from './Lists/ChatList'



class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      messages:['hello'],
      text:''
    }
  }
  render() {
    return (
      <div className="App">
        <ChatList messages={this.state.messages}/>
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
    console.log(text)
    this.setState({
      text
    });
  }
  _sendMessage=()=>{
    // console.log('_sendMessage is called')
    // console.log(messages)

    const newText = this.state.text
    let newArray = [...this.state.messages, newText]
    this.setState( {
      messages: newArray
    });
    this.setState({
      text:''
    })
  }
}

export default App;
