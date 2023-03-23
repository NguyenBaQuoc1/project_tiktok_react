import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from './Header.module.scss';
import images from "../../../../accsets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark , faSpinner , faMagnifyingGlass, faSignIn, faEllipsisVertical, faEarthAsia, faCircleQuestion, faKeyboard } from "@fortawesome/free-solid-svg-icons";
import { Wrapper as PopperWrapper } from "../../../Popper";
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; 
import AccountItem from "../../../AccountItem";
import Button from "../../../Button";
import Menu from "../../../Menu";


const cx = classNames.bind(styles)

const MENU_ITEMS = [
    {
        icon : <FontAwesomeIcon icon={faEarthAsia}/>,
        title : 'English',
        children : {
            title : "Language",
            data : [
                {
                    code:"en",
                    title:"English"
                },
                {
                    code:"vi",
                    title:"Tieng Viet"
                }
            ]
        }
    },
    {
        icon : <FontAwesomeIcon icon={faCircleQuestion}/>,
        title : 'Feedback And Help',
        to : "/feedback"
    },
    {
        icon : <FontAwesomeIcon icon={faKeyboard}/>,
        title : 'Keyboard Shortcuts',
    },
]

function Header() {
    const[ searchResult , setSearchResult ] = useState([])

    
    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            
            <div className={cx('logo')} > 
                <img src={images.logo} alt="tiktok"></img>
            </div>

            <Tippy
                interactive
                render={attrs => (
                    <PopperWrapper >
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <h4 className={cx('search-title')}> Accounts</h4>
                            <AccountItem></AccountItem>
                            <AccountItem></AccountItem>
                            <AccountItem></AccountItem>
                            <AccountItem></AccountItem>

                        </div>
                    </PopperWrapper>
            )}>
                <div className={cx('search')}>
                    <input placeholder="Search accounts and videos" spellCheck={false}/> 
                    {/* clear input */}
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                    {/* search */}
                
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass}/>
                    </button>
                </div>
            </Tippy>

            <div className={cx('action')}>
                <Button text >Upload</Button>
                <Button primary >Log In</Button>
                <Menu items = {MENU_ITEMS}>
                    <button className={cx('more-btn')}>
                        <FontAwesomeIcon icon={faEllipsisVertical}/>
                    </button>
                </Menu>
            </div>
        </div>
    </header> ;
}

export default Header;