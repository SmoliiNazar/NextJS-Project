import { footerProps } from './Footer.props';

export const Footer = ({...props}: footerProps): JSX.Element => {
	return (
		<div {...props}>
			Footer
		</div>
	);
};