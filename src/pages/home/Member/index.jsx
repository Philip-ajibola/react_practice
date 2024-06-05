
import style from "./index.module.css"
import {members} from "./data.js";

export const Member = ()=>{
    return(
        <>
            <div className={style.member2}>
                {members.map(
                    (value,index )=> (
                        <div className={style.mainMember} key={index}>
                            <div className={style.member}>
                                <img src={value.image} alt={"icon 1"}/>
                            </div>
                            <h3>{value.title}</h3>
                            <p>{value.text}</p>
                        </div>
                    )
                )}
            </div>
        </>

    )
}