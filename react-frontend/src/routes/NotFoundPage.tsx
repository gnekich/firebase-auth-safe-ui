import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function NotFoundPage() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate(`${import.meta.env.BASE_URL}`);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      bgcolor="#f5f5f5"
      textAlign="center"
      px={2}
    >
      <Typography variant="h1" color="primary" gutterBottom>
        404
      </Typography>
      <Typography variant="h4" color="textPrimary" gutterBottom>
        Page Not Found
      </Typography>
      <Typography variant="body1" color="textSecondary" paragraph>
        The page you are looking for does not exist or has been moved.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={handleGoHome}
        sx={{ mt: 2 }}
      >
        Go Back to Home
      </Button>
    </Box>
  );
}

export default NotFoundPage;
