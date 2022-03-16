import React, {useState} from "react";
import {Button, Divider, Dropdown, Menu} from "antd";
import {useHistory} from "react-router-dom";
import {ArticleOfList, getArticleDetail} from "../../actions/ArticleActions";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import "./CategoryList.scss";
import {CategoryCard} from "../category/CategoryCard";
import {IMetadata} from "../metadata/Metadata";

type CategoriesListProps = {

};

export const CategoriesList: React.FC<CategoriesListProps> = (props) => {
    // @ts-ignore
    const catalog = useAppSelector<Array<string>>(state => state.catalog.catalogs);
    const categories = useAppSelector<Array<string>>(state => state.catalog.selectedCategories);
    const [stateCatalog, setCatalog] = useState<Array<string>>([...catalog]);
    const [stateCategories, setCategories] = useState<Array<string>>([...categories]);

    const onSelectCategory = (title:string, isSelected: boolean) => {
        if(isSelected){
            let newSelected:Array<string> = [];
            stateCategories.forEach(item => {
                if( item!==title) {
                    newSelected.push(item);
                }
            });
            if(newSelected){
                setCategories([...newSelected]);
            }
        } else {
            let newSelected:Array<string> = [...stateCategories];
            newSelected.push(title);
            setCategories([...newSelected]);
        }
    };

    const onClear = () => {
        setCategories([])
    }

    const onSave = () => {
        // DISPATCH PATCH RESPONSE
    }


    return (
        <div className="categories-list-container">
            <div className="categories-list">
                {stateCatalog.map((category)=>(
                    <CategoryCard selectedCategories={stateCategories} title={category} onCategoryClick={onSelectCategory}/>
                ))}
            </div>
            <Divider/>
            <div className="categories-action">
                <div className="metadata-footer">
                    <Button onClick={onSave} type="primary" className="save-saved-metadata">Save selected</Button>
                    <Button onClick={onClear}>Clear selected</Button>
                </div>
            </div>
        </div>
    );
};


