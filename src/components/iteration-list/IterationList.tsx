import React from "react";
import './IterationList.scss';
import CAKE from '../../assets/cake.png';
import {CategoryTag} from "../category-tags/CategoryTag";
import {Tag} from "antd";
import {UserOutlined} from "@ant-design/icons";


type IterationListProps = {
};

export interface Iteration {
    index: number,
    savedCategories: string[],
    categories: string[],
    numberOfClusters: number
}

export const IterationList: React.FC<IterationListProps> = (props) => {
    const ITERATIONS:Iteration[] = [
        {
            index: 0,
            savedCategories: ['Security', 'Internet' ],
            categories: ['Security', 'System', 'Internet', 'Technologies' ],
            numberOfClusters: 4
        },
        {
            index: 1,
            savedCategories: ['System'],
            categories: ['Security', 'System', 'Internet', 'Technologies' ],
            numberOfClusters: 4
        },
        {
            index: 2,
            savedCategories: ['Technologies' ],
            categories: ['Security', 'System', 'Internet', 'Technologies' ],
            numberOfClusters: 4
        }
    ]



    return (
        <div className="iteration-list">
            {ITERATIONS.map((iteration) => {
                return(
                    <div className="iteration">

                        <img className="img-iteration" src={CAKE}/>
                        <div className="saved-iteration-categories">
                            <h4 className="iteration-title">Clusters number: {iteration.numberOfClusters}</h4>
                            <h4>Saved categories: </h4>
                            {iteration.savedCategories.map((category) => {
                                return(
                                     <Tag color="gray">
                                         {category}
                                    </Tag>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
