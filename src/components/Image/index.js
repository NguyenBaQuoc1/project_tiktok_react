import { forwardRef } from "react"

const Image = ({...props} , ref)=>{
    return (
        <img {...props} ref={ref}/>
    )
}

export default forwardRef(Image)