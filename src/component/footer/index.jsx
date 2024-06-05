import image1 from "../../assets/Icon.png"
import image2 from "../../assets/Social Icons.png"
import image3 from "../../assets/Social Icons1.png"
import image4 from "../../assets/Socia2l Icons.png"
import image5 from "../../assets/Social3 Icons.png"
import image6 from "../../assets/send.png"
import style from "./index.module.css"
const Footer = ()=>{
    return (
        <>
            <footer className={style.footer}>
                <div style={{display: "flex", alignItems:"flex-start",justifyContent:"start",flexDirection:"column"}}>
                    <div style={{display: "flex", alignItems:"center"}}>
                        <img src={image1} alt="logo"/>
                        <p style={{fontWeight:"bold",fontSize:"30px"}}>Nexcent</p>
                    </div>
                    <p>Copyright © 2020 Nexcent ltd. <span style={{display: "block"}}>All rights reserved</span></p>
                    <div style={{display:"flex","justifyContent":"space-evenly",alignItems:"center", gap:"20px",marginTop:"30px"}}>
                        <img src={image2} alt="icon"/>
                        <img src={image3} alt="icon"/>
                        <img src={image4} alt="icon"/>
                        <img src={image5} alt="icon"/>
                    </div>
                </div>
                <div className={style.footerSider}>
                    <div className={style.footerSider1}>
                        <div><h4>Company</h4></div>
                        <p>About us</p>
                        <p>Blog</p>
                        <p>Contact us</p>
                        <p>Pricing</p>
                        <p>Testimonials</p>
                    </div>
                    <div className={style.footerSider2}>
                        <div><h4>Support</h4></div>
                        <p>Help center</p>
                        <p>Terms of service</p>
                        <p>Legal</p>
                        <p>Privacy policy</p>
                        <p>Status</p>
                    </div>
                    <div className={style.footerSider3}>
                        <h4>Stay up to date</h4>
                        <label>
                            <input placeholder="Your email address" className={style.input}/>
                            <img src={image6} className={style.image} alt="image"/>
                        </label>
                    </div>
                </div>

            </footer>
        </>
    )
}
export default Footer