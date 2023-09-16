import React from 'react'

const Crud = () => {
  return (
    <div>
      <h1 >Crud</h1>
      <p>CRUD refers to the four basic operations a software application should be able to perform –<span style={{fontWeight:'700'}}> Create</span>, <span style={{fontWeight:'700'}}>Read</span>,<span style={{fontWeight:'700'}}>Update</span> , and <span style={{fontWeight:'700'}}>Delete</span>.</p>

       <p> In such apps, users must be able to create data, have access to the data in the UI by reading the data, update or edit the data, and delete the data.</p>

        <p>In full-fledged applications,<span style={{fontWeight:'700'}}> CRUD apps consist of 3 parts: an API (or server), a database, and a user interface (UI)</span>.</p>

       <p> The API contains the code and methods, the database stores and helps the user retrieve the information, while the user interface helps users interact with the app. </p>

        <p>You can make a CRUD app with any of the programming languages out there. And the app doesn’t have to be full stack – you can make a CRUD app with client-side JavaScript.</p>

       <p> In fact, the app with which I will be showing you how create, read, update and delete operations work is made with client-side JavaScript.</p>

       <p> Each letter in the CRUD acronym has a corresponding HTTP request method.</p>
    </div>
  )
}

export default Crud
