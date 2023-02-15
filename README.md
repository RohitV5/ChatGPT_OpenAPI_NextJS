Everything inside app directory is server component by default


Setting up authentication

Go to firebase console-> create a new application -> under authentication create OAuth 2.0 Client IDs 
and add the generated client ID and secret in env file.

Configure Client ID to have Authorized Javascript origins
http://localhost:3000
http://localhost:5000
http://localhost

Configure Authorized redirect URIs
http://localhost:3000/api/auth/callback/google   -> for local

for production after deployment you will the get the hosted url add that.

Done till 1:13