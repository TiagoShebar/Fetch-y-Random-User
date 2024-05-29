import CardUser  from "../../components/CardUser";
const UsersView = (props) => {
    return(
        <div>
            <h1>Listado de usuarios:</h1>
            <div>
                {
                    (props.users || []).map((user, index) => (
                        <CardUser key={index} user={user}/>
                    ))
                }
            </div>
                {props.users.map((user, index) => <li key={index}>{user.name.first}</li>)}
            
        </div>
    )
}

export default UsersView;