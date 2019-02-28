import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
				Authorization: 'Client-ID 9a19d2213d1ccaf839f87c052ecb8e40cb434067d4547f11d78c24102aadfb31'
			}
});