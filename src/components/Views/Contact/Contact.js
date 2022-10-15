import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../FirebaseConfig';
// import './contact.css'

const initialContact = {
	nombre: '',
	email: '',
  mensaje: '',
}



export default function FullWidthTextField() {
  const [contact, setContact] = useState(initialContact);

  const handleOnChange = (e) => {  
		setContact({ ...contact, [e.target.name]: e.target.value });
	};

  const onSubmit = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, 'contacts'), {
			contact,
		})
    setContact(docRef.id);
    setContact(initialContact)
}
  return (
    <Box className='d-flex flex-column'
      sx={{
        width:3000,
        maxWidth: '100%'
      }}
    >
      <div className='text-center my-5'>
        <h1>Contactanos</h1>
        <h3 className='lead my-md-4 text-center'>
          Dejanos tu mensaje y te responderemos a la brevedad
        </h3>
      </div>
      <div className='text-center imput-size'>
        <div className='px-4 pb-2'>
          <TextField className='px-2 pb-2'
              style ={{width: '50%'}}
              placeholder='Nombre'
              name='nombre'
              value={contact.nombre}
              type='text'
              onChange={handleOnChange}
            />
        </div>
        <div className='px-4 pb-2'>
          <TextField className='px-2'
              style ={{width: '50%'}}
              placeholder='Email'
              name='email'
              value={contact.email}
              type='email'
              onChange={handleOnChange}
            />
        </div>
        <div className='px-4 pt-2 pb-2'>
          <TextField className='px-2'
            style ={{width: '50%'}}
              multiline
              rows={4}
              placeholder='mensaje'
              name='mensaje'
              value={contact.mensaje}
              type='text'
              onChange={handleOnChange}
            />
        </div>
        <div className='px-4 pt-3'>
          <button onClick={onSubmit} className="int__button my-3 mx-2">ENVIAR</button>
        </div>
      </div>      
    </Box>
  );
}
