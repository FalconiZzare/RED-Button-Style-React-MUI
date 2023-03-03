import React, {useContext, useEffect, useState} from 'react';
import {useNavigate, useLocation} from "react-router-dom";

//MUI
import {Divider, Stack, Typography} from "@mui/material";
//Custom
import {UserContext} from "../../App";
import {COLORS} from "../../colors/globalColors";
import {
    AddCar,
    AddPart,
    Admin,
    CarInventory,
    PartInventory
} from "../../ui/Icons"

const SIDEBAR_ITEMS = [
    {
        id: 1,
        name: 'Admin Panel',
        requiredLevel: 3,
        path: '/admin',
        icon: 'Admin'
    },
    {
        id: 2,
        name: 'Car Inventory',
        requiredLevel: 1,
        path: '/car-inventory',
        icon: 'CarInventory'
    },
    {
        id: 3,
        name: 'Add New Car',
        requiredLevel: 2,
        path: '/',
        icon: 'AddCar'
    },
    {
        id: 4,
        name: 'Part Inventory',
        requiredLevel: 1,
        path: '/part-inventory',
        icon: 'PartInventory'
    },
    {
        id: 5,
        name: 'Add New Part',
        requiredLevel: 2,
        path: '/add-part',
        icon: 'AddPArt'
    },
]

const SideBar = () => {
    const [selectedOption, setSelectedOption] = useState(null)
    const navigate = useNavigate()
    const location = useLocation()
    const {user} = useContext(UserContext)

    const getIcon = (name, size, color) => {
        if (name === 'Admin')
            return <Admin size={size} color={color}/>
        else if (name === 'AddCar')
            return <AddCar size={size} color={color}/>
        else if (name === 'CarInventory')
            return <CarInventory size={size} color={color}/>
        else if (name === 'AddPArt')
            return <AddPart size={size} color={color}/>
        else if (name === 'PartInventory')
            return <PartInventory size={size} color={color}/>
    }

    useEffect(() => {
        const path = location.pathname
        setSelectedOption(path)
    }, [location.pathname])

    return (
        <Stack
            width={'250px'}
            minWidth={'250px'}
            ml={1}
            alignItems={'center'}
            spacing={2}
            sx={{
                background: COLORS.LightSilver,
                borderRadius: '10px',
                py: 4
            }}
        >
            {
                SIDEBAR_ITEMS.map((item) =>
                    user && user.accessLevel >= item.requiredLevel &&
                    <Stack
                        key={item.id}
                        spacing={2}
                        sx={{
                            width: '200px',
                            cursor: 'pointer'
                        }}
                    >
                        <Stack
                            direction={'row'}
                            alignItems={'center'}
                            spacing={3}
                            pl={3}
                            onClick={() => navigate(item.path)}
                        >
                            {
                                getIcon(
                                    item.icon,
                                    '20',
                                    selectedOption === item.path ? COLORS.DeepOrange : COLORS.Black
                                )
                            }
                            <Typography
                                sx={{
                                    fontSize: '16px',
                                    fontWeight: selectedOption === item.path && 700,
                                    color: selectedOption === item.path ?
                                        COLORS.DeepOrange : COLORS.Black
                                }}
                            >
                                {item.name}
                            </Typography>
                        </Stack>
                        {
                            item.id < SIDEBAR_ITEMS.length &&
                            <Divider width={'100%'}/>
                        }
                    </Stack>
                )
            }
        </Stack>
    );
};

export default SideBar;