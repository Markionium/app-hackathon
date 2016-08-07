export default class LoadingMask extends React.Component {
    componentDidMount() {
        const spinnerElement = ReactDOM.findDOMNode(this.refs.spinner);

        window.componentHandler.upgradeElement(spinnerElement, 'MaterialSpinner');
    }

    render() {
        const styles = {
            loadingSpinnerWrap: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
            },
        };

        return (
            <div style={styles.loadingSpinnerWrap}>
                <div ref="spinner" className="mdl-spinner mdl-js-spinner is-active" style={{width: '100px', height: '100px'}}></div>
                <h5>Loading...</h5>
            </div>
        );
    }
}
