import "./App.css";

function Comp2(props){

    return (

        <div className="main">{props.main}
        <h2 className="title">{props.title}</h2>
        <div className="line2"></div>
        <div className="subDiv  boxRed">{props.subDiv1}</div>
        <div className="subDiv boxYellow">{props.subDiv2}</div>
        <div className="subDiv boxBlue">{props.subDiv3}</div>

        </div>


            )
}



export default Comp2