import React, {useEffect, useState} from "react";
import {Button, Divider, Slider} from "antd";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import "./CategoryList.scss";
import {CategoryCard} from "../category/CategoryCard";
import {
    getCatalog,
    patchCategories,
    patchNumberOfCluster,
    resetCluster,
    stringCategoriesFromArray,
    setNewIteration
} from "../../actions/CatalogAction";
import Swal from "sweetalert2";
import {INewSingleCatalog} from "../../reducers/CatalogReducer";
import {IMetadataWithCategory} from "../new-metadata-list/NewMetadataList";
import {PieChartComponent} from "../pie-chart/PieChart";
import {metadataListToSerialize} from "../../screens/ScreenArticles";

type CategoriesListProps = {

};

export interface SelectedCategory {
    category: INewSingleCatalog;
    isSelected: boolean;
    color: string;
}

export const fromCategoriesToSelected = (categories: Array<INewSingleCatalog>) : Array<SelectedCategory> => {
    let newArray: Array<SelectedCategory> = [];
    categories.forEach(category => {
        newArray.push({category:category, isSelected: false, color: "white"});
    })
    return newArray;
}

export const fromSelectedToCategories = (categories: Array<SelectedCategory>) : Array<INewSingleCatalog> => {
    let newArray: Array<INewSingleCatalog> = [];
    categories.forEach(category => {
        newArray.push(category.category);
    })
    return newArray;
}

export const selectOneCategory = (categories: Array<INewSingleCatalog>, index: number) : Array<SelectedCategory> => {
    let newArray: Array<SelectedCategory> = [...fromCategoriesToSelected(categories)];
    newArray[index].isSelected = !newArray[index].isSelected;
    return newArray;
}

export const removeSelectedCategories = (categories: Array<SelectedCategory>) : Array<SelectedCategory> => {
    let newArray: Array<SelectedCategory> = [];
    categories.forEach(category => {
        if (category.isSelected === false)  newArray.push(category);
    })
    return newArray;
}


