import image1 from "../../../assets/Icon (1).png"
import image2 from "../../../assets/Icon (4).png"
import image3 from "../../../assets/Icon (2).png"
import image4 from "../../../assets/Icon (3).png"
import style from "./index.module.css"

export const Helping = ()=>{
    return(
        <>
            <div className={style.motherDiv}>
                <div>
                    <p className={style.p1}>Helping A Local </p>
                    <p className={style.p2}>business reinvented itself</p>
                    <p className={style.p3}>we reached here with our hard work and dedication</p>
                </div>
                <div className={style.secondDiv}>
                    <div className={style.secondDiv1}>
                        <div className={style.secondDivChild}>
                            <div className={style.clientSection3}>
                                <div className={style.pictureDiv}>
                                    <img src={image1} alt=""/>
                                </div>
                                <div className={style.pictureDiv1}>
                                    <p className={style.paragraph1}>2,234,341</p>
                                    <p className={style.paragraph2}>Members</p>
                                </div>
                            </div>
                            <div className={style.clientSection3}>
                                <div className={style.pictureDiv}>
                                    <img src={image2} alt=""/>
                                </div>
                                <div className={style.pictureDiv1}>
                                    <p className={style.paragraph1}>828,867</p>
                                    <p className={style.paragraph2}>club</p>
                                </div>
                            </div>
                        </div>
                        <div className={style.secondDivChild}>
                            <div className={style.clientSection3}>
                                <div className={style.pictureDiv}>
                                    <img src={image3} alt=""/>
                                </div>
                                <div className={style.pictureDiv1}>
                                    <p className={style.paragraph1}>46,367</p>
                                    <p className={style.paragraph2}>Event Booking</p>
                                </div>
                            </div>
                            <div className={style.clientSection3}>
                                <div className={style.pictureDiv}>
                                    <img src={image4} alt=""/>
                                </div>
                                <div className={style.pictureDiv1}>
                                    <p className={style.paragraph1}>1,926,436</p>
                                    <p className={style.paragraph2}>Payments</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}