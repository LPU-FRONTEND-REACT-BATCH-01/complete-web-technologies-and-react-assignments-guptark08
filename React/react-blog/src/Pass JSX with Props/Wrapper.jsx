export default function Wrapper({children}) {
    return(
        <div style={{color:"red", border:"2px solid red", width:"200px", textAlign:"center"}}>
            {children}
        </div>
    )
}
