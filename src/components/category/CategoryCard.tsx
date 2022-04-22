import React  from "react";
import "./CategoryCard.scss";

type CategoryCardProps = {
    title:string;
    onCategoryClick: Function;
    selectedCategories: Array<string>;
};

export const CategoryCard: React.FC<CategoryCardProps> = (props) => {
    const isSelected:boolean = props.selectedCategories.find(selected => selected === props.title)? true: false;


    return (
        <div className={`category ${isSelected? 'selected-Category' : ''}`}
             onClick={()=>{props.onCategoryClick(props.title, isSelected)}}>
            {props.title}
        </div>
    );
};


