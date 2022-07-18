import { HtagProps } from "./Htag.props";

import styles from './Htag.module.css';
import cn from 'classnames';

const Htag = ({ tag, children }: HtagProps): JSX.Element => {
    // the second way to return something from our component
    switch (tag) {
        case 'h1':
            return <h1 className={styles.h1}>{children}</h1>;      
        case 'h2':
            return <h2 className={styles.h2}>{children}</h2>;  
        case 'h3':
            return <h3 className={styles.h3}>{children}</h3>;  
        default:
            return <></>;
    }
    
    
    // the first way to return something from our component

    // return (
    //     <>
    //         {tag === 'h1' && <h1>{children}</h1> }
    //         {tag === 'h2' && <h1>{children}</h1> }
    //         {tag === 'h3' && <h1>{children}</h1> }
    //     </>
    // );
};

export default Htag;