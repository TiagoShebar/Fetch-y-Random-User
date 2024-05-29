
const CardUser = (props) => {
    return(
        <div className="card">
        <img src={props.user.image} alt={`${props.user.name.first}-${props.user.name.last}`} className="card-image" />
        <div className="card-info">
          <h2 className="card-name">{props.user.name.first} {props.user.name.last}</h2>
          <p className="card-location">
            <span className="flag-icon"></span> {props.user.country}, {props.user.city}
          </p>
        </div>
      </div>
    )
}

export default CardUser;