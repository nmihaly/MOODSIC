var APIController = (function() {
    
    var clientId = '1ce2babdd7f44a1d86098faf54333881';
    var clientSecret = 'd5613cd75a52445db1f1fc900e62bf73';

    // private methods
    var _getToken = async () => {

        var result = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded', 
                'Authorization' : 'Basic ' + btoa(clientId + ':' + clientSecret)
            },
            body: 'grant_type=client_credentials'
        });

        var data = await result.json();
        return data.access_token;
    }
})();
    
    
