import React from 'react';
 class GoogleAuth extends React.Component {
     componentDidMount() {
         window.gapi.load('client:auth2', () => {
             window.gapi.client.init({
                 clientId: '246517635699-l56lt2e5iahgk78mbshrh1moitmfpbec.apps.googleusercontent.com',
                 scope: 'email',
             })
         });
     }
     render () {
         return (
             <div>Google Auth</div>
         ) 
     }
 }
 export default GoogleAuth;