export const CategoriesList: React.FC<CategoriesListProps> = (props) => {
    // @ts-ignore
    // SERVER
    const catalog = useAppSelector<Array< INewSingleCatalog>>(state => state.catalog.catalogs);
    const categories = useAppSelector<Array< INewSingleCatalog>>(state => state.catalog.selectedCategories);
    const queryId = useAppSelector<string>(state => state.query.queryId);
    const savedMetadataList = useAppSelector<Array<IMetadataWithCategory>>(state => state.metadata.savedMetadataList);
    const numberOfClusters = useAppSelector<number>(state => state.catalog.numOfClusters);

    // SELECTED
    const [selectedCategories, setSelectedCategories] = useState<Array<SelectedCategory>>([...fromCategoriesToSelected(categories)]);
    const [numOfClusters, setNumOfClusters] = useState<number>(numberOfClusters);

    const dispatch = useAppDispatch()

    useEffect(()=>{
        // @ts-ignore
        dispatch(resetCluster());
        // @ts-ignore
        dispatch(getCatalog(queryId, 100,  metadataListToSerialize(savedMetadataList), stringCategoriesFromArray(categories), numberOfClusters ));
    },[])


    useEffect(()=>{
        // @ts-ignore
         dispatch(resetCluster());
        // @ts-ignore
        dispatch(getCatalog(queryId, 100,  metadataListToSerialize(savedMetadataList), stringCategoriesFromArray(categories), numberOfClusters ));
    },[queryId, numberOfClusters])

    useEffect(()=>{
        console.log(catalog)
    },[catalog ])

    useEffect(()=>{
        console.log( "selectedCategories")
        console.log(selectedCategories)
    },[ selectedCategories ])


    useEffect(()=>{
        console.log(categories)
        const item = fromCategoriesToSelected(categories);
        console.log(categories)
        setSelectedCategories([...item]);
    },[ categories ])

    useEffect(()=>{
        console.log(numberOfClusters);
        setNumOfClusters(numberOfClusters)
    },[numberOfClusters])


    const handlerNumOfClusters = (newNumber: number) => {
        setNumOfClusters(newNumber);
    }

    const handlerClick = (categories: Array<INewSingleCatalog>, index: number) => {
        const newArray = [...selectOneCategory(categories, index)];
        setSelectedCategories([...newArray]);
    }

    /**
     * RIGHT NOW CAN ONLY ADD TO THIS ARRAY
     * */
    // const pieHandleClick = (category: string, color: string ) => {
    //     let newItem = catalog.find(item => item.title === category);
    //     console.log(newItem);
    //     if (newItem) {
    //         let newSavedCategory = {category:newItem, isSelected: true, color: color}
    //         console.log([...selectedCategories, {...newSavedCategory}]);
    //         setSelectedCategories([...selectedCategories, {...newSavedCategory}]);
    //         const newCategories: INewSingleCatalog[] = fromSelectedToCategories(selectedCategories);
    //         console.log(newCategories);
    //         // @ts-ignore
    //         dispatch(patchCategories(newCategories));
    //     }
    // }
    const pieHandleClick = (categoriesList: INewSingleCatalog[]) => {
        // @ts-ignore
        dispatch(patchCategories(categoriesList));
    }
    // const pieHandleClick = (categoriesList: INewSingleCatalog[]) => {
    //     // let newCategories: INewSingleCatalog[] = [];
    //     // categoriesList.forEach(category => {
    //     //     let newItem = catalog.find(item => item.title === category.name)
    //     //     console.log(newItem);
    //     //     newCategories.push({
    //     //         // @ts-ignore
    //     //         category: newItem,
    //     //         isSelected: true,
    //     //         color: category.color
    //     //     })
    //     // })
    //     // console.log(newCategories);
    //     // @ts-ignore
    //     dispatch(patchCategories(categoriesList));
    //     // @ts-ignore
    //     // setSelectedCategories([], newCategories);
    //     // newCategories = fromSelectedToCategories(selectedCategories);
    //     // console.log(newCategories);
    //     // @ts-ignore

    //     // let newItem = catalog.find(item => item.title === category);
    //     // // console.log(newItem);
    //     // if (newItem) {
    //     //     let newSavedCategory = {category:newItem, isSelected: true, color: color}
    //     //     console.log([...selectedCategories, {...newSavedCategory}]);
    //     //     setSelectedCategories([...selectedCategories, {...newSavedCategory}]);
    //     //     const newCategories: INewSingleCatalog[] = fromSelectedToCategories(selectedCategories);
    //     //     console.log(newCategories);
    //     //     // @ts-ignore
    //     //     dispatch(patchCategories(newCategories));
    //     // }
    // }

    const onClear = () => {
        Swal.fire({
            title: 'Are you sure you want to zoom out and remove the clusters?',
            text: `The results will be back to regular list of resaults`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, zoom out'
        }).then((result) => {
            if (result.isConfirmed) {
                // @ts-ignore
                dispatch(getCatalog(queryId, 100, savedMetadataList, categories, numberOfClusters ));
                Swal.fire(
                    'Clusters removed!',
                    'Your articles list has been updated.',
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
            confirmButtonText: 'Yes, zoom in'
        }).then((result) => {
            if (result.isConfirmed) {
                // @ts-ignore
                dispatch(setNewIteration(queryId, 100, savedMetadataList, categories, numberOfClusters))
                // const newCategories: INewSingleCatalog[] = fromSelectedToCategories(selectedCategories);
                // console.log(newCategories);
                // dispatch(patchCategories(newCategories))
                // Swal.fire(
                    // 'Success!',
                    // 'Your articles list has been updated.',
                    // 'success'
                // )

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
                dispatch(patchNumberOfCluster(numOfClusters));

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
                <Slider className="slider" min={2} max={5} dots={true} tooltipVisible={true} onChange={handlerNumOfClusters} value={numOfClusters} />
                <Button className="slider-button" onClick={onSaveNumberOfClusters} shape="round" >Save</Button>
            </div>
            {/* <Divider orientation="left">Saved categories</Divider>
            <div className="categories-list categories-saved-list">
                {selectedCategories.map((category, index)=>(
                    <CategoryCard isSelected={category.isSelected}
                                  selectedCategories={categories}
                                  title={category.category.title}
                                  onCategoryClick={handlerClick}
                                  index={index}
                                  count={category.category.rank}
                                  color={category.color}
                    />
                ))}
            </div> */}
            {/* <Divider orientation="left">Articles categories list</Divider> */}
            {/* <h4 style={{color: "#1890ff", marginLeft: 20}}>You select {categories.length} categories</h4> */}
            {/* <h5 style={{color: "gray" , marginLeft: 20}}>Maximum to choose is 2 categories</h5> */}
            {/*<div className="categories-list">*/}
            {/*    {selectedCategories.map((category, index)=>(*/}
            {/*        <CategoryCard isSelected={category.isSelected} selectedCategories={fromSelectedToCategories(selectedCategories)} title={category.category.title} onCategoryClick={handlerClick} index={index} count={category.category.rank}/>*/}
            {/*    ))}*/}
            {/*</div>*/}
            <PieChartComponent categories={catalog} onSelect={pieHandleClick}/>
            <div className="categories-action">
                <Button onClick={onSave} type="primary" className="save-saved-metadata" shape="round" block>Zoom In</Button>
                <Button onClick={onClear} shape="round" block >Reset clusters</Button>
            </div>
        </div>
    );
};


