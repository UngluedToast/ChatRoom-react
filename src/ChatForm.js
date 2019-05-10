import React from 'react'

export default function ChatForm({text, handleChange,handleSend}) {
  return (
    <div>
      <form>
          <input value ={text} onChange={(e)=>{handleChange(e.target.value)}}/>
      </form>
      <button onClick={handleSend}>
          Send
      </button>
    </div>
  )
}
