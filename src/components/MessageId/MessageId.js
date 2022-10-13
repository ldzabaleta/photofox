import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const MessageId = ({purchaseID}) => {
    return (
        <Stack sx={{ width: '40%', paddingTop:'10px' }} spacing={2}>
            <Alert severity= 'success'>
                ¡Gracias por tu compra! 
                El nro. de transacción es: {purchaseID}
            </Alert>
        </Stack>
    )
}

export default MessageId;