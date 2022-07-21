import { footerProps } from './Footer.props';
import styles from './Footer.module.css';
import cn from 'classnames';


export const Footer = ({...props}: footerProps): JSX.Element => {
	return (
		<div {...props}>
			Footer
		</div>
	);
};