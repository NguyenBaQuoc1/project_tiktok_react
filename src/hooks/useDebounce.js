import { useEffect , useState } from 'react'

function useDebounce(value , delay) {
    const [ debounceValue , setdebounceValue] = useState(value)

    useEffect(()=>{
        const handler = setTimeout(()=>setdebounceValue(value),delay)

        return ()=> clearTimeout(handler)
    },[value])



    return debounceValue
}

export default useDebounce