import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
const SocialLinks: any = {
    GitHub: 'https://github.com/DianaHuaripayta',
    Twitter: 'https://twitter.com/DianaHuaripayta',
    LinkedIn: 'https://www.linkedin.com/in/diana-hg/',
  };
const handleClick = (network: string) => {
    window.open(SocialLinks[network], '_blank');
  };
const actions = [
  { icon: <LinkedInIcon onClick={() => handleClick('LinkedIn')}/>, name: 'LinkedIn' },
  { icon: <GitHubIcon onClick={() => handleClick('GitHub')}/>, name: 'GitHub' },
  { icon: <TwitterIcon onClick={() => handleClick('Twitter')}/>, name: 'Twitter'},
];

export default function BasicSpeedDial() {
  return (
    <Box>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'fixed', bottom: 30, left: 35 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
