import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Edit = () => {

    const [data , setData] = useState({

    })
    const {id} = useParams();
    const navigate =  useNavigate()

    useEffect( () => {
        fetch(`http://localhost:5222/getdata/${id}`)
        .then( (res) => res.json())
        .then((info) => setData(info))
        .catch((err) => console.log(err.message))
    },[])

    function handleUpload(event){
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const age = form.age.value;
        const email = form.email.value;
        const tel = form.tel.value;

        if(name === "" || age === "" || email === "" || tel === ""){
            alert('Pls update all the required details..')
        }
        else
        {
            const data = {name, email, age, tel};

            fetch(`http://localhost:5222/update/${id}`, {
                method : 'PATCH',
                headers : {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => {
                console.log('data modified');
                alert('data modified in db')
                navigate('/update')
             })
        }
        

    }
  return (
    <div className="form-wrapper">
      <form className='form-card' onSubmit={handleUpload}>

        <h1 className="title">Update Form</h1>

        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name"  defaultValue={data.name}/>
        </div>

        <div className="form-group">
          <label>Age</label>
          <input type="number" name="age" defaultValue={data.age} />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" defaultValue={data.email} />
        </div>

        <div className="form-group">
          <label>Phone</label>
          <input type="tel" name="tel"  defaultValue={data.tel}/>
        </div>

        <button type="submit">Update Info</button>

      </form>
    </div>
  )
}

export default Edit
