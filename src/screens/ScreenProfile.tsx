import React, {useEffect} from "react";
import {useAppSelector} from "../hooks/hooks";
import "../index.scss"

type ScreenProfileProps = {};

const ScreenProfile: React.FC<ScreenProfileProps> = () => {
  const theme = useAppSelector<string>(state => state.shared.theme);

  return (
      <div className={`screen profile ${theme}`}>
        <h1 className={`${theme}`}>PROFILE Screen</h1>
      </div>
  );
};

export default ScreenProfile;

ScreenProfile.defaultProps = {};
