import { headerProps } from './Header.props';
import styles from './Header.module.css';
import cn from 'classnames';


export const Header = ({...props}: headerProps): JSX.Element => {
	return (
		<div {...props}>
			header
		</div>
	);
};