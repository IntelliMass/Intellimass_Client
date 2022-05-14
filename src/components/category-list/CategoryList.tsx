import React, {useEffect, useState} from "react";
import {Button, Divider, Dropdown, Menu, Slider} from "antd";
import {useHistory} from "react-router-dom";
import {ArticleOfList, getArticleDetail} from "../../actions/ArticleActions";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import "./CategoryList.scss";
import {CategoryCard} from "../category/CategoryCard";
import {getCatalog, patchNumberOfCluster} from "../../actions/CatalogAction";
import {IconSlider} from "../sliderRank/SliderRank";
import {CategoryTag} from "../category-tags/CategoryTag";
import Swal from "sweetalert2";
import {deleteCollection} from "../../actions/CollectionAction";
import {INewSingleCatalog} from "../../reducers/CatalogReducer";
import {IMetadataWithCategory} from "../new-metadata-list/NewMetadataList";

type CategoriesListProps = {

};

export const CategoriesList: React.FC<CategoriesListProps> = (props) => {
    // @ts-ignore
    const catalog = useAppSelector<Array< INewSingleCatalog>>(state => state.catalog.catalogs);
    const categories = useAppSelector<Array< INewSingleCatalog>>(state => state.catalog.selectedCategories);
    const numberClusters = useAppSelector<number>(state => state.catalog.numOfClusters);
    const queryId = useAppSelector<string>(state => state.query.queryId);


    const savedMetadataList = useAppSelector<Array<IMetadataWithCategory>>(state => state.metadata.savedMetadataList);
    const numberOfClusters = useAppSelector<Array<INewSingleCatalog>>(state => state.catalog.numOfClusters);

    //
    const [stateCatalog, setCatalog] = useState<Array< INewSingleCatalog>>([]);

    //
    const [stateCategories, setCategories] = useState<Array< INewSingleCatalog>>([]);

    //
    const [savedCategories, setSavedCategories] = useState<Array< INewSingleCatalog>>([]);

    // FOR DISPATCH - MAYBE ADD HERE TO THE NUM
    const [numOfClusters, setNumOfClusters] = useState<number>(numberClusters);

    const dispatch = useAppDispatch()

    // ===========YANIV===========
    // TODO - FIRST RENDER
    // TODO - SELECTION + UI OF LIST
    // PROBLEM WITH THE SECOND ITERATION - WITH THE VIEW OF 2



    // ===========TODOS===========
    // TODO - OPTION TO REMOVE FROM SAVED - ACTION
    // TODO - CHANGE THE UI TO SOMETHING THAT LOOK BETTER
    // TODO - DISABLING MORE THEN 2 SELECTION
        // UI NUMBER OF TAGS BUG


    // ===========PLAN===========
    // TODO - PLAN - FILTER SELECTED GROUP - WHERE? API_REQUEST? UI?
    // TODO - PLAN - GET NEW CATEGORIES LIST
    // TODO - PLAN - HOW TO REMOVE CLUSTERS


    // ===========FUNCTIONALITY===========
    // SHOW LIST CATALOG
    // SELECT ON IT
    // MOVE TO SAVED AS FILTERED
    // SHOW SELECETED AND REGULAR
    // ADD SELECTED TO QUERY_PARAMS
    // THEN WHAT HAPPEND TO THE REGULAR? IT JUST BE THE 2 OF THEM BECAUSE THE FILTER



    useEffect(()=>{
        // @ts-ignore
        dispatch(getCatalog(queryId, 100, savedMetadataList, categories, numberOfClusters ));
    },[queryId])

    useEffect(()=>{
        console.log(catalog);
        console.log(categories);
        // setCategories([...catalog]);
        // setCategories([...categories]);
    },[catalog, categories ])

    useEffect(()=>{
        console.log(numberClusters);
        setNumOfClusters(numberClusters)
    },[numberClusters])


    const handlerNumOfClusters = (newNumber: number) => {
        setNumOfClusters(newNumber);
    }

    const onSelectCategory = (title:string, isSelected: boolean, count:number) => {
        if(isSelected){
            let newSelected:Array<INewSingleCatalog> = [];
            stateCategories.forEach(item => {
                if( item.title!==title) {
                    newSelected.push(item);
                }
            });
            if(newSelected){
                setCategories([...newSelected]);
            }
        } else {
            let newSelected:Array<INewSingleCatalog> = [...stateCategories];
            newSelected.push({title: title, rank: count});
            setCategories([...newSelected]);
        }
    };

    const onClear = () => {
        Swal.fire({
            title: 'Are you sure you want to zoom out and remove the clusters?',
            text: `The results will be back to regular list of resaults`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, zoom in'
        }).then((result) => {
            if (result.isConfirmed) {
                setCategories([])
                Swal.fire(
                    'Clusters removed!',
                    'Your article list has been updated.',
                    'success'
                )
            }
        })
    }

    const onSave = () => {
        Swal.fire({
            title: 'Are you sure you want to zoom in into this clusters?',
            text: `The results will be filtered by the selected clusters`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, zoom out'
        }).then((result) => {
            if (result.isConfirmed) {
                let newCatalog: Array<INewSingleCatalog> = [];
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


                Swal.fire(
                    'Success!',
                    'Your article list has been updated.',
                    'success'
                )
            }
        })
    }

    const onSaveNumberOfClusters = () => {
        Swal.fire({
            title: 'Are you sure you want to change the number of clusters?',
            text: `The articles will be devided by this number of categories`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, change it'
        }).then((result) => {
            if (result.isConfirmed) {

                // @ts-ignore
                dispatch(patchNumberOfCluster(numberOfClusters));

                Swal.fire(
                    'Clusters updated!',
                    'Your categories list has been updated.',
                    'success'
                )
            }
        })
    }

    return (
        <div className="categories-list-container">
            <div className="option-slider">
                <h4 style={{color: "#1890ff"}}>Choose the number of clusters that now {numOfClusters}</h4>
                <h5 style={{color: "gray"}}>You can split the articles into clusters and filter them by save</h5>
            </div>
            <div className="option-slider">
                <Slider min={2} max={5} dots={true} tooltipVisible={true} onChange={handlerNumOfClusters} value={numOfClusters} />
                <Button onClick={onSaveNumberOfClusters} shape="round" >Change clusters number</Button>
            </div>
            <Divider orientation="left">Saved categories</Divider>
            <div className="categories-list categories-saved-list">
                {savedCategories.map((category, index)=>(
                    <CategoryCard selectedCategories={stateCategories} title={category.title} onCategoryClick={onSelectCategory} index={index} count={category.rank}/>
                ))}
            </div>
            <Divider orientation="left">Articles categories list</Divider>
            <h4 style={{color: "#1890ff"}}>You select {stateCategories.length} categories</h4>
            <h5 style={{color: "gray"}}>Maximum to choose is 2 categories</h5>
            <div className="categories-list">
                {stateCatalog.map((category, index)=>(
                    <CategoryCard selectedCategories={stateCategories} title={category.title} onCategoryClick={onSelectCategory} index={index} count={category.rank}/>
                ))}
            </div>
            <div className="categories-action">
                <Button onClick={onSave} type="primary" className="save-saved-metadata" shape="round" block>Save selected</Button>
                <Button onClick={onClear} shape="round" block >Reset clusters</Button>
            </div>
        </div>
    );
};


