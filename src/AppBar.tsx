import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export default function ButtonAppBar() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Avatar alt="Saul Burgess" src="/profile.jpg" />
        <Box sx={{ flexGrow: 0.01 }} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Saul Burgess - CV
        </Typography>
        <Button
          color="inherit"
          href="https://github.com/1Solon"
        >
          GitHub
        </Button>
        <GitHubIcon />
        <Box sx={{ flexGrow: 0.01 }} />
        <Button
          color="inherit"
          href="https://www.linkedin.com/in/saulburgess/"
        >
          LinkedIn
        </Button>
        <LinkedInIcon />
        <Box sx={{ flexGrow: 0.01 }} />
        <Button
          color="inherit"
          href="mailto:burgesssaul@gmail.com"
        >
          Email
        </Button>
        <EmailIcon />
        <Box sx={{ flexGrow: 0.01 }} />
      </Toolbar>
    </AppBar>

  );
}