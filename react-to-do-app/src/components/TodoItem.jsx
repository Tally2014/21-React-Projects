import CheckBox from './CheckBox';

function TodoItem(props) {
    const {data, completed} = props;

    return (
        <li className="ui-state-default">
            <div className="checkbox">
                <label>
                    <CheckBox checked={completed}/> {data.text}
                </label>
            </div>
        </li>
    );
}

export default TodoItem;