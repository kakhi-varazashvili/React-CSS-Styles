import "./App.css";

function Comp1(props){

    return (

        <div className="main">{props.main}
        <h2 className="title">{props.title}</h2>
        <div className="line1"></div>
        <div className="subDiv boxBlue">{props.subDiv1}</div>
        <div className="subDiv boxRed">{props.subDiv2}</div>

        </div>


            )
}



export default Comp1;