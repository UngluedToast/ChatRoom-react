import React from 'react';
import './App.css';
// <<<<<<< victor-ChatForm
import ChatForm from './forms/ChatForm';
import ChatList from './Lists/ChatList';
import UserForm from './forms/UserForm';



class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      messages:['hello'],
      text:'',
      user:''
    }
  }
  render() {
    return (
      <div className="App">
        <ChatList messages={this.state.messages}/>
        <UserForm 
        user={this.state.user}
        handleChange={this._setUser}
        />
        <ChatForm 
        text={this.state.text}
        handleChange={this._setText}
        handleSend={this._sendMessage}
        />
      </div>
    );
  }
  _setText =(text)=>{
    this.setState({
      text
    });
  }
  _setUser=(user)=>{
    this.setState({
      user
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
