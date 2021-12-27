import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

type ScreenProfileProps = {};

const ScreenProfile: React.FC<ScreenProfileProps> = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div
          style={{
            width: "80%",
            marginTop: "5%",
          }}
        >
          <h2
            style={{
              color: "red",
              textAlign: "center",
              width: "95%",
              fontSize: 40,
            }}
          >
            Profile
          </h2>
          <ButtonGroup
            disableElevation
            variant="contained"
            color="primary"
            style={{ marginBottom: "5%" }}
          >
            <Button
              onClick={() => {
                window.location.replace("/");
              }}
            >
              Back To Homepage
            </Button>
          </ButtonGroup>
        </div>
      </header>
    </div>
  );
};

export default ScreenProfile;

ScreenProfile.defaultProps = {};
