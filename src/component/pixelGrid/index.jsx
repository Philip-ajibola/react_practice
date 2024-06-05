import style from "./index.module.css"
// eslint-disable-next-line react/prop-types
export const PixelGrid=({image,message,message1})=>{
    return(
        <>
            <div className={style.mainContainer1} >
                <div className={style.designDesign} >
                    <img className={style.image} src={image} alt="Login page;"/>
                    <div className={style.innerDiv}>
                        <p className={style.p1}>{message1}</p>
                        <p>
                            {message}
                        </p>
                        <button
                            className={style.btn}>
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}