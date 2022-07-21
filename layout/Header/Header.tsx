import { headerProps } from './Header.props';

export const Header = ({...props}: headerProps): JSX.Element => {
	return (
		<div {...props}>
			header
		</div>
	);
};