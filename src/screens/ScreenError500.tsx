import React, {useEffect, useState} from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import "../index.scss";
import {NewMetadataList} from "../components/new-metadata-list/NewMetadataList";
import {MenuButton2} from "../components/menu-button/MenuButton2";
import aos from "aos";
import {ExportAction} from "../components/exort-action/ExportAction";

const error404 =
    "https://www.winx5.com/wp-content/themes/ekommart/assets/images/404/404.png";

type Screen500Props = {};

const ScreenError500: React.FC<Screen500Props> = () => {
    const [actionOption, setActionOption] = useState<string>('none');

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
            <MenuButton2 actionOption={actionOption} setActionOption={actionHandler}/>
            {actionOption !== 'none' &&
                <div className="actions-containers" data-aos='fade-right' data-aos-duration='1500'>
                    { actionOption === 'Filter' &&
                    <>
                        <h3 style={{textAlign: 'center',lineHeight: 2, fontSize: 18}}>Filter</h3>
                        <NewMetadataList metadataList={[]} savedMetadataList={[]}/>
                    </>
                    }
                    { actionOption === 'Cluster' && <h2 style={{textAlign: 'center',lineHeight: 2, fontSize: 18}}>Cluster</h2> }
                    { actionOption === 'Export' &&
                    <>
                        <h2 style={{textAlign: 'center',lineHeight: 2, fontSize: 18}}>Export</h2>
                        <ExportAction/>
                    </> }
                    { actionOption === 'Breadcrumb' && <h2 style={{textAlign: 'center',lineHeight: 2, fontSize: 18}}>Breadcrumb</h2> }
                    {/**/}
                </div>
            }

        </div>
        {/*<div*/}
        {/*  style={{*/}
        {/*    width: "80%",*/}
        {/*    marginTop: "5%",*/}
        {/*  }}*/}
        {/*>*/}
        {/*  <h2*/}
        {/*    style={{*/}
        {/*      color: "red",*/}
        {/*      textAlign: "center",*/}
        {/*      width: "95%",*/}
        {/*      fontSize: 40,*/}
        {/*    }}*/}
        {/*  >*/}
        {/*    500*/}
        {/*  </h2>*/}
        {/*  <img src={error404} alt="404" />*/}
        {/*  <p*/}
        {/*    style={{*/}
        {/*      color: "red",*/}
        {/*      padding: 0,*/}
        {/*      textAlign: "center",*/}
        {/*      fontSize: 40,*/}
        {/*    }}*/}
        {/*  >*/}
        {/*    Sorry we got into some issues...*/}
        {/*  </p>*/}
        {/*  <ButtonGroup*/}
        {/*    disableElevation*/}
        {/*    variant="contained"*/}
        {/*    color="primary"*/}
        {/*    style={{ marginBottom: "5%" }}*/}
        {/*  >*/}
        {/*    <Button*/}
        {/*      onClick={() => {*/}
        {/*        window.location.replace("/");*/}
        {/*      }}*/}
        {/*    >*/}
        {/*      Back To Homepage*/}
        {/*    </Button>*/}
        {/*  </ButtonGroup>*/}
        {/*</div>*/}
    </>
  );
};

export default ScreenError500;

ScreenError500.defaultProps = {};
