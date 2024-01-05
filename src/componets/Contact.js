


import e from './web 3.jpeg'

const Contact = ()=>{

    let style={
        div:{ padding:30, backgroundColor:'orange',},
        h1:{color:'blue'},
        p:{color:'black'}
    }

    return(
        <>
        <div style={style.div}>
            <h1 style={style.h1}>Contact</h1>
            <p style={style.p}>lorem ipsun</p>
            <img src={e} width={300}></img>
        </div>
        </>
    )
}
export default Contact

