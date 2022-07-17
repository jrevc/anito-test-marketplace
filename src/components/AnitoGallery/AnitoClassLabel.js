import './AnitoClassLabel.css';

const AnitoClassLabel = (props) => {
    return (
        <label className={props.className} htmlFor={props.labelTarget}>
            <img
                src={process.env.PUBLIC_URL + '/images/symbol_' + props.anitoClass + '.png'}
                className="anito-class-logo"
                alt="Class logo"
            />
            <h3>{props.children}</h3>
        </label>
    );
};

export default AnitoClassLabel;
