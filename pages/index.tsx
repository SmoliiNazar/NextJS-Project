import React, { useState } from 'react';
import { Button, Htag, P, Tag, Rating } from '../components';
import { withLayout } from '../layout/Layout';

function Home(): JSX.Element {
	const [rating, setRating] = useState<number>(4);
	
	return (
		<>
			<Htag tag='h1'>Title</Htag>
			<Button appearance='primary' arrow='right'>Button</Button>
			<Button appearance='ghost' arrow='down'>Button</Button>
			<P p='small'>small</P>
			<P>default</P>
			<P p='big'>big</P>

			<Tag size='default' color='primary'>Default!</Tag>
			
			<Tag size='small' color='red'>red!</Tag>
			
			<Tag size='small' color='green'>green!</Tag>
			
			<Tag size='small' color='grey'>grey!</Tag>
			
			<Tag size='small' color='ghost'>ghost!</Tag>
		
			<Rating rating={rating} isEditable setRating={setRating}/>
		</>
	);
}

export default withLayout(Home);