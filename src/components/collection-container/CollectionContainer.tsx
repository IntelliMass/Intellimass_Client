import React from "react";
import { Collapse } from 'antd';
import "./CollectionContainer.scss"
import CollectionTable from "../collection-table/CollectionTable";

const { Panel } = Collapse;

type CollectionContainerProps = {};

export const CollectionContainer: React.FC<CollectionContainerProps> = (props) => {

    const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

    function callback(key:any) {
        console.log(key);
    }

    return (
        <div className="collection-container">
            <h2 style={{color:"white"}}>Private collection</h2>
            <Collapse defaultActiveKey={['1']} onChange={callback}>
                <Panel header="NFT" key="1">
                    <CollectionTable/>
                </Panel>
                <Panel header="Cyber" key="2">
                    <CollectionTable/>
                </Panel>
                <Panel header="Architecture and IOT" key="3">
                    <CollectionTable/>
                </Panel>
            </Collapse>
        </div>
    );
};


