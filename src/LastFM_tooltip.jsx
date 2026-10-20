import React, { useEffect, useState } from 'react';
import { Chip, Tooltip, Typography, Box, Link } from '@mui/material';
import { getRecentTracks } from './Lastfm';

function LastFMTooltip() {
  const username = import.meta.env.VITE_LASTFM_USER || 'Level420';
  const [open, setOpen] = useState(false);
  const [track, setTrack] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!open || !username) {
      return undefined;
    }

    let cancelled = false;
    setLoading(true);

    getRecentTracks(username, 1)
      .then(([recentTrack]) => {
        if (!cancelled) {
          setTrack(recentTrack ?? null);
        }
      })
      .finally(() => {
        if (!cancelled) {
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [open, username]);

  const imageUrl = track?.image?.find((image) => image.size === 'large')?.['#text'];
  const tooltipContent = loading ? (
    'Loading latest scrobble...'
  ) : track ? (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1.5,
      }}
    >
      {imageUrl && (
        <img
          src={imageUrl}
          alt=""
          width="64"
          height="64"
          style={{ display: 'block', flexShrink: 0 }}
        />
      )}
      <Box sx={{ minWidth: 0 }}>
        <Typography
          component="span"
          display="block"
          fontWeight="bold"
          noWrap
        >
        <Link
          href={track.url}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: 'inherit',
            textDecoration: 'none',
          }}>         
            {track.name}
        </Link> 
        </Typography>
        <Typography component="span" display="block" noWrap>
          {track.artist?.['#text']}
        </Typography>
      </Box>
    </Box>
  ) : (
    'No recent scrobbles found.'
  );

  return (
    <Tooltip
      arrow
      open={open}
      title={tooltipContent}
      onClose={() => setOpen(false)}
      disableFocusListener
      disableHoverListener
      disableTouchListener
      slotProps={{
        tooltip: {
            sx: {
                width: { xs: 180, sm: 260 },
                maxWidth: '90vw',
                padding: 2,
            },
        },
    }}
    >
      <Chip
        clickable
        label="Currently Listening"
        onClick={() => setOpen((isOpen) => !isOpen)}
        sx={{
          color: 'white',
          background: '#4903fc',
          '&:hover': {
            color: 'black',
            background: '#4fa3e0',
          },
          '&.Mui-focusVisible, &:focus': {
            outline: 'none',
            boxShadow: 'none',
          },
          fontSize: '1rem',
          padding: '8px 16px',
        }}
      />
    </Tooltip>
  );
}

export default LastFMTooltip;