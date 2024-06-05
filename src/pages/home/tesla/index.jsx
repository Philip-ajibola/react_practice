import image from "./../../../assets/image 9.png"
import image1 from "./../../../assets/Logo.png"
import image2 from "./../../../assets/Logo (1).png"
import image3 from "./../../../assets/Logo (2).png"
import image4 from "./../../../assets/Logo (3).png"
import image5 from "./../../../assets/Logo (4).png"
import image6 from "./../../../assets/Logo (5).png"
import image7 from "./../../../assets/Logo (6).png"
import style from "./index.module.css"


export const Tesla = ()=>{
    return(
        <>
            <div className={style.motherDiv}>
                <div>
                    <img src={image} alt="Tesla"/>
                </div>
                <div className={style.secondDiv}>
                    <p>
                        Maecenas dignissim justo eget nulla rutrum molestie.
                        Maecenas lobortis sem dui, vel rutrum risus tincidunt
                        ullamcorper. Proin eu enim metus. Vivamus sed libero
                        ornare, tristique quam in, gravida enim. Nullam ut molestie
                        arcu, at hendrerit elit. Morbi laoreet elit at ligula
                        molestie, nec molestie mi blandit. Suspendisse cursus tellus
                        sed augue ultrices, quis tristique nulla sodales. Suspendisse
                        eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
                        Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
                        Quisque vulputate odio neque, eget efficitur libero condimentum id.
                        Curabitur id nibh id sem dignissim finibus ac sit amet magna.
                    </p>
                    <p className={style.p2}>
                        Tim Smith
                    </p>
                    <p style={{color: "#9da6af"}}>
                        British Dragon Boat Racing Association
                    </p>
                    <div className= {style.secondDivFirstChild}>
                        <div className={style.img}>
                            <img src={image1} alt="Logo"/>
                            <img src={image2} alt="Logo"/>
                            <img src={image3} alt="Logo"/>
                            <img src={image4} alt="Logo"/>
                            <img src={image5} alt="Logo"/>
                            <img src={image6} alt="Logo"/>
                            <img src={image7} alt="Logo"/>
                        </div>
                        <div>
                            <p style={{color: "#4caf4f"}}>Meet all Customers </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}