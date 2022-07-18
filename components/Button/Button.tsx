import { ButtonProps } from './Button.props';

import styles from './Button.module.css';
import cn from 'classnames';

const Button = ({ children, appearance }: ButtonProps): JSX.Element => {
    // the second way to return something from our component
    // switch (appearance) {
    //     case 'primary': 
    //         return <></>;
    //     default:
    //         return <></>;
    // }

    // the first way to return something from our component
    return (
        <button
            className={cn(styles.button, {
        // if appearence === 'primary' | 'ghost', then our button will get specified class.
                [styles.primary]: appearance === 'primary',
                [styles.ghost]: appearance === 'ghost',
            })}
        >
            {children}
        </button>
    )

};

export default Button;