import { Box, Theme, useMediaQuery, useTheme } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


const MobileHeader = () => {
    const theme = useTheme<Theme>();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (

        <div>
            {isMobile ? (
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: -4 }}>
                    <h2>Instagram</h2>
                    <FavoriteBorderIcon />
                </Box>
            ) : ('')}
        </div>

    )
}

export default MobileHeader