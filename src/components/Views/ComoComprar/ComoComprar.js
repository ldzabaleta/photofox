import React from 'react'
import './ComoComprar.css'

const ComoComprar = () => {
  return (
    <div>
      <div className='text-center my-5'>
        <h1>Cómo comprar</h1>
        <p className='lead my-md-4 text-center pb-4'>
                Paso a paso: cómo adquirir nuestros productos.
        </p>
        <p className='my-md-4'>
                                        <div className='text-center'>
                                            <p>1. Elegí el producto que quieras comprar haciendo clic sobre su imagen.</p>
                                            <p>2. Hacé clic en el botón de "Agregar al carrito". Esto agregará el producto a tu carrito y te llevará al mismo.</p>
                                            <p>3. Podés seguir comprando y agregando otros productos al carrito o procesar ese pedido.</p>
                                            <p>4. Completá tu email para poder seguir con el proceso de compra, si ya tenés una cuenta registrada en nuestra tienda online, coloca "continuar".</p>
                                            <p>5. Seleccioná el medio de pago y hacé clic en "Finalizar". Recordá que si elegís pagar por transferencia bancaria tenés un 10% de descuento sobre el precio publicado.</p>
                                            <p>6. Después de confirmar la compra recibirás un correo de nuestra parte. Ese no será un comprobante de pago.</p>
                                            <p>7. Una vez acreditado el pago, haremos el envío por mail correspondiente de los productos que hayas comprado.</p>
                                        </div>
                                        <p> <strong>Aclaración: en caso de comprar por MercadoPago, necesitarás tener una cuenta en dicha plataforma. Es muy simple y fácil tener una.</strong></p>
                                </p>
      </div>
    </div>
  )
}

export default ComoComprar
