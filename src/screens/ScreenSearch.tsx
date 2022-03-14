import React from "react";
import {Network} from "../components/network/Network";
import {SimpleNet} from "../components/network2/SimpleNet";
import { useAppSelector, useAppDispatch } from "../hooks/hooks"

type ScreenSearchProps = {};

const ScreenSearch: React.FC<ScreenSearchProps> = () => {
    const theme = useAppSelector<string>(state => state.shared.theme);

    return (
      <div className={`screen home ${theme}`}>
        {/*<Network/>*/}
          {/*<MetadataList items={[1, 2, 3, 4]} />*/}
          {/*  <Network2/>*/}
          <SimpleNet/>
      </div>
  );
};

export default ScreenSearch;

ScreenSearch.defaultProps = {};
