import { Box, Button, Link } from "@mui/material";
import { useState } from "react";
import { Link as RouterLink} from "react-router-dom";

const pages = ["Inicio"];

const MenuPages = () => {
  const [_, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box sx={{ flexGrow: 1, display: {  xs: "none", md: "flex", justifyContent: "center", alignItems: "center", width: "100%"} }}>
      {pages.map((page) => (
        <Link
          key={page}
          component={RouterLink}
          to="/home"
          sx={{ color: "black", textDecoration: "none" }}
        >
          <Button
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: "white", display: "block" }}
          >
            {page}
          </Button>
        </Link>
      ))}
    </Box>
  );
};

export default MenuPages;
