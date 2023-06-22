import React from 'react';
import {Card, CardContent, Checkbox, FormControlLabel, IconButton, Typography} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Stack from "@mui/material/Stack";
import {Facebook, Google, Twitter} from "@mui/icons-material";
import Link from "@mui/material/Link";
import Avatar from "@mui/material/Avatar";
import shadows from "@mui/material/styles/shadows";
import {alpha} from "@mui/material/styles";
// import {auth} from "@jumbo/services/auth/firebase/firebase";
import * as yup from 'yup';
import {Form, Formik} from "formik";
// import {useAuthSignInWithEmailAndPassword} from "@react-query-firebase/auth";
import LoadingButton from "@mui/lab/LoadingButton";
import {useNavigate} from "react-router-dom";
import Div from "@jumbo/shared/Div";
import JumboTextField from "@jumbo/components/JumboFormik/JumboTextField";
import {ASSET_AVATARS, ASSET_IMAGES} from "../../../utils/constants/paths";

const validationSchema = yup.object({
    email: yup
        .string('Digite seu e-mail')
        .email('Digite um e-mail válido')
        .required('Campo Email é obrigatório'),
    password: yup
        .string('Digite sua senha')
        .required('Campo Senha é obrigatório'),
});

const Login1 = () => {
    const navigate = useNavigate();

    // const mutation = useAuthSignInWithEmailAndPassword(auth, {
    //     onError(error) {
    //         console.log(error);
    //     },
    //     onSuccess(data) {
    //         navigate("/", {replace: true});
    //     }
    // });

    const onSignIn = (email, password) => {
        //mutation.mutate({email, password});
    };

    //temp
    const mutation = {isError: false};
    return (
        <Div sx={{
            flex: 1,
            flexWrap: 'wrap',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            p: theme => theme.spacing(4),
        }}>
           
            <Card sx={{maxWidth: '100%', width: 360, mb: 4}}>
                <Div sx={{position: 'relative', height: '200px'}}>
                    <CardMedia
                        component="img"
                        alt=""
                        height="200"
                        image={`${ASSET_IMAGES}/sbt-core.png`}
                    />
                    <Div
                        sx={{
                            flex: 1,
                            inset: 0,
                            position: 'absolute',
                            display: 'flex',
                            alignItems: 'center',
                            backgroundColor: theme => alpha(theme.palette.common.black, .5),
                            p: theme => theme.spacing(3),
                        }}
                    >
                        <Typography
                            variant={"h2"}
                            sx={{
                                color: 'common.white',
                                fontSize: '1.5rem',
                                mb: 0
                            }}
                        >
                        
                        </Typography>
                    </Div>
                </Div>
                <CardContent sx={{pt: 0}}>

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
                            <Form style={{marginTop: '30px' ,textAlign: 'left'}} noValidate autoComplete='off'>
                                {mutation.isError && <p>{mutation.error.message}</p>}
                                <Div sx={{mb: 3, mt: 1}}>
                                    <JumboTextField
                                        fullWidth
                                        name="email"
                                        label="Email"
                                    />
                                </Div>
                                <Div sx={{mb: 2, mt: 1}}>
                                    <JumboTextField
                                        fullWidth
                                        name="password"
                                        label="Senha"
                                        type="password"
                                    />
                                </Div>
                                <Typography
                                    textAlign={"right"}
                                    variant={"body1"}
                                >
                                </Typography>
                                <Div sx={{mb: 1}}>
                                </Div>
                                <LoadingButton
                                    fullWidth
                                    type="submit"
                                    variant="contained"
                                    size="large"
                                    sx={{mb: 3}}
                                    loading={isSubmitting || mutation.isLoading}
                                >Entrar</LoadingButton>
                                <Typography textAlign={"center"} variant={"body1"} mb={1}>Não tem conta?
                                    <Link underline="none" href="#">Acesse aqui!</Link>
                                </Typography>
                            </Form>
                        )}
                    </Formik>
                </CardContent>
            </Card>
        </Div>
    );
};

export default Login1;
