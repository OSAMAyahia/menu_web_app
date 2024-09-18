 
 import { motion } from 'framer-motion';

 const Card=({data})=>{
    return(
        <div className="container">
            {data.map((data,index)=>{
                return(  
                    <motion.div
                    key={index}
                    className="card mb-3"
                    style={{ maxWidth: "1540px" }}
                    initial={{ opacity: 0, y: 50, scale: 0.9 }} // العنصر يبدأ مخفياً
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}  // العنصر يظهر عند التمرير
                    viewport={{ once: true }} // التأثير يحدث مرة واحدة عند الظهور
                    transition={{ duration: 0.8, ease: 'easeOut' }} // مدة التأثير وتخفيفه
                  >
                    <div key={index} className="card mb-3" style={{maxWidth: "540px;"}}>
                    <div className="row g-0">
                      
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">{data.title}</h5>
                          <p className="card-text">{data.description}</p>
                          <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <img src={data.image} style={{borderRadius:"4px",height:"190px" ,width:"100%", objectFit:"cover"}} className="img-fluid rounded-start " alt="..."/>
                      </div>
                    </div>
                  </div>           </motion.div>
)
            })}
     </div>
    )
}

export default Card;