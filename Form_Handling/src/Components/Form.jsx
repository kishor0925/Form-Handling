import React from 'react'
import './From.css'

const Form = () => {

  function handleSubmit(event){
    event.preventDefault();
    const datas = event.target;

    const name = datas.name.value;
    const age = datas.age.value;
    const email = datas.email.value;
    const tel = datas.tel.value;

    if(name === "" || age === "" || email === "" || tel === ""){
        alert('pls fill all required details..')
    }
    else
    {
        const data = {
            name,
            age,
            email,
            tel
        }
       fetch('http://localhost:5222/upload' ,{
          method : 'POST',
          headers : {
            'Content-Type' : 'application/json'
          },
          body : JSON.stringify(data)
       })
       .then((res) => res.json())
       .then((data) => {
        console.log('Form upload successfully')
    })
    }
  }

  return (
    <div className="form-wrapper">
      <form className='form-card' onSubmit={handleSubmit}>

        <h1 className="title">Personal Details Form</h1>

        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" />
        </div>

        <div className="form-group">
          <label>Age</label>
          <input type="number" name="age" />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" />
        </div>

        <div className="form-group">
          <label>Phone</label>
          <input type="tel" name="tel" />
        </div>

        <button type="submit">Submit</button>

      </form>
    </div>
  )
}

export default Form