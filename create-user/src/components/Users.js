import Card from "./Card";
import User from "./User";
import style from "./Users.module.css";

function Users(props) {
  return (
    <Card>
      <div className={style.users}>
        <ul>
          {props.users.map((user) => (
            <User key={user.username} user={user}></User>
          ))}
        </ul>
      </div>
    </Card>
  );
}

export default Users;
