import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams, useParams } from "react-router-dom";
import { Container, Button, Typography, Box, Paper } from "@mui/material";

function ConfirmFirebaseRedirect() {
  const navigate = useNavigate();

  const { firebaseProjectId } = useParams<{ firebaseProjectId: string }>();

  const [firebaseUrl, setFirebaseUrl] = useState<string | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(true);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    // const mode = searchParams.get("mode");

    // Get all search params
    const allParams = Array.from(searchParams.entries())
      .map(([key, value]) => `${key}=${value}`)
      .join("&");

    const safeFirebaseProjectId = `${firebaseProjectId}`.replace(
      /[^a-zA-Z0-9-_]/g,
      ""
    );

    if (allParams) {
      setFirebaseUrl(
        `https://${safeFirebaseProjectId}.firebaseapp.com/__/auth/action?${allParams}`
      );
    }
  }, [searchParams]);

  const handleProceed = () => {
    if (firebaseUrl) {
      window.location.href = firebaseUrl;
    }
  };

  const handleCancel = () => {
    setShowConfirmation(false);
  };

  const handleNavigateToAbout = () => {
    navigate(`${import.meta.env.BASE_URL}about`);
  };

  if (!showConfirmation) {
    return (
      <Box textAlign="center" mt={4}>
        <Typography variant="h6" gutterBottom>
          You can close this page now.
        </Typography>
      </Box>
    );
  }

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Box textAlign="center" mt={4}>
        <Typography variant="h6" gutterBottom>
          Confirm Redirection
        </Typography>
        <Typography variant="body1" gutterBottom>
          You are about to be redirected to the following URL
        </Typography>
        {firebaseUrl && (
          <Paper
            elevation={3}
            sx={{
              backgroundColor: "#ffebee",
              color: "#d32f2f",
              padding: 2,
              marginTop: 2,
              borderRadius: 2,
              marginBottom: 2,
            }}
          >
            <Typography
              variant="body2"
              component="pre"
              sx={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}
            >
              {firebaseUrl}
            </Typography>
          </Paper>
        )}

        <Typography variant="body1" gutterBottom>
          Do you want to proceed?
        </Typography>
        <Box mt={2}>
          <Button
            onClick={handleCancel}
            color="secondary"
            variant="outlined"
            sx={{ mr: 2 }}
          >
            No
          </Button>
          <Button onClick={handleProceed} color="primary" variant="contained">
            Yes, Proceed
          </Button>
        </Box>
        <Box mt={8}>
          <Typography
            variant="body1"
            gutterBottom
            onClick={handleNavigateToAbout}
            color="primary"
            sx={{ cursor: "pointer" }}
          >
            More details
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default ConfirmFirebaseRedirect;
