
import './Button.css';

export default function Button({ type, children, onClick }) {

    const getButtonType = () => {
        switch (type) {
            case 'cta':
                return 'button cta';
            case 'addToCart':
                return 'button add-to-cart';
            case 'payment':
                return 'button payment';
            case 'removeFromCart':
                return 'button remove-from-cart';
            case 'category':
                return 'button category';
            default:
                return 'button';
        }
    };

    const showIcon = ['addToCart', 'payment', 'removeFromCart'].includes(type);

    return (
        <button
            className={`flex gap8 ${getButtonType()}`}
            onClick={onClick}
        >
            {showIcon && <span className={`picto-button picto-${type}`} />}
            <span className="button-text">{children}</span>
        </button>
    );
};