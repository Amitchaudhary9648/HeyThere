import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';

const coordinates1 = [
	[-73.98330688476561, 40.76975180901395],
	[-73.96682739257812, 40.761560925502806],
	[-74.00751113891602, 40.746346606483826],
	[-73.95343780517578, 40.7849607714286],
	[-73.99017333984375, 40.71135347314246],
	[-73.98880004882812, 40.758960433915284],
	[-73.96064758300781, 40.718379593199494],
	[-73.95172119140624, 40.82731951134558],
	[-73.9829635620117, 40.769101775774935],
	[-73.9822769165039, 40.76273111352534],
	[-73.98571014404297, 40.748947591479705],
];

const MapScreen = (): JSX.Element => {
	const [coordinates, setCoordinates] = useState(null);
	const [selectedPoint, setSelectedPoint] = useState(null);
	MapboxGL.setAccessToken(
		'pk.eyJ1IjoiYW1pdC1ybiIsImEiOiJjbGZxaDAwMTAweHFhNDBwaHFzYjZwbzByIn0.VC9l0Kkny28JhUJZhAlTtw',
	);
	const onSelectPoint = (event: any) => {
		setCoordinates(event.geometry.coordinates);
		setSelectedPoint(event.properties.id);
	};

	return (
		<View style={styles.page}>
			<View style={styles.container}>
				<MapboxGL.MapView
					style={styles.map}
					onPress={event => {
						setCoordinates(event.geometry.coordinates);
						setSelectedPoint(null);
					}}
					compassEnabled={true}
					logoEnabled={false}>
					<MapboxGL.Camera
						zoomLevel={8}
						centerCoordinate={[-94.5786, 39.0997]}
					/>
					<MapboxGL.PointAnnotation
						id="Jack Stack"
						coordinate={[-94.585701, 39.087269]}
						onSelected={onSelectPoint}
					/>
					<MapboxGL.PointAnnotation
						id="KC Joe's"
						coordinate={[-94.769043, 38.911251]}
						onSelected={onSelectPoint}
					/>
					<MapboxGL.PointAnnotation
						id="Smokehouse BBQ"
						coordinate={[-94.66092, 39.24837]}
						onSelected={onSelectPoint}
					/>
					<MapboxGL.PointAnnotation
						id="Slaps BBQ"
						coordinate={[-94.624443, 39.102489]}
						onSelected={onSelectPoint}
					/>
				</MapboxGL.MapView>
				{coordinates ? (
					<View style={styles.coordinateViewContainer}>
						<View style={styles.coordinateView}>
							{selectedPoint ? <Text>{selectedPoint}</Text> : null}
							<Text>
								{coordinates[0]}, {coordinates[1]}
							</Text>
						</View>
					</View>
				) : null}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	page: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	container: {
		height: '100%',
		width: '100%',
		backgroundColor: 'blue',
	},
	map: {
		flex: 1,
	},
	coordinateViewContainer: {
		position: 'absolute',
		bottom: 10,
		padding: 5,
		width: '100%',
		backgroundColor: 'transparent',
	},
	coordinateView: {
		padding: 5,
		backgroundColor: '#fff',
		flex: 1,
	},
});

export default MapScreen;
