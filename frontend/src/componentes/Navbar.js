import { Box, Link, Typography } from "@mui/material";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import HomeIcon from '@mui/icons-material/Home';

export default function Navbar() {
  return (
    <Box component="nav" className='Navbar' sx={{ padding: 2, gap:8, display:"flex" }}>
      <Link href="/" sx={{ display: "flex", textDecoration: "none", alignItems: "center" }}>
        <HomeIcon fontSize="large" />
        <Typography fontSize="large">Home</Typography>
      </Link>

      <Link href="/cadastrarCliente" sx={{ display: "flex", textDecoration: "none", alignItems: "center" }}>
        <PersonAddIcon fontSize="large" />
        <Typography fontSize="large">Adicionar Cliente</Typography>
      </Link>
    </Box>
  );
}