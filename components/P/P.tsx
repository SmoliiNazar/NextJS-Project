import { Pprops } from './p.props';
import styles from './P.module.css';
import cn from 'classnames';


export const P = ({ p = 'default', children, className, ...props }: Pprops): JSX.Element => {
        return (
          <p
                className={cn(styles.p, className, {
                        [styles.small]: p == 'small',
                        [styles.default]: p == 'default',
                        [styles.big]: p == 'big',
                })}
                {...props}
          >
                {children}
          </p>      
        );

};