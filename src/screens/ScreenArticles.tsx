import React, {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../hooks/hooks";
import "../index.scss"
import {ArticlesContainer} from "../components/articles-container/ArticleContainer";
import {useHistory} from "react-router-dom";
import {HomePageHeader} from "../components/home-page-header/HomePageHeader";
import {CollectionContainer} from "../components/collection-container/CollectionContainer";
import {IMetadataWithCategory, NewMetadataList} from "../components/new-metadata-list/NewMetadataList";
import {ArticleOfList, getFilteredArticles, resetArticles, updateCountFromBreadcrum} from "../actions/ArticleActions";
import {ArticleList} from "../modules/articles/articlesList/ArticleList";
import {Spin} from "antd";
import {getTitlesFromMetadata} from "../components/metadata-list/MetadataList";
import {MenuButton2} from "../components/menu-button/MenuButton2";
import {ClusterContainer} from "../components/cluster-container/ClusterContainer";
import {ExportAction} from "../components/exort-action/ExportAction";
import {BreadCrumbList} from "../components/bread-crumb-list/BreadCrumbList";
import aos from "aos";
import {INewSingleCatalog} from "../reducers/CatalogReducer";
import {stringCategoriesFromArray, updateCategoriesFromBreadcrumbs} from "../actions/CatalogAction";
import {updateQueryFromBreadCrumbs} from "../actions/QueryActions";
import {IBreadCrumb} from "../reducers/BreadcrumbReducer";
import {updateMetadataFromBreadcrumbs} from "../actions/MeatadataAction";


type ScreenProfileProps = {};

export const truncateMetadataType = (type: string) => {
    if (type === "AUTHORS")  return "authors";
    else if(type === "TOPICS") return "topics";
    else if(type === "COMMON_WORDS") return "frequentWords";
    else if(type === "YEARS") return "year";
    else return "fieldsOfStudy";
}


export const truncateMetadataTypeToObject = (metadata: IMetadataWithCategory) => {
    console.log(metadata)
    if (metadata.category === "AUTHORS")  return {authors: metadata.metadata.title.toString()};
    else if(metadata.category === "TOPICS") return {topics: metadata.metadata.title.toString()};
    else if(metadata.category === "COMMON_WORDS") return {frequentWords: metadata.metadata.title.toString()};
    else if(metadata.category === "YEARS") return {year: metadata.metadata.title.toString()};
    else return {fieldsOfStudy: metadata.metadata.title.toString()};
}


export const metadataListToSerialize = (metadataList: Array<IMetadataWithCategory>) => {
    let urlParams:string = "";
    console.log(metadataList)
    metadataList.forEach((metadata:IMetadataWithCategory) => {
        let str = serialize(truncateMetadataTypeToObject(metadata));
        urlParams+=str + '%$';
    });
    let responseStr =  urlParams.slice(0,-2);
    console.log(responseStr);
    return responseStr;
}

export const serialize = function(obj:any) {
    var str = [];
    for (var p in obj)
        if (obj.hasOwnProperty(p)) {
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        }
    return str.join("&");
}


const ScreenArticles: React.FC<ScreenProfileProps> = () => {
    const queryId = useAppSelector<string>(state => state.query.queryId);
    // @ts-ignore
    const articles = useAppSelector<Array<ArticleOfList>>(state => state.article.serverArticles);
    const savedMetadataList = useAppSelector<Array<IMetadataWithCategory>>(state => state.metadata.savedMetadataList);
    const categories = useAppSelector<Array<INewSingleCatalog>>(state => state.catalog.selectedCategories);
    const numberOfClusters = useAppSelector<Array<INewSingleCatalog>>(state => state.catalog.numOfClusters);
    const searching_words = useAppSelector<string[]>(state => state.query.searching_words);

    const currentState = useAppSelector<IBreadCrumb>(state => state.breadcrumbs.currentState);

    const [isLoader, setIsLoader] = useState<boolean>(false);
    const [localCount, setCount] = useState<number>(100);
    const [actionOption, setActionOption] = useState<string>('none');
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const history = useHistory();
    const dispatch = useAppDispatch();


    useEffect(()=>{
        if (queryId === ''){
            history.replace('/');
        }
        setIsLoader(true);
        // @ts-ignore
        dispatch(resetArticles());

        const x = metadataListToSerialize(savedMetadataList);
        console.log(x)
        // @ts-ignore
        dispatch(getFilteredArticles(queryId, metadataListToSerialize(savedMetadataList) , localCount, stringCategoriesFromArray(categories), numberOfClusters ));
    },[queryId, savedMetadataList, numberOfClusters, categories, searching_words])


    useEffect(()=>{
        if(articles.length === 0)  setIsLoader(true);
        else setIsLoader(false);
    },[articles])


    useEffect(()=>{
        aos.init({duration: 1000})
    },[])

    useEffect(()=>{
        console.log(currentState);
        // UPDATE QUERY
        // TODO ADD HERE TO INTERFACE ALSO THE OPERATOR
        //dispatch(updateQueryFromBreadCrumbs(currentState.queryList));

        // UPDATE METADATA
        // @ts-ignore
       // dispatch(updateMetadataFromBreadcrumbs(currentState.metadataList));

        // UPDATE CLUSTER
        // TODO ADD HERE NUMBER OF CLUSTERS
        // dispatch(updateCategoriesFromBreadcrumbs(currentState.clusters, 0));

        // UPDATE NUMBER OF ARTICLES
        // dispatch(updateCountFromBreadcrum(currentState.count));

    },[currentState])

    const actionHandler = (newAction: string) => {
        setActionOption('none');
        setTimeout(() => {
            if(newAction === 'Filter'){
                setActionOption('Filter');
            }
            if(newAction === 'Cluster'){
                setActionOption('Cluster');
            }
            if(newAction === 'Export'){
                setActionOption('Export');
            }
            if(newAction === 'Breadcrumb'){
                setActionOption('Breadcrumb');
            }
            if(newAction === 'none'){
                return
            }
        }, 200);
    }

  return (
    queryId !== '' || articles.length !== 0 ?
    <div className="screen screen-articles">
        <MenuButton2 actionOption={actionOption} setActionOption={actionHandler} isOpen={isMenuOpen} setIsOpen={setIsMenuOpen}/>
        {actionOption !== 'none' &&
        <div className={`actions-containers ${isMenuOpen && 'isMenuOpen'}`} data-aos='fade-right' data-aos-duration='1500'>
            { actionOption === 'Filter' &&
            <>
                <h3 style={{textAlign: 'center',lineHeight: 2, fontSize: 18}}>Filter</h3>
                <NewMetadataList metadataList={[]} savedMetadataList={[]}/>
            </>
            }
            {actionOption === 'Cluster' &&
            <>
                <h2 style={{textAlign: 'center', lineHeight: 2, fontSize: 18}}>Cluster</h2>
                <ClusterContainer/>
            </>
            }
            { actionOption === 'Export' &&
            <>
                <h2 style={{textAlign: 'center',lineHeight: 2, fontSize: 18}}>Export</h2>
                <ExportAction/>
            </> }
            { actionOption === 'Breadcrumb' &&
            <>
                <h2 style={{textAlign: 'center',lineHeight: 2, fontSize: 18}}>Breadcrumb</h2>
                <BreadCrumbList/>
            </>
            }
        </div>
        }
        {
            isLoader ? <div className="loader-container">
                <Spin size="large" />
                <h4 className="loader-articles-details">Searching for articles</h4>
            </div> :
            <div>
                <ArticleList articles={articles} queryId={queryId} savedMetadataList={savedMetadataList}/>
            </div>
        }
    </div> : <div className="screen screen-articles"> </div>

  );
};

export default ScreenArticles;

ScreenArticles.defaultProps = {};
