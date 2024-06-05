import style from "./index.module.css"
import image1 from "../../../assets/Logo.png"
 import image2 from "../../../assets/Logo (1).png"
 import image3 from "../../../assets/Logo (2).png"
 import image4 from "../../../assets/Logo (3).png"
 import image5 from "../../../assets/Logo (4).png"
 import image6 from "../../../assets/Logo (5).png"
 import image7 from "../../../assets/Logo (6).png"

export const Client = ()=>{
    return(
        <>
            <div>
                <div>
                    <div className={style.clientSection}>
                        <p style={{fontFamily: 'Arial Black',fontWeight: "bold",fontSize: "30px",marginBottom: "0px"}}>Our
                            Clients</p>
                        <p style={{marginTop: "2px",marginBottom: "12px"}}> we have been working with some Fortune 500+
                            clients</p>
                    </div>
                    <div className={style.logoSection}>
                        <img src={image1} alt="Logo"/>
                        <img src={image2} alt="Logo"/>
                        <img src={image3} alt="Logo"/>
                        <img src={image4} alt="Logo"/>
                        <img src={image5} alt="Logo"/>
                        <img src={image6} alt="Logo"/>
                        <img src={image7} alt="Logo"/>
                    </div>
                    <div className={style.clientSection2}>
                        <p className={style.p1}>Manage Your Enter Community </p>
                        <p className={style.p1}>In A Single System</p>
                        <p className={style.p2}>Who is Nextcent suitable for </p>

                    </div>
                </div>
            </div>
        </>
    )
}