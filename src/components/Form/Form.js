import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from '../FirebaseConfig';
import { useState } from 'react';
import './Form.css';
import moment from 'moment/moment';

const initialBuyer = {
	nombre: '',
	apellido: '',
	telefono: '',
	email: '',
}
const initialState = {
	buyer: initialBuyer,
	items: [],
	date: '',
	total: '',
};

export default function BasicTextFields({items, total}) {
    const [values, setValues] = useState(initialState);
	const [buyer, setBuyer] = useState(initialBuyer);
	const [purchaseID, setPurchaseID] = useState('');
	const handleOnChange = (e) => {  
		setBuyer({ ...buyer, [e.target.name]: e.target.value });
		setValues({buyer: buyer, total: total, items: items, date:  moment().format('YYYY-MM-DD HH:mm:ss')})
	};

    const onSubmit = async (e) => {
        e.preventDefault();
        const docRef = await addDoc(collection(db, 'purchases'), {
			values,
		});
        setPurchaseID(docRef.id);
		setBuyer(initialBuyer)
		setValues(initialState);
    }
  return (
    
      <div className='px-3'>
				<TextField className='px-2'
					placeholder='Nombre'
					name='nombre'
					value={buyer.nombre}
					type='text'
					onChange={handleOnChange}
				/>
				<TextField className='px-2'
					placeholder='Apellido'
					name='apellido'
					value={buyer.apellido}
					type='text'
					onChange={handleOnChange}
				/>
				<TextField className='px-2'
					placeholder='Email'
					name='email'
					value={buyer.email}
					type='email'
					onChange={handleOnChange}
				/>
				<TextField className='px-2'
					placeholder='Telefono'
					name='telefono'
					value={buyer.telefono}
					type='text'
					onChange={handleOnChange}
				/>
				<button onClick={onSubmit} className="int__button my-3 mx-2">ENVIAR</button>
			</div>
  );
}
