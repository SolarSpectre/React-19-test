import {use, useState} from 'react';

export function UseFetchExample (){
    const[name, setName] = useState('')
    return(
        <div>
            <form>
                <input 
                 placeholder='Ej. Pikachu'
                 value={name}
                 onChange={(e)=>setName(e.target.value)}
                />
            </form>
        </div>
    )
}