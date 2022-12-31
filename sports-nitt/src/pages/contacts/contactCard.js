import { colors } from "../../utils/colors";

import "./contact.css"

const IMG_URL = "images/"


const ContactCard = (props) => {
    return(
        <div
        style={{
            backgroundColor:colors.liteGrey,
            overflow:"hidden",
       

        }} 
        className="contact-card"
        >
            <img style={{width:"100%", height:"60%", objectFit:"cover"}} src={IMG_URL + props.imgName+".jpg"} alt={"image of "+props.position}></img>
            <p
          style={{
            color: "white",
            fontWeight: "800",
            paddingTop:"50px",
          }}
          className="contact-card-name"
        >
          {props.name}
        </p>
        <p
          style={{
            color: colors.secondary,
            fontSize: "20px",
            fontWeight: "400",
            marginTop:'-30px'
          }}
        >
          {props.position}
        </p>
        <p
          style={{
            color: colors.grey,
            fontSize: "20px",
            fontWeight: "500",
          }}
        >
          {props.phone}
        </p>
        </div>
    )
}

export default ContactCard