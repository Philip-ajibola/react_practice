import image from "../../assets/Icon.png"
import style from "./index.module.css"

const  Navbar = ()=>{
    return(
        <>
            <div className={style.nav}>
                <div style={{display: "flex", alignItems:"center"}}>
                    <img src={image} alt="Logo"/>
                    <h2>
                        Nexcent
                    </h2>
                </div>

                <div className={style.midSection}>
                    <p>Home</p>
                    <p>Features</p>
                    <p>Community</p>
                    <p>Blog</p>
                    <p>Pricing</p>
                </div>

                <div className={style.btnSection}>
                    <button style={{color: "#84c886", background: "none", border: "none", fontWeight: "bold"}}>
                        Login
                    </button>

                    <button
                        style={{backgroundColor:"#84c886", border: "none",color: "white", padding: "5px", borderRadius: "3px"}}>
                        SignUp
                    </button>
                </div>
            </div>
        </>
    )
}

export default Navbar