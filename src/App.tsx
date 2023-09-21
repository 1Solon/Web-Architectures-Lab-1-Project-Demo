import Grid from '@mui/material/Grid'
import ButtonAppBar from './AppBar'
import { ThemeDark, ThemeLight } from './Theme'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack';
import CircleIcon from '@mui/icons-material/Circle';
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import CssBaseline from '@mui/material/CssBaseline'
import Button from '@mui/material/Button'
import React from 'react'

function App() {
  const [light, setLight] = React.useState(true)

  return (
    <ThemeProvider theme={light ? ThemeDark : ThemeLight}>
      <CssBaseline />
      <ButtonAppBar />
      <Stack spacing={2}>
        <Button
          color="inherit"
          onClick={() => setLight(prev => !prev)}
        >
          Toggle Theme
        </Button>
        <Grid
          container
          spacing={2}


          justifyContent="center"
          sx={{ minHeight: '100vh' }}
        >
          <Grid item xs={7}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  Profile
                </Typography>
                <br />
                <Typography variant="body2">
                  <CircleIcon style={{ fontSize: '0.5rem' }} />
                  &nbsp; Graduate  of Technological University Dublin Computer Science (Hons) 2023.
                  <br /> <br />

                  <CircleIcon style={{ fontSize: '0.5rem' }} />
                  &nbsp; Initiated and Operated the course GitHub Repository for 4 years
                  - Profiency in Jenkins, Docker, Git and the GitHub API (Actions).
                  <br /> <br />

                  <CircleIcon style={{ fontSize: '0.5rem' }} />
                  &nbsp; Represented TUD in Games Fleadh 2020, a java based Artificial Intelligence challenge ‘Robocode’ in March 2020, having designed and written ‘Oberon’.
                  <br /> <br />

                  <CircleIcon style={{ fontSize: '0.5rem' }} />
                  &nbsp; CoderDojo Mentor (Dun Laoghaire) – member since 2012. Youngest appointed student mentor in 2016 – privileged to have the opportunity to guide the next generation of young coders and developers.
                  <br /> <br />

                  <CircleIcon style={{ fontSize: '0.5rem' }} />
                  &nbsp; Moderator of the community server for Pulsar: Lost Colony with 4,000+ members, facilitating team building in a co-operative Space Sim.
                  <br /> <br />

                  <CircleIcon style={{ fontSize: '0.5rem' }} />
                  &nbsp; Manager and lead developer of the ISAN project - a multilateration solution for in-game navigation in the MMO Starbase.
                  <br /> <br />

                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  Experience
                </Typography>
                <br />

                <Typography variant="body2">
                  <CircleIcon style={{ fontSize: '0.5rem' }} />
                  &nbsp; <b>Technology Analyst</b> - <i>Accenture</i> - June 2023 / August 2023
                  <br /> <br />

                  <CircleIcon style={{ fontSize: '0.5rem' }} />
                  &nbsp; <b>Software Developer</b> - <i>Department of Agriculture</i> - January 2022 / September 2023
                  <br /> <br />

                  <CircleIcon style={{ fontSize: '0.5rem' }} />
                  &nbsp; <b>Testing Intern</b> - <i>Rockall Technologies (Broadridge Group)</i> - July 2019 / August 2019
                  <br /> <br />

                  <CircleIcon style={{ fontSize: '0.5rem' }} />
                  &nbsp; <b>Clerical</b> - <i>Department of Higher Education</i> - June 2017 / August 2017
                  <br /> <br />

                  <CircleIcon style={{ fontSize: '0.5rem' }} />
                  &nbsp; <b>Work Shadowing</b> - <i>Accenture</i> - November 2017
                  <br /> <br />

                  <CircleIcon style={{ fontSize: '0.5rem' }} />
                  &nbsp; <b>Work Shadowing</b> - <i>Bank of Ireland Robotics</i> - March 2017
                  <br /> <br />

                </Typography>
              </CardContent>
            </Card>
          </ Grid>
        </Grid>
      </Stack>
    </ThemeProvider>
  )
}

export default App
