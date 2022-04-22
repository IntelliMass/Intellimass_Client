import React, {useEffect} from "react";
import {useAppSelector} from "../hooks/hooks";
import "../index.scss"
import {AuthenticationForm} from "../components/authentication-form/AuthenticationForm";



type ScreenProfileProps = {};

const ScreenArticles: React.FC<ScreenProfileProps> = () => {
  const theme = useAppSelector<string>(state => state.shared.theme);

  return (
      <div className={`screen profile ${theme}`}>
            <AuthenticationForm/>
      </div>
  );
};

export default ScreenArticles;

ScreenArticles.defaultProps = {};
