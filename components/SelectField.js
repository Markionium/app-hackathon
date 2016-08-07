export default function SelectField(props) {
    const { items, onChange, label } = props;

    return (
        <div>
            <label>{label}
            <select onChange={(event) => onChange(event.target.value)}>
                {items.map(item => (<option key={item.value} value={item.value}>{item.label}</option>))}
            </select>
            </label>
        </div>
    );
}
SelectField.propTypes = {
    items: React.PropTypes.arrayOf(React.PropTypes.shape({
        label: React.PropTypes.string.isRequired,
        value: React.PropTypes.string.isRequired,
    })),
    onChange: React.PropTypes.func.isRequired,
    label: React.PropTypes.string,
};