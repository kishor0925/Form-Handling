import React from 'react'

const Form = () => {

    function handleForm(event){
        event.preventDefault();
        const form = event.target;
        // const {name, age, email , phno} = form.[name].value;

        const name = form.name.value;
        const age = form.age.value;
        const email = form.email.value;
        const tel = form.tel.value;


        if(name === "" || age === "" || email === "" || tel === ""){
            alert('pls fill all the details')
        }else{

            const details = {
                name,
                age,
                email,
                tel
            };

            fetch("http://localhost:5666/upload",  {
                method : 'POST',
                headers : {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify(details)
            
            })
            .then((res) => res.json())
            .then((data) => {
                alert('alert added succesfully');
                form.reset();
                window.location.href = "/update"
            })
            .catch( (error) => {
                console.log('Upload Error', error);
                alert('Failed to upload');
            });
        }

        


    };
  return (
    <form className='form container' onSubmit={handleForm}>
        <div >

            <h2 className='text-center'>Details form</h2>
            <label className='form-label' >Name</label>
            <input type="text" className='form-control' name="name" placeholder='Enter your Name' />


            <label className='form-label' >Age : </label>
            <input type="number" className='form-control' name="age" placeholder='Enter your Age' />


            <label className='form-label' >Email</label>
            <input type="email" className='form-control' name="email" placeholder='Enter your Email' />


            <label className='form-label' >ph no : </label>
            <input type="tel" className='form-control' name="tel" placeholder='Enter your Mobile Number' />


            <button type='submit' className='btn btn-primary m-5 px-5 d-flex justify-content-center align-items-center'>
                upload
            </button>
        </div>  
      
    </form>
  )
}

export default Form
