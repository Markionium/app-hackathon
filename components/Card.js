export default function Card(props) {
    const { name, href, hrefText } = props;

    const styles = {
        cardWrap: {
            margin: '1rem',
            display: 'flex',
        },

        cardTitle: {
            background: '#46B6AC',
            height: '150px',
            width: '330px',
        },

        cardTitleText: {
            color: '#FFF',
            fontSize: '2rem',
        },
    };

    return (
        <div className="demo-card-square mdl-card mdl-shadow--2dp" style={styles.cardWrap}>
            <div style={{position: 'relative', flex: 1}}>
                <div className="mdl-card__title mdl-card--expand" style={styles.cardTitle}>
                    <h2 className="mdl-card__title-text" style={styles.cardTitleText}>{name}</h2>
                </div>
                <div style={{ minHeight: '2.3rem' }}>
                    {props.children}
                </div>
            </div>
            <div className="mdl-card__actions mdl-card--border">
                <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" href={href}>
                {hrefText}
                </a>
            </div>
        </div>
    );
}
Card.propTypes = {
    name: React.PropTypes.string.isRequired,
    href: React.PropTypes.string.isRequired,
    hrefText: React.PropTypes.string.isRequired,
}