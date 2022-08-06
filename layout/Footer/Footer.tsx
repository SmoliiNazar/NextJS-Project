import { footerProps } from './Footer.props';
import styles from './Footer.module.css';

import cn from 'classnames';
import { format } from 'date-fns';

export const Footer = ({className, ...props}: footerProps): JSX.Element => {
	return (
		<footer className={cn(className, styles.footer)} {...props}>
				<div className={styles.title}>
					OwlTop © 2020 - {format(new Date(), 'yyyy')} All rights reserved
				</div>
				
				<a className={styles.firstLink} href="#" target='_blank'>Terms of use</a>
			
				<a className={styles.secLink} href="#" target='_blank'>Privacy Policy</a>
		</footer>
	);
};