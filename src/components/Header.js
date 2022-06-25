import React from 'react';
import {Stack} from "@mui/material";
import ButtonRedacted from "./UI/ButtonRedacted";

const Header = (props) => {
    return (
        <Stack
            direction={'row'}
            spacing={'12px'}
            justifyContent={'center'}
            sx={{
                pt: '3rem',
            }}
        >
            {
                props.navbarItems.map(element =>
                    <ButtonRedacted
                        key={element.id}
                    >
                        {element.item}
                    </ButtonRedacted>
                )
            }
        </Stack>
    );
};

export default Header;