import React, {useState} from "react";
import {Button, Divider, Dropdown, Menu} from "antd";
import {useHistory} from "react-router-dom";
import {ArticleOfList, getArticleDetail} from "../../actions/ArticleActions";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import "./CategoryList.scss";
import {CategoryCard} from "../category/CategoryCard";

type CategoriesListProps = {

};

export const CategoriesList: React.FC<CategoriesListProps> = (props) => {
    // @ts-ignore
    const catalog = useAppSelector<Array<string>>(state => state.catalog.catalogs);
    const categories = useAppSelector<Array<string>>(state => state.catalog.selectedCategories);
    const [stateCatalog, setCatalog] = useState<Array<string>>([...catalog]);
    const [stateCategories, setCategories] = useState<Array<string>>([...categories]);
    const [savedCategories, setSavedCategories] = useState<Array<string>>([]);


    console.log(stateCategories)

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
        let newCatalog: Array<string> = [];

        catalog.forEach(category => {
            if (stateCategories.find(statecategory => statecategory === category)){
                let nothing = 'nothing';
            }
            else {
                newCatalog.push(category)
            }
        })
        setCatalog([...newCatalog]);
        setSavedCategories([...savedCategories, ...stateCategories]);
        setCategories([]);

    }


    return (
        <div className="categories-list-container">
            <Divider orientation="left">Saved categories</Divider>
            <div className="categories-list categories-saved-list">
                {savedCategories.map((category)=>(
                    <CategoryCard selectedCategories={stateCategories} title={category} onCategoryClick={onSelectCategory}/>
                ))}
            </div>
            <Divider orientation="left">Articles categories list</Divider>
            <h4 style={{color: "#1890ff"}}>You select {stateCategories.length} categories</h4>
            <h5 style={{color: "gray"}}>Maximum to choose is 2 categories</h5>
            <div className="categories-list">
                {stateCatalog.map((category)=>(
                    <CategoryCard selectedCategories={stateCategories} title={category} onCategoryClick={onSelectCategory}/>
                ))}
            </div>
            <div className="categories-action">
                <Button onClick={onSave} type="primary" className="save-saved-metadata" shape="round" block>Save selected</Button>
                <Button onClick={onClear} shape="round" block >Clear selected</Button>
            </div>
        </div>
    );
};


