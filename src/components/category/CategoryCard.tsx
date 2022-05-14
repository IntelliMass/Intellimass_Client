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
};

export const CategoryCard: React.FC<CategoryCardProps> = (props) => {
    const isSelected:boolean = props.selectedCategories.find(selected => selected.title === props.title)? true: false;

    const UniqeBadge = () => {
        if(props.count <= 10){
            return (
                <Badge style={{ backgroundColor: "firebrick" }} count={props.count }>
                    <Alert
                        className={`alert-cluster ${isSelected && 'selected-alert'}`}
                        message={props.title}
                        type={typeGeneretor(props.index)}
                    />
                </Badge>
            );
        }
        else if(props.count  > 10 && props.count  <= 50){
            return <Badge style={{ backgroundColor: "orange" }} count={props.count }>
                <Alert
                    className={`alert-cluster ${isSelected && 'selected-alert'}`}
                    message={props.title}
                    type={typeGeneretor(props.index)}
                />
            </Badge>
        }
        else if(props.count  > 50 && props.count  < 100){
            return <Badge style={{ backgroundColor: "cadetblue" }} count={props.count }>
                <Alert
                    className={`alert-cluster ${isSelected && 'selected-alert'}`}
                    message={props.title}
                    type={typeGeneretor(props.index)}
                />
            </Badge>
        }
        else{
            return <Badge style={{ backgroundColor: "forestgreen" }} count={props.count }>
                <Alert
                    className={`alert-cluster ${isSelected && 'selected-alert'}`}
                    message={props.title}
                    type={typeGeneretor(props.index)}
                />
            </Badge>
        }
    };

    return (
        <div onClick={()=>{props.onCategoryClick(props.title, isSelected)}}>
            {UniqeBadge()}
        </div>
    )
};


