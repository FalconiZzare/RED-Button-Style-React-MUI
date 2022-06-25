import React from 'react';
import {Box} from '@mui/material';

const ButtonRedacted = (props) => {

    return (
        <Box
            sx={{
                fontSize: '15px',
                color: '#9B9A99',
                textShadow: '1px 1px 1px #000',
                minWidth: '86px',
                height: '24px',
                padding: '11px 5px',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all .3s ease',
                position: 'relative',
                '&:hover': {
                    background: 'rgba(99, 99, 99, 0.08)',
                    borderRadius: '4px',
                    color: '#CCC',
                    boxShadow: '0 0 5px 2px rgba(0, 0, 0, 0.1)',
                    transition: 'al .3s ease',
                },
                '&::after': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    height: '3px',
                    width: 0,
                    borderRadius: '3px',
                    background: 'linear-gradient(to right,#7f2d2d 0,#e35151)',
                    right: '10.5px',
                    bottom: '5px',
                    transition: 'all .3s ease-out',
                },
                '&:hover::after': {
                    left: '10.5px',
                    width: '75px',
                }
            }}
        >
            {props.children}
        </Box>
    );
};

export default ButtonRedacted;