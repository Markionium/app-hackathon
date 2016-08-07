export default function Content(props) {
    const styles = {
        appWrap: {
            display: 'flex',
            width: '80%',
            margin: '2rem auto',
        },
    };

    return (
        <div style={styles.appWrap}>
            {props.children}
        </div>
    );
}
