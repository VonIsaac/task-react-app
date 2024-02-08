
import { forwardRef } from "react"
 const Input = forwardRef( function Input({label, textarea, ...props}, ref){
       let cssClases = " w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:text-stone-600"
    return(
        <p>
            <label htmlFor="">
                {label}
            </label>
            {textarea ? <textarea {...props} className= {cssClases} ref={ref} />: <input  {...props} className={cssClases} ref={ref}/>}
        </p>
    )
})

export default Input