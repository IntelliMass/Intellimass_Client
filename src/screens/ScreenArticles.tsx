import React, {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../hooks/hooks";
import "../index.scss"
import {ArticlesContainer} from "../components/articles-container/ArticleContainer";
import {useHistory} from "react-router-dom";
import {HomePageHeader} from "../components/home-page-header/HomePageHeader";
import {CollectionContainer} from "../components/collection-container/CollectionContainer";
import {NewMetadataList} from "../components/new-metadata-list/NewMetadataList";
import {ArticleOfList, getFilteredArticles} from "../actions/ArticleActions";
import {ArticleList} from "../modules/articles/articlesList/ArticleList";
import {Spin} from "antd";
import {getTitlesFromMetadata} from "../components/metadata-list/MetadataList";
import {MenuButton2} from "../components/menu-button/MenuButton2";
import {ClusterContainer} from "../components/cluster-container/ClusterContainer";
import {ExportAction} from "../components/exort-action/ExportAction";
import {BreadCrumbList} from "../components/bread-crumb-list/BreadCrumbList";
import aos from "aos";



type ScreenProfileProps = {};

const ScreenArticles: React.FC<ScreenProfileProps> = () => {
    const queryId = useAppSelector<string>(state => state.query.queryId);
    // @ts-ignore
    const articles = useAppSelector<Array<ArticleOfList>>(state => state.article.serverArticles);
    const query = useAppSelector<string>(state => state.query.query);
    const [isLoader, setIsLoader] = useState<boolean>(false);
    const [localCount, setCount] = useState<number>(100);
    const [actionOption, setActionOption] = useState<string>('none');
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const history = useHistory();
    const dispatch = useAppDispatch();

    useEffect(()=>{
        setIsLoader(true);
    },[queryId]);


    useEffect(()=>{
        if (queryId === ''){
            history.replace('/');
        }
        setIsLoader(true);
        // @ts-ignore
        dispatch(getFilteredArticles(queryId, [], 'frequentWords', localCount));
    },[queryId, query])


    useEffect(()=>{
        if(articles.length === 0)  setIsLoader(true);
        else setIsLoader(false);
    },[articles])


    useEffect(()=>{
        aos.init({duration: 1000})
    },[])

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
    <div className="screen">
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
            {/**/}
        </div>
        }
        {
            isLoader ? <div className="loader-container">
                <Spin size="large" />
                <h4 className="loader-articles-details">Searching for articles</h4>
            </div> :
            <div>
                <ArticleList articles={articles} queryId={queryId} query={query}/>
            </div>
        }
    </div> : <div className="screen"> </div>

  );
};

export default ScreenArticles;

ScreenArticles.defaultProps = {};
