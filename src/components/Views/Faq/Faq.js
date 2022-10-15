
import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
  
    
    <div className='pb-5 text-center'>
        <div className='text-center my-5'>
          <h1>Preguntas frecuentes</h1>
        </div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>¿Cómo instalo los presets de Lightroom?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Se pueden instalar en el celular con la app gratuita Adobe Lightroom y también en sus computadoras con el programa Adobe Lightroom Classic CC.
          </Typography>
        <Typography className='pt-2'>
           El pack de presets se entrega por mail y viene con dos instructivos: para instalarlos tanto en la app del celular como en la computadora.

          <iframe className='pt-4 pb-4' width="900" height="509" src="https://www.youtube.com/embed/pjb1ZbwJgiE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>No recibí el mail con mi compra</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          ¿Ya revisaste tu carpeta de spam? Es posible que los mails de tu pedido se hayan enviado ahí por error.
          </Typography>
          <Typography className='pt-2'>
          Si es tu caso, ¡asegurate de marcarnos como un remitente seguro para el futuro!
          </Typography>
          <Typography className='pt-2'>
          En el caso de que hayas abonado por medio de Paypal, asegurate de revisar la bandeja de entrada de la cuenta de correo electrónico asociada con la cuenta de aquella plataforma.
          </Typography>
          <Typography className='pt-2'>
          <Link to='/contact'>O ponete en contacto con nuestro equipo de soporte.</Link>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>¿Qué promociones tienen?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Abonando por transferencia bancaria tenemos un 10% OFF sobre el final de la compra. Además, vas a encontrar algunos códigos de descuento en nuestra tienda. ¡Ambos son acumulables!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>Me encuentro fuera del país</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Para compras desde fuera del territorio argentino podés abonar a través de Paypal. Para más información escribinos por las <Link to='/contact'>vías de contacto.</Link>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
