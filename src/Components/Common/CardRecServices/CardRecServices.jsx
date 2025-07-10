import "./CardRecServices.css";
import VioletBtn from "../Button/VioletBtn";

const CardRecServices = (props) => {
    return(
        <div className="RecServicesCards" style={{backgroundImage:`url(${props.bgImg})`}}>
            <div className="Content">
                <h3>{props.title}</h3>
                <p>{props.desc}</p>
            </div>
                <VioletBtn content={"View FAQs"}/>
        </div>
    )
}

export default CardRecServices;