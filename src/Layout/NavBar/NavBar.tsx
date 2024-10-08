import { AppBar, Container, Toolbar } from "@mui/material";
import MenuBurgerButton from "../../components/Layout/NavBar/MenuBurgerButton";
import MenuPages from "../../components/Layout/NavBar/MenuPages";

interface NavBarProps {
  children: React.ReactNode;
}

export const NavBar = ({}: NavBarProps) => {
  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: "#169ace" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <MenuPages />
            <MenuBurgerButton />
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
