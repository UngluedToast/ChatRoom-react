import React from 'react'

function UserForm({user,handleChange}) {
    console.log('look at me', user)
  return (
    <form>
        <input 
        value={user}
        onChange={(e)=>{handleChange(e.target.value)}}
        />
    </form>
  )
}

export default UserForm;