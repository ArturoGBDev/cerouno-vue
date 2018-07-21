import axios from 'axios'

export default class Song {

	static async getAll() {
		const response = await axios({
			method: 'GET',
			url: "http://localhost:3001/songs",
			crossDomain: true
		})
		return response.data
	}


	static async create (song) {
		const response = await axios({
			url: 'http://localhost:3001/songs',
			method: 'POST',
			crossDomain: true,
			data: song
		})

		return response.data
	}


	static async delete (songId) {
		const response = await axios({
			url: 'http://localhost:3001/songs' + songId,
			method: 'POST',
			crossDomain: true
		})

		return response.data
	}

}