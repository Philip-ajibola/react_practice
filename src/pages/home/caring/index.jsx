import image from "../../../assets/Down.png"

import style from "./index.module.css"
import {Helping} from "./data.js";
export const Caring =()=>{
    return(
        <>
            <div className={style.motherDiv}>
                <div className={style.firstDiv}>
                    <h1 style={{marginBottom: "0px"}}> Caring is the new marketing </h1>
                    <p className={style.p1}>The Nexcent blog is the best place to
                        read about the latest membership insights, trends and more. See who`s
                        joining the community, read about how our community are
                        increasing their membership income and lot`s more.
                    </p>
                </div>
                <div className={style.secondDiv}>
                    {Helping.map(
                        (value, index) => (
                            <div className={style.createAwareness} key={index}>
                                <img className={style.img} src={value.image}/>
                                <div className={style.onPicture}>
                                    <p className={style.writing}>
                                        {value.text}
                                    </p>
                                    <div className={style.readMore}>
                                        <p className={style.readMoreText}>Readmore </p>
                                        <img src={value.image1}/>
                                    </div>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>


            <div style={{
                margin: "25px 0",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#f5f7fa",
                height: "100px",
                marginBottom: 0,
            }}>
                <button
                    style={{
                        padding: " 15px 15px",
                        border: "none",
                        backgroundColor: "#4caf4f",
                        color: "white",
                        borderRadius: "5px"
                    }}>
                    Get a Demo <img src={image} alt=""/>
                </button>
            </div>

        </>
    )
}