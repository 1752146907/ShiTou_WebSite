import reqwest from 'reqwest'; 
import application from './application';  

export default {
	data () {
		return {
			
		}
	},
	components: { 
		
	},
	created () {

	},
	methods: {
		request (config) {   
			if (!config.url.startsWith('http')) {
				config.url = application.host + config.url;
			}
			let headers = {
				// 'Content-Type': 'application/json',
				'Accept': 'application/vnd.guest.v1+json',
				"Authorization": this.$storage.getToken()
			}
			config.headers = config.headers ? Object.assign(config.headers, headers) : headers;
			config.method = config.method ? config.method : 'POST';
			
			if (!config.url.startsWith('http')) {
				config.url = this.host + config.url;
			}
			reqwest({
				url: config.url,
				type: 'json',
				method: config.method,
				crossOrigin: true,
				headers: config.headers,
				data: config.data,
				success: (response) => { 
					config.success(response);
				},
				error: (response) => { console.log(JSON.parse(response.response).code)
					if(JSON.parse(response.response).code == 488) {
						alert(JSON.parse(response.response).msg)
					}
					else {
						alert("服务器繁忙，请稍后重试")
					}
					config.error(response);
				},
				complete: (response) => {
					config.complete(response);
				}
			});
		},
		handleBack: function () {
			this.$router.back(-1);
		}
	}
}
