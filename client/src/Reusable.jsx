import { Link } from 'react-router-dom';
import './globalStyles.scss';

export const ButtonPrimary = (props) => {
    return (
        <div className="MainBtn">
            <Link to={`${props.to}`} className={`button ${props.name}`} style={{ height: props.height, paddingRight: props.padding, paddingLeft: props.padding }} >
                <span>{props.text}</span>
            </Link>
            <div className={`shadow ${props.shadow}`} style={{ height: props.height, width:props.width, marginTop:props.margin }} />
        </div>
    )
}

export const BlurBlobs = (props) => {
    return(
        <div initial={props.initial} animate={props.animate} exit={props.exit} style={{height: props.height, width: props.width}} className={` ${props.name}`} />
    )
}