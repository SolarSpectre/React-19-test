//LOAD CSS IN COMPONENTS!!!
//Replace for the forwardRef - new prop ref //
import { useRef } from "react"
function Input ({inputRef}){
    return <input ref={inputRef} placeholder="John doe.." type="text" />
}
export function Form(){
    const inputRef = useRef()
    const focusInput =()=>{
        if(inputRef.current){
            inputRef.current.focus()
        }
    }
    return(
        <>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css"/>
            <form>
                <Input inputRef={inputRef}/>
            </form>
            <button onClick={focusInput}>Focus input</button>
        </>
    )
}