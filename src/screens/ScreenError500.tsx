import React, {useEffect, useState} from "react";
import "../index.scss";
import {NewMetadataList} from "../components/new-metadata-list/NewMetadataList";
import {MenuButton2} from "../components/menu-button/MenuButton2";
import aos from "aos";
import {ExportAction} from "../components/exort-action/ExportAction";
import {ClusterContainer} from "../components/cluster-container/ClusterContainer";
import {BreadCrumbList} from "../components/bread-crumb-list/BreadCrumbList";

type Screen500Props = {};

const ScreenError500: React.FC<Screen500Props> = () => {
    const [actionOption, setActionOption] = useState<string>('none');
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

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
    <>
        <div className='screen'>
            <MenuButton2 actionOption={actionOption} setActionOption={actionHandler} isOpen={isMenuOpen} setIsOpen={setIsMenuOpen}/>
            {actionOption !== 'none' &&
                <div className="actions-containers" data-aos='fade-right' data-aos-duration='1500'>
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
                        <h2 style={{textAlign: 'center',lineHeight: 2, fontSize: 18}}>Active history</h2>
                        <BreadCrumbList/>
                    </>
                    }
                    {/**/}
                </div>
            }

        </div>
    </>
  );
};

export default ScreenError500;

ScreenError500.defaultProps = {};
