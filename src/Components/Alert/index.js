import * as React from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function (props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Index({ behaviour, message }) {
  const [open, setOpen] = React.useState(false);
  const handleClick = React.useCallback(() => {
    setOpen(true);
  }, [setOpen]);
  React.useEffect(() => {
    handleClick();
  }, [handleClick]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "center", horizontal: "left" }}>
        <Alert
          onClose={handleClose}
          severity={behaviour}
          sx={{ width: "100%" }}>
          <p style={{ fontSize: "1.2rem" }}>{message}</p>
        </Alert>
      </Snackbar>
    </Stack>
  );
}
