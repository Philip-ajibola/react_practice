import style from "./index.module.css"
import image from "../../../assets/Illustration.png"
export  const Hero = ()=>{
return(
    <>
        <div className={style.heroSection}>
            <div>
                <h2>
                    Lesson and insight <span style={{ display: "block",color: "#4caf4f"}}>from 8 years</span>
                </h2>

                <p>
                    where to grow your business as a photographer: site or social Media
                </p>

                <button style={{borderRadius: "3px", backgroundColor:" #4caf4f", padding: "15px 30px",border: "none"}}>
                    Register
                </button>
            </div>
            <div className={style.lastDiv}>
                <img className={style.img} src={image} alt="Illustration"/>
            </div>
        </div>
    </>
)
}