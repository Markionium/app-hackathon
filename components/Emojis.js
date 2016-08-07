const emojis = ['😄', '😃', '😀', '😊', '☺', '😉', '😍', '😘', '😚', '😗', '😙', '😜', '😝', '😛', '😳', '😁', '😔', '😌', '😒', '😞', '😣', '😢', '😂', '😭', '😪', '😥', '😰', '😅', '😓', '😩', '😫', '😨', '😱', '😠', '😡', '😤', '😖', '😆', '😋', '😷', '😎', '😴', '😵', '😲', '😟', '😦', '😧', '😈', '👿', '😮', '😬', '😐', '😕', '😯', '😶', '😇', '😏', '😑', '👲', '👳', '👮', '👷', '💂', '👶', '👦', '👧', '👨', '👩', '👴', '👵', '👱', '👼', '👸', '😺', '😸', '😻', '😽', '😼', '🙀', '😿', '😹', '😾', '👹', '👺', '🙈', '🙉', '🙊', '💀', '👽', '💩', '🔥', '✨', '🌟', '💫', '💥', '💢', '💦', '💧', '💤', '💨', '👂', '👀', '👃', '👅', '👄', '👍', '👎', '👌', '👊', '✊', '✌', '👋', '✋', '👐', '👆', '👇', '👉', '👈', '🙌', '🙏', '☝', '👏', '💪', '🚶', '🏃', '💃', '👫', '👪', '👬', '👭', '💏', '💑', '👯', '🙆', '🙅', '💁', '🙋', '💆', '💇', '💅', '👰', '🙎', '🙍', '🙇', '🎩', '👑', '👒', '👟', '👞', '👡', '👠', '👢', '👕', '👔', '👚', '👗', '🎽', '👖', '👘', '👙', '💼', '👜', '👝', '👛', '👓', '🎀', '🌂', '💄', '💛', '💙', '💜', '💚', '❤', '💔', '💗', '💓', '💕', '💖', '💞', '💘', '💌', '💋', '💍', '💎', '👤', '👥', '💬', '👣', '💭'];

const styles = {
    addButtonStyle: {
        fontSize: '1rem',
        fontWeight: 'bold',
        padding: '.5rem',
        display: 'block',
        backgroundColor: 'rgba(0,0,0,.05)',
        textAlign: 'center',
    },

    emojiPickerWrap: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        bottom: 0,
        right: 0,
        overflowY: 'scroll',
    },
};

export function Emoji(props) {
    const { emoji, ...restProps } = props;

    return <div {...restProps} style={styles.emoji}>{emoji}</div>;
}
Emoji.propTypes = {
    emoji: React.PropTypes.string.isRequired,
};

export function Emojis({ onPick, emojis, ...other }) {
    if (!emojis.length) {
        return (<div />);
    }

    const emojiOptions = emojis
        .map((emoji, index) => (<Emoji className="emoji" key={index} onClick={() => onPick(emoji)} style={styles.emoji} emoji={emoji} />));

    return (
        <div className="emojis" {...other}>
            {emojiOptions}
        </div>
    );
}
Emojis.defaultProps = {
    emojis: [],
};
Emojis.propTypes = {
    emojis: React.PropTypes.array,
    onPick: React.PropTypes.func,
};

export class EmojiPicker extends React.Component {
    constructor() {
        super();

        this.state = {
            open: false,
        }

        this.onPickAndClose = this.onPickAndClose.bind(this);
        this.onOpen = this.onOpen.bind(this);
    }

    render() {
        if (this.state.open) {
            return (
                <div style={styles.emojiPickerWrap}>
                    <Emojis onPick={this.onPickAndClose} emojis={emojis} className="emojis mdl-color--white mdl-shadow--4dp mdl-color-text--grey-800 mdl-cell mdl-cell--8-col" />
                </div>
            );
        }

        return (
            <div style={styles.addButtonStyle} onClick={this.onOpen}>Click me to ➕ emojis!</div>
        );
    }

    onPickAndClose(emoji) {
        this.props.onPick(emoji);
        this.setState({
            open: false,
        });
    }

    onOpen() {
        this.setState({
            open: true,
        });
    }
}
EmojiPicker.propTypes = {
    onPick: React.PropTypes.func.isRequired,
};