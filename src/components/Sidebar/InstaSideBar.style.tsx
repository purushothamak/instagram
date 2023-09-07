import { styled } from "@mui/system";
import { Drawer } from "@mui/material";

export const StyledSidebarDrawer = styled(Drawer)`
borderTop: '1px solid #ddd',
width: '100%',
position: 'fixed',
bottom: 0,
backgroundColor: 'white',
display: 'flex',
justifyContent: 'space-around',
padding: '10px',
zIndex: 1,
`;
export const customStyles = {
  mobileBottomNavAction: {
    padding: 0,
    width: "auto",
    minwidth: 0,
  },
};
