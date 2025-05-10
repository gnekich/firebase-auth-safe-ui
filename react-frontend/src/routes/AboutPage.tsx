import React from "react";
import { Box, Typography, Button, Link, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { versionString } from "@/utils/version";

export default function AboutPage() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("./..");
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="start"
      minHeight="100vh"
      bgcolor="#f5f5f5"
      py={4}
    >
      <Paper
        elevation={3}
        sx={{
          p: 4,
          m: 2,
          maxWidth: "600px",
          textAlign: "center",
          bgcolor: "white",
          borderRadius: 2,
        }}
      >
        <Typography variant="h4" component="h1" color="primary" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          Welcome to <strong>Firebase Auth Safe UI</strong>, an open-source
          project built with love to address the security issues in Google's
          Firebase Auth UI. Our goal is to provide a safer and more
          user-friendly authentication experience.
        </Typography>
        <Box mt={4}>
          <Typography
            variant="h5"
            component="h2"
            color="textPrimary"
            gutterBottom
          >
            Links
          </Typography>
          <Link
            href="https://github.com/gnekich/firebase-auth-safe-ui"
            target="_blank"
            rel="noopener"
            underline="hover"
            color="primary"
          >
            GitHub Repository
          </Link>
        </Box>
        <Box mt={4}>
          <Typography
            variant="h5"
            component="h2"
            color="textPrimary"
            gutterBottom
          >
            Contribute
          </Typography>
          <Typography variant="body2" color="textSecondary" paragraph>
            This is an open-source project, and we welcome contributions from
            the community. If you’d like to help improve this project, feel free
            to fork the repository, submit pull requests, or report issues.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            href="https://github.com/gnekich/firebase-auth-safe-ui"
            target="_blank"
            rel="noopener"
          >
            Contribute on GitHub
          </Button>
        </Box>
        <Box mt={4}>
          <Typography
            variant="h5"
            component="h2"
            color="textPrimary"
            gutterBottom
          >
            Version
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Version: {versionString}
          </Typography>
        </Box>
        <Box mt={4}>
          <Button variant="outlined" color="secondary" onClick={handleGoBack}>
            Go Back to Home
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}
