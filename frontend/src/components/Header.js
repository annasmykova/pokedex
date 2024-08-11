import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {Link} from "react-router-dom";

const Header = () => {
        return (
            <header>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 16px' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Typography className="logo-text" sx={{ minWidth: 100 }} size="xl">Pokedex</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Link to={'/'}><Typography sx={{ minWidth: 100 }}>Home</Typography></Link>
                        <Link to={'/saved-list'}><Typography sx={{ minWidth: 100 }}>My Collection</Typography></Link>
                    </Box>
                </Box>
            </header>
        );
}

export default Header
