import React  from "react";
import "./CategoryCard.scss";
import {Alert, Badge} from "antd";
import {typeGeneretor} from "../category-tags/CategoryTag";
import {INewSingleCatalog} from "../../reducers/CatalogReducer";

type CategoryCardProps = {
    title:string;
    onCategoryClick: Function;
    selectedCategories: Array<INewSingleCatalog>;
    index: number;
    count: number;
    isSelected: boolean;
    color: string;
};

export const CategoryCard: React.FC<CategoryCardProps> = (props) => {

    const UniqeBadge = () => {
        if(props.count <= 10){
            return (
                <Badge style={{ backgroundColor: "firebrick" }} count={props.count }>
                    <Alert
                        className={`alert-cluster ${props.isSelected && 'selected-alert'}`}
                        message={props.title}
                        type={typeGeneretor(props.index)}
                        style={{backgroundColor: props.color}}
                    />
                </Badge>
            );
        }
        else if(props.count  > 10 && props.count  <= 50){
            return <Badge style={{ backgroundColor: "orange" }} count={props.count }>
                <Alert
                    className={`alert-cluster ${props.isSelected && 'selected-alert'}`}
                    message={props.title}
                    type={typeGeneretor(props.index)}
                    style={{backgroundColor: props.color}}
                />
            </Badge>
        }
        else if(props.count  > 50 && props.count  < 100){
            return <Badge style={{ backgroundColor: "cadetblue" }} count={props.count }>
                <Alert
                    className={`alert-cluster ${props.isSelected && 'selected-alert'}`}
                    message={props.title}
                    type={typeGeneretor(props.index)}
                    style={{backgroundColor: props.color}}
                />
            </Badge>
        }
        else{
            return <Badge style={{ backgroundColor: "forestgreen" }} count={props.count }>
                <Alert
                    className={`alert-cluster ${props.isSelected && 'selected-alert'}`}
                    message={props.title}
                    type={typeGeneretor(props.index)}
                    style={{backgroundColor: props.color}}
                />
            </Badge>
        }
    };

    return (
        <div onClick={()=>{props.onCategoryClick(props.selectedCategories, props.index)}}>
            {UniqeBadge()}
        </div>
    )
};


