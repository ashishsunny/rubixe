import "./index.css"
function Card(props) {
   const image = require(`../../images/${props.image}`);
  return (
    <div className="card_comp">
    <div className="card" style={{justifyContent:"center", flexDirection: props.bottom ? "column-reverse" : "column" }}>
        <div className="card-header" style={{backgroundColor:props.bgnd}}>
        <h2>{props.card_no}</h2>
    </div>
    <div className="card-body">
        <img className="card__img" src={image} alt="" />
        <p>{props.content}</p>
        </div>
    </div>
    </div>
  )
}

export default Card