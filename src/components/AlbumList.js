import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
    state = { albums: [] };

	componentWillMount() { // fonction de base qui s'execute lorsque le composant est affiché à l'écran
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data }));
	}

	renderAlbums() {
		return this.state.albums.map(album =>
			<AlbumDetail key={album.title} album={album} />
		);
	}

	render() {
         console.log(this.state);

	    return (
		    <ScrollView>
		        {this.renderAlbums()}
		    </ScrollView>
	    );
    }
}

export default AlbumList;