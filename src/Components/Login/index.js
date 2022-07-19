import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { Container, TextField } from "@mui/material";
import "./style.scss";
import SignUp from "../SignUp";
import { useNavigate } from "react-router";
import Alert from "../Alert";
import { alert } from "../../action";
import { useSelector, useDispatch } from "react-redux";

export default function Index(props) {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();
  const alertData = useSelector((state) => state.alert);

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const userInput = (e) => {
    setUsername(e.target.value);
  };

  const passInput = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "test@test.com" && password === "password") {
      dispatch(
        alert({
          status: true,
          message: "Login Successfull",
          behaviour: "success",
        })
      );
      const data = JSON.stringify({ username: username, password: password });
      localStorage.setItem("login", data);
      navigate(props.navigate);
    } else {
      dispatch(
        alert({
          status: true,
          message: "Incorrect username or password",
          behaviour: "error",
        })
      );
    }
  };
  console.log("alert data", alertData);
  return (
    <>
      {alertData.status ? (
        <Alert behaviour={alertData.behaviour} message={alertData.message} />
      ) : (
        ""
      )}
      {props.navbar === true ? (
        <Button
          variant="text"
          sx={{
            textTransform: "none",
            fontSize: "1.8rem",
            color: props.color,
          }}
          onClick={handleClickOpen}>
          Log in
        </Button>
      ) : (
        <span
          onClick={handleClickOpen}
          style={{
            cursor: "pointer",
            color: "rgb(239, 79, 95)",
            marginLeft: "0.5rem",
          }}>
          Login
        </span>
      )}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <Container>
          <div className="loginTitle">
            <h2>Log in</h2>
            <div onClick={handleClose} className="crossIcon">
              <i
                size="24"
                color="#1C1C1C"
                tabindex="0"
                aria-label="close Modal">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#1C1C1C"
                  width="24"
                  height="24"
                  viewBox="0 0 20 20"
                  aria-labelledby="icon-svg-title- icon-svg-desc-"
                  role="img">
                  <path d="M11.42 10.42l3.54-3.54c0.38-0.4 0.38-1.040 0-1.42s-1.020-0.4-1.42 0l-3.54 3.54-3.54-3.54c-0.4-0.4-1.020-0.4-1.42 0s-0.38 1.020 0 1.42l3.54 3.54-3.54 3.54c-0.38 0.38-0.38 1.020 0 1.42 0.2 0.18 0.46 0.28 0.72 0.28s0.5-0.1 0.7-0.28l3.54-3.56 3.54 3.56c0.2 0.18 0.46 0.28 0.72 0.28s0.5-0.1 0.7-0.28c0.38-0.4 0.38-1.040 0-1.42l-3.54-3.54z"></path>
                </svg>
              </i>
            </div>
          </div>
          <form onSubmit={handleLogin}>
            <div>
              <TextField
                fullWidth
                inputProps={{ style: { fontSize: 15 } }}
                InputLabelProps={{ style: { fontSize: 15 } }}
                sx={{ marginBottom: "2rem" }}
                onChange={userInput}
                value={username}
                label="Email"
                type="email"
                variant="outlined"
              />
            </div>
            <div>
              <TextField
                fullWidth
                inputProps={{ style: { fontSize: 15 } }}
                InputLabelProps={{ style: { fontSize: 15 } }}
                label="Password"
                onChange={passInput}
                value={password}
                variant="outlined"
                type="password"
              />
            </div>
          </form>
          <div className="termCondition">
            <label color="#ED5A6B" class="sc-1o2pknd-0 oQgkb">
              <input
                type="checkbox"
                aria-checked="false"
                color="#ED5A6B"
                class="sc-1o2pknd-1 iPRmnw"
              />
            </label>
            <h1>
              I agree to Zomato's <span>Terms of Service</span>,
              <span> Privacy Policy </span>
              and <span> Content Policies</span>
            </h1>
          </div>
          <Button
            type="submit"
            fullWidth
            sx={{
              textTransform: "capitalize",
              borderRadius: "0.6rem",
              fontSize: "1.5rem",
              backgroundColor: "rgb(239, 79, 95)",
              "&:hover": {
                background: "rgb(224, 53, 70)",
              },
            }}
            variant="contained"
            onClick={handleLogin}>
            log in
          </Button>
          <div className="divisionLogin">
            <hr />
            <p>or</p>
            <hr />
          </div>
          <div className="googleApi">
            <div
              role="button"
              tabindex="0"
              aria-label="Continue with Google"
              class="apiLogo">
              <svg
                width="24"
                height="24"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4.87566 13.2946L4.10987 16.1534L1.31093 16.2126C0.474461 14.6611 0 12.886 0 10.9997C0 9.17565 0.443609 7.45552 1.22994 5.94092H1.23054L3.72238 6.39776L4.81396 8.87465C4.5855 9.54071 4.46097 10.2557 4.46097 10.9997C4.46106 11.8072 4.60732 12.5808 4.87566 13.2946Z"
                  fill="#FBBB00"></path>
                <path
                  d="M21.8082 8.94507C21.9345 9.61048 22.0004 10.2977 22.0004 11C22.0004 11.7875 21.9176 12.5557 21.7598 13.2967C21.2243 15.8183 19.8252 18.0201 17.8869 19.5782L17.8863 19.5776L14.7477 19.4175L14.3035 16.6445C15.5896 15.8902 16.5947 14.7098 17.1242 13.2967H11.2422V8.94507H17.21H21.8082Z"
                  fill="#518EF8"></path>
                <path
                  d="M17.8865 19.5778L17.8871 19.5784C16.002 21.0937 13.6073 22.0002 11.0006 22.0002C6.81152 22.0002 3.16945 19.6588 1.31152 16.2132L4.87625 13.2952C5.8052 15.7744 8.19679 17.5392 11.0006 17.5392C12.2057 17.5392 13.3348 17.2134 14.3036 16.6447L17.8865 19.5778Z"
                  fill="#28B446"></path>
                <path
                  d="M18.0208 2.53241L14.4573 5.44981C13.4546 4.82307 12.2694 4.46102 10.9996 4.46102C8.13229 4.46102 5.69596 6.30682 4.81356 8.87494L1.23009 5.9412H1.22949C3.06022 2.41154 6.74823 0 10.9996 0C13.6686 0 16.1158 0.950726 18.0208 2.53241Z"
                  fill="#F14336"></path>
              </svg>
              <span>Continue with Google</span>
            </div>
          </div>
          <div className="alreadyBox">
            <span>New to Zomato? </span>
            <SignUp />
          </div>
        </Container>
      </Dialog>
    </>
  );
}
