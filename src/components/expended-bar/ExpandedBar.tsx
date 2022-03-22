import React, { useEffect, useRef, useState } from 'react';
import * as ReactDOM from 'react-dom';

import './ExpandedBar.scss';
import { Overlay } from '../overly/Overly';
import { ExpandButton } from '../expanded-button/ExpandedButton';
import { useOnEscOrClickOutside } from '../use-on-esc-click-outside/UseOnEscOrClickOutside';

interface IProps {
    children: any;
    contractedHeight: number;
    expandedHeight: number;
    isPadded?: boolean;
}

export const ExpandableTopBar: React.FC<IProps> = ({
                                                       children,
                                                       contractedHeight,
                                                       expandedHeight,
                                                       isPadded,
                                                   }: IProps) => {
    const [panelExpanded, setPanelExpanded] = useState<boolean>(false);

    const container = useRef<HTMLDivElement | null>(null);
    const panel = useRef<HTMLDivElement | null>(null);
    useOnEscOrClickOutside(panel, contractPanelHandler, 'tooltip-wrapper');

    useEffect(() => {
        let timeOut: ReturnType<typeof setTimeout> | null = null;
        if (!container) {
            return;
        }
        if (panelExpanded) {
            container?.current?.classList.add('expanded');
        } else {
            timeOut = setTimeout(() => {
                container?.current?.classList.remove('expanded');
            }, 700);
        }

        return () => {
            window.clearTimeout(timeOut as ReturnType<typeof setTimeout>);
        };
    }, [panelExpanded]);

    const toggleExpandPanelHandler = () => {
        setPanelExpanded((prev) => !prev);
    };

    function contractPanelHandler() {
        setPanelExpanded(false);
    }

    const component = (
        <div ref={container} className={`expandable-topbar-container ${isPadded ? 'padded-topbar' : ''}`}>
            {isPadded ? <></> : <Overlay visible={panelExpanded} />}
            <div ref={panel} className="panel">
                <div className="fixed-element" style={{ height: `${contractedHeight}px`, background: 'white' }}>
                    {children[0] ? children[0] : '...loading'}
                </div>
                <div
                    className={`expanding-element ${panelExpanded ? 'expanded' : ''}`}
                    style={{
                        height: `${panelExpanded ? expandedHeight - contractedHeight : 0}px`,
                        transition: 'all 0.5s',
                        borderTop: '1px solid var(--app-background)',
                    }}
                >
                    {React.cloneElement(children[1], { style: { overflow: 'hidden', height: '100%' } })}
                    <ExpandButton active={panelExpanded} toggleExpand={toggleExpandPanelHandler} />
                </div>
            </div>
        </div>
    );

    const modalRoot = document.querySelector('.app-container');
    if (modalRoot) {
        if (isPadded) {
            return component;
        } else {
            return ReactDOM.createPortal(component, modalRoot);
        }
    } else {
        return <></>;
    }
};
