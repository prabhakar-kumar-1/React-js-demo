
import d from './web 2.webp'

const Services = ()=>{

    let style={
        div:{ padding:30, backgroundColor:'red',  marginBottom:20},
        h1:{color:'blue'},
        p:{color:'white'}
    }

    return(
        <>
        <div style={style.div}>
            <h1 style={style.h1}>Services</h1>
            <p style={style.p}>lorem ipsun</p>
            <img src={d} width={300}></img>
        </div>
        </>
    )
}
export default Services

