import React from 'react' ;
import { useSelector, useDispatch } from 'react-redux' ;

// IMPORTA LAS ACCIONES A DESPACHAR
import { increment } from '../../../redux/slice';

export default function Pruebaredux() {

    // CONSULTA EL GLOBAL STORE
    const counter  = useSelector((state) => state.counter.value)

    // INICIALIZA EL DESPACHADOR DE REDUX
    const dispatch = useDispatch()

  return (
    <>
        <div>Pruebaredux - {counter}</div>

        <button onClick={()=> dispatch(increment())}>Click aqui</button>
    </>
  )
}
