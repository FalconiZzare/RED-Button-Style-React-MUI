import React from 'react';
import {Stack} from "@mui/material";
import PropTypes from 'prop-types';
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

Header.propTypes = {
    navbarItems: PropTypes.arrayOf(PropTypes.object),
}

export default Header;