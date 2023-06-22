import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Card, CardContent, Typography} from "@mui/material";
import Div from "@jumbo/shared/Div";
import {alpha} from "@mui/material/styles";
import {ASSET_IMAGES} from "../../../utils/constants/paths";
import {getAssetPath} from "../../../utils/appHelpers";
import * as yup from "yup";
import {Form, Formik} from "formik";
import LoadingButton from "@mui/lab/LoadingButton";
import authServices from "../../../services/auth-services";
import {useNavigate} from "react-router-dom";
import useJumboAuth from "@jumbo/hooks/useJumboAuth";
import jwt from 'jwt-decode'


const validationSchema = yup.object({
    email: yup
        .string('Digite seu e-mail')
        .email('Digite um e-mail válido')
        .required('Campo Email é obrigatório'),
    password: yup
        .string('Digite sua senha')
        .required('Campo Senha é obrigatório'),
});

const Login = ({disableSmLogin}) => {
        const [user, setUser] = useState(null);

    useEffect(() => {
        getToken();
      }, []);

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

          
            axios.post(
              'http://localhost:8082/api/v1/login/token',
              postData,
              {
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded',
                },
              }
            ).then((data) => {
                alert(JSON.stringify(data.data))
                const token = data.data.access_token;
                const user = jwt(token);
                setUser(user);
                alert(JSON.stringify(user))
                localStorage.setItem('token', token);
                
            })
            .catch(() => {
                console.log("An error occurred on the server")
            });
        }
      }
    const {setAuthToken} = useJumboAuth();
    const navigate = useNavigate();

    const onSignIn = (email, password) => {
        authServices.signIn({email, password})
            .then((data) => {
                setAuthToken(data?.token);
                navigate("/dashboards/misc");
            });
    };

    return (

        <Div sx={{
            width: 720,
            maxWidth: '100%',
            margin: 'auto',
            p: 4
        }}>
            <Card
                sx={{
                    display: 'flex',
                    minWidth: 0,
                    flexDirection: {xs: 'column', md: 'row'}
                }}
            >
                <CardContent
                    sx={{
                        flex: '0 1 300px',
                        position: 'relative',
                        background: `#0267a0 url(${getAssetPath(`${ASSET_IMAGES}/sbt-core.png`, "640x428")}) no-repeat center`,
                        backgroundSize: 'cover',

                        '&::after': {
                            display: 'inline-block',
                            position: 'absolute',
                            content: `''`,
                            inset: 0,
                            backgroundColor: alpha('#0267a0', .30)
                        }
                    }}
                >
                    <Div
                        sx={{
                            display: 'flex',
                            minWidth: 0,
                            flex: 1,
                            flexDirection: 'column',
                            color: 'common.white',
                            position: 'relative',
                            zIndex: 1,
                            height: '100%'
                        }}
                    >
                        <Div sx={{mb: 2}}>
                            
                        </Div>
                    </Div>
                </CardContent>
                <CardContent sx={{flex: 1, p: 4}}
                >
                    <Formik
                        validateOnChange={true}
                        validationSchema={validationSchema}
                        onSubmit={(data, {setSubmitting}) => {
                            setSubmitting(true);
                            onSignIn(data.email, data.password);
                            setSubmitting(false);
                        }}
                    >
                        {({isSubmitting}) => (
                            <Form style={{textAlign: 'left'}} noValidate autoComplete='off'>
                                <Div sx={{mt: 1, mb: 3}}>
                                <Typography align='center' variant={"h5"} color={"inherit"} fontWeight={500} mb={3}>Olá!</Typography>
                                </Div>
                                <Div sx={{mt: 1, mb: 2}}>
                                <Typography align='center' variant={"h5"} color={"inherit"} fontWeight={500} mb={3}>Mudamos a forma de acessar a Suite, para garantir mais segurança!</Typography>
                                </Div>
                                <Div sx={{mb: 2}}>
                                <Typography align='center' variant={"h5"} color={"inherit"} fontWeight={500} mb={3}>Para acessar basta clicar no botão abaixo.</Typography>
                                </Div>
                                <a href="http://localhost:8080/realms/master/protocol/openid-connect/auth?client_id=account&redirect_uri=http%3A%2F%2Flocalhost%3A3001%2Fuser%2Flogin&state=61d8af79-7e8d-4cee-865d-f1cdc9ebb11b&response_mode=fragment&response_type=code&scope=openid&nonce=19ffeee3-a724-45db-89c3-7356442a207e&code_challenge=jJbX5tXGn10fHFGFRIeRZE63xxEsoFpSUfIrniTPmxw&code_challenge_method=S256">
                                <LoadingButton
                                    fullWidth
                                    type="button"
                                    variant="contained"
                                    size="large"
                                    sx={{mb: 3}}
                                    loading={isSubmitting}
                                >Entrar</LoadingButton>
                                </a>
                                <LoadingButton
                                    color="info"
                                    fullWidth
                                    type="button"
                                    variant="contained"
                                    size="large"
                                    sx={{mb: 3}}
                                >Outras Empresas</LoadingButton>
                            </Form>
                        )}
                    </Formik>
                </CardContent>
            </Card>
        </Div>
        
    );

    

};

export default Login;
