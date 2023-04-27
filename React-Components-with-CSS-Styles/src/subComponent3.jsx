import "./App.css";

function Comp3(props){

    return (

        <div className="main">{props.main}
        <h2 className="title">{props.title}</h2>
        <div className="line3"></div>
        <div className="subDiv boxGreen">{props.subDiv1}</div>
        <div className="subDiv boxBlue">{props.subDiv2}</div>

        </div>
            )
}



export default Comp3;