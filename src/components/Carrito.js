import React from 'react'

import './carrito.css';

import Producto from './Producto';

const Carrito = ({carrito}) => (

    <div className='carrito'>
        <h2>Tu carrito de compras</h2>

        {carrito.length === 0 
        
        ?<p>No hay elementos en el carrito</p>

        : carrito.map(producto => (
            <Producto
                hey = {producto.id}
                producto = {producto}
            />
        ))}
        {/* {carrito.map(producto => (
            <Producto
                hey = {producto.id}
                producto = {producto}
            />
        ))} */}
    </div>
  );

 
export default Carrito;