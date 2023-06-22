import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Logged = () => {
    const [token, setToken] = useState(null);

    useEffect(() => {
      async function getToken() {
        const urlSearchParams = new URLSearchParams(window.location.href);
        const code = urlSearchParams.get('code');

        if (code != null) {
          const postData = new URLSearchParams();
          postData.append('client_id', 'account');
          postData.append('redirect_uri', 'http://localhost:3001/user/login');
          postData.append('grant_type', 'authorization_code');
          postData.append('code', code);
          postData.append(
            'code_verifier',
            'ac76c59c8322306fade9e6bc3476179d7a97ec11e3186e0466a2f952'
          );
          postData.append(
            'code_challenge',
            'jJbX5tXGn10fHFGFRIeRZE63xxEsoFpSUfIrniTPmxw'
          );
          postData.append('code_challenge_method', 'S256');
          postData.append('client_secret', 'xQeEs9wICECbf9k8gtl5yetsHRLymw2V');

          try {
            const response = await axios.post(
              'http://localhost:8082/api/v1/login/token',
              postData,
              {
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded',
                },
              }
            );

            // Handle successful response
            console.log(response.data);
            setToken(response.data.token);
            return response.data;
          } catch (error) {
            // Handle error
            console.error(error);
          }
        }
      }

      getToken();
    }, []);

    return {token};
  };

  export default Logged;