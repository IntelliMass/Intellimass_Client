import React, {useEffect} from "react";
import {useAppSelector} from "../hooks/hooks";
import "../index.scss"
import {Metadata} from "../components/metadata/Metadata";
import {MetadataList} from "../components/metadata-list/MetadataList";
import {Network2} from "../components/network2/network2";
import {SimpleNet} from "../components/network2/SimpleNet";


type ScreenProfileProps = {};

const ScreenProfile: React.FC<ScreenProfileProps> = () => {
  const theme = useAppSelector<string>(state => state.shared.theme);

  return (
      <div className={`screen profile ${theme}`} style={{backgroundColor:"orange"}}>
        {/*<MetadataList items={[1, 2, 3, 4]} />*/}
        {/*  <Network2/>*/}
          <SimpleNet/>
      </div>
  );
};

export default ScreenProfile;

ScreenProfile.defaultProps = {};
