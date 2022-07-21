import { sidebarProps } from './Sidebar.props';
import styles from './Sidebar.module.css';
import cn from 'classnames';


export const Sidebar = ({...props}: sidebarProps): JSX.Element => {
	return (
		<div {...props}>
			Sidebar
		</div>
	);
};