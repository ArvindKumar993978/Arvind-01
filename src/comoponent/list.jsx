export const List=(props)=>
    <div>
        <li  >
        <input type="checkbox" />
        {props.value}
        <button id="but" onClick={props.onDelete}>Delete</button>
        <button onClick={props.onEdit}>Edit</button>
    </li>
    </div>