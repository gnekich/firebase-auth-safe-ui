import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams, useParams } from "react-router-dom";
import { Button, Typography, Box } from "@mui/material";

function ConfirmFirebaseRedirect() {
  const navigate = useNavigate();

  const { firebaseProjectId } = useParams<{ firebaseProjectId: string }>();

  const [firebaseUrl, setFirebaseUrl] = useState<string | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(true);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const url = searchParams.get("firebaseUrl");
    if (url) {
      setFirebaseUrl(url);
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
    navigate("/about");
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
    <Box textAlign="center" mt={4}>
      <Typography variant="h6" gutterBottom>
        Confirm Redirection for Firebase Project: {firebaseProjectId}
      </Typography>
      <Typography variant="body1" gutterBottom>
        You are about to be redirected to the following URL:
      </Typography>
      <Typography variant="body2" color="textSecondary" gutterBottom>
        <strong>{firebaseUrl}</strong>
      </Typography>
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
  );
}

export default ConfirmFirebaseRedirect;
