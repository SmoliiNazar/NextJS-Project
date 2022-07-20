import { ButtonProps } from './Button.props';

import styles from './Button.module.css';
import cn from 'classnames';

const Button = ({ children, appearance, arrow = 'none', className, ...props}: ButtonProps): JSX.Element => {
    return (
        <button
            className={cn(styles.button, className, {
        // if appearence === 'primary' | 'ghost', then our button will get specified class.
                [styles.primary]: appearance === 'primary',
                [styles.ghost]: appearance === 'ghost',
            })}
            {...props}
        >
            {children}
        {/* If arrow isnt none then, we'll create a span with classnames: arrow, down  */}
            {arrow !== 'none' && arrow !== 'primary-right' &&
                <span className={cn(styles.arrow, {
                    [styles.down]: arrow == 'down'
                })}>
                    <img src="./arrow.svg" alt="arrow" />
                </span>
            }
            {arrow !== 'none' && arrow !== 'right' &&
                <span className={cn(styles.arrow, {
                    [styles.down]: arrow == 'down'
                })}>
                    <img src="./lightArrow.svg" alt="arrow" />
                </span>
            }
        </button>
    );

};

export default Button;