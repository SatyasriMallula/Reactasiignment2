import React from "react";
import Card from "../cards/cards";
import styles from "./index.module.css"

function Index(){ 
    let cards=[{
        "image":"https://edyoda.s3.amazonaws.com/media/blog-images/cyber-security-analysis-of-digital-world_m81m18d.jpg",
        "name":"Cyber Security: Analysis of the digital world",
        "websiteanddate":"23 jul 2019",
        "description":"When computers were standalone devices, security was a minimal concern. Mainframes had their own protected facilities. Slowly and steadily as computing became more..."
     },
     {
        "image":"https://edyoda.s3.amazonaws.com/media/blog-images/importance-of-big-data-management-and-its-challenges.jpg",
        "name":"Big Data: Importance of Big Data Management and its Challenges",
        "websiteanddate":"23 jul 2019",
        "description":"Big data is the phrase that is used to define large structured and unstructured volumes of data that has the potential to be mined for information and used in machine..."
     },
     {
        "image":"https://edyoda.s3.amazonaws.com/media/blog-images/why-you-should-accelerate-your-knowledge-on-mobile-app-development_wzc4fWT.jpg",
        "name":"Why you should accelerate your knowledge on Mobile App Development",
        "websiteanddate":"23 jul 2019",
        "description":"Over the most recent 10 years, Android has become famous, not only with its themes that have candy names yet in addition to its broad, and sudden, achievement. In its lifetime, the open..."
     },
     {
        "image":"https://edyoda.s3.amazonaws.com/media/blog-images/the-new-way-to-encrypt-cloud-data-cloud-cryptography_yje2XOW.jpg",
        "name":"The New Way to Encrypt Cloud Data- Cloud Cryptography",
        "websiteanddate":" 23 jul 2019",
        "description":"Distributed computing is one of the well-known subjects of the present world. The Internet has begun driving all these new innovations. The Internet was structured right off the bat to be..."
     },
     {
        "image":"https://edyoda.s3.amazonaws.com/media/blog-images/cloud-computing-an-umbrella-term-that-enables-digital-transformation_3qTFXlw.jpg",
        "name":"Cloud Computing- An Umbrella Term that enables Digital Transformation",
        "websiteanddate":"23 jul 2019",
        "description":"Innovation and us holds a bond that compliments each other. Digital transformations without cloud computing as its partner are like a half-built bridge. As it empowers us..."
     },
     {
        "image":"https://edyoda.s3.amazonaws.com/media/blog-images/understanding-devops_LI08hxv.jpg",
        "name":"Understanding DevOps",
        "websiteanddate":"23 jul 2019",
        "description":"DevOps is a term derived after combining development and operation for a common purpose- driving the development of operational processes. It automates..."
     }
    
    ]
    
    return(
        <div className={styles.maindiv}>
               <nav>
                        <div className={styles.container}>
             
                         <div className={styles.left}>
                            <div>
                       <strong id={styles.logo}>EDYODA</strong><br/>
                          <i id={styles.logostories}>Stories</i>
                         </div>
                        <div className={styles.lable}>
                             <label id={styles.exp}>Explore Categories </label>
                         </div>
                                </div>
                    <div className={styles.right}>
                         <div className={styles.right_para}> <p>EdYoda is free learning and knowledge sharing platform for techies</p></div>
                      <div id={styles.btn_div}><button id={styles.btn}>Go To Main website</button></div>    
                     </div>
                     </div>
                     </nav>
                     <div className={styles.latestposts}>
                        <div className={styles.head}>
                        <h1 id={styles.latestposts_head}>Latest Posts</h1>
                        </div>
                       
                        <div className={styles.cat}>
                            <p> Filter by Category</p>
                            <button id={styles.all}>All</button>
                            <button>Artificial intelligence</button>
                            <button>Cloud Computing</button>
                            <button>DevOps</button>
                            <button>Programming Languages</button>
                            <button>Mobile Application Development</button>
                            <button>Technology and Tools</button>
                            <button>Get a job in a Tech Company</button>
                            <button>Others</button>
                        </div>
                      <div className={styles.maincards}>
                        <div className={styles.cardcontainer}>
           
                        {
                       cards.map(card=><Card card={card}/>)
                        }
                         </div>
                     </div>
                     </div>
                   
</div>
    )
}
export default Index