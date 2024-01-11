function TodoItem(props) {
    const {data} = props;

    return (
        <li className="ui-state-default">
            <div className="checkbox">
                <label>
                    <input type="checkbox" value=""/> {data.text}
                </label>
            </div>
        </li>
    );
}

export default TodoItem;