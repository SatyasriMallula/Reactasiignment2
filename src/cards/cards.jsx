import React from "react";
import styles from './index1.module.css'
function Card(props){
    const {card}=props
    return(
        <div className={styles.card}>
            <div className={styles.imge}>
                <img src={card.image} alt="placeimg" style={{height:"250px",width:"350px"}}></img>
                </div>
            <div>
            <p className={styles.name}>{card.name}</p>
            <p className={styles.loc}><span>Edyoda </span>|{card.websiteanddate}</p>
            <p id={styles.des}>{card.description}</p>
            </div>
           
        </div>
    );
}
export default Card;