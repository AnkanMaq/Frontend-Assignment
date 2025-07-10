import "./VioletBtn.css"

const VioletBtn = (props) => {
    return(
        <button className="VioletColor">
            {props.content}
        </button>
    )
}

export default VioletBtn;