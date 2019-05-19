import React from 'react';
import { Text } from 'react-native';
import Card from './Card.js';
import CardSection from './CardSection.js';

const AlbumDetail = (props) => {
	return (
		<Card>
			<CardSection>
				<Text>{props.album.title}</Text>
			</CardSection>
		</Card>
	);
};

export default AlbumDetail;
