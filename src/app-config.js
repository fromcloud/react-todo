let backendHost;

const hostname = window && window.location && window.location.hostname;

if (hostname === "localhost") {
	backendHost = "http://localhost:8080";
} else {
  backendHost = "https://todoapp-env-1.eba-rkuzpf2r.ap-northeast-2.elasticbeanstalk.com";
}

export const API_BASE_URL = `${backendHost}`;
