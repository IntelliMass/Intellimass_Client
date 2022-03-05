import React, {useEffect} from "react";
import {useAppSelector} from "../hooks/hooks";
import "../index.scss"
import {Metadata} from "../components/metadata/Metadata";
import {MetadataList} from "../components/metadata-list/MetadataList";


type ScreenProfileProps = {};

const ScreenProfile: React.FC<ScreenProfileProps> = () => {
  const theme = useAppSelector<string>(state => state.shared.theme);

  return (
      <div className={`screen profile ${theme}`}>
        <MetadataList items={[1, 2, 3, 4]} />
      </div>
  );
};

export default ScreenProfile;

ScreenProfile.defaultProps = {};
