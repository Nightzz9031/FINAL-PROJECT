import * as React from 'react';
import { TextField, Paper, Typography, Select, Button } from '@mui/material';
import { Box } from '@mui/system';

const RegisterForm: React.FC = () => {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        console.log('Siunčiami duomenys į serverį, naudojant globalios būsenos valdymo įrankį:');
        console.log({
          email,
          password
        });
      };

    return ( 
        <Box sx={{
            height: '100vh',
            display: 'grid',
            placeItems: 'center',
            backgroundImage: 'url(/register-bg.png)',
            backgroundSize: '100%',
        }}>
            <Paper
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          width: 600,
          height: 500,
          p: 2,
          borderRadius: '80px',
          opacity: 0.85,
        }}
        elevation={10}
        onSubmit={handleSubmit}
      >
                <Typography component="h1" variant="h4" align="center">Register</Typography>
                <Box sx={{
                    height: '100vh',
                    display: 'grid',
                    placeItems: 'center'
                }}>
                <TextField sx={{
                    width: '70%',
                }}
                    variant="filled"
                    label="E-mail:"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField sx={{
                    width: '70%',
                }}
                    variant="filled"
                    label="Password:"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <TextField sx={{
                    width: '70%',
                }}
                    variant="filled"
                    label="Repeat password:"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Age"
                />
                <Button 
                variant="contained"
                type="submit"
                >
                    Register
                </Button>
                </Box>
            </Paper>
        </Box>
    )
    };
    
    export default RegisterForm;