import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from './Header.module.scss';
import images from "../../../../accsets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark , faSpinner , faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Wrapper as PopperWrapper } from "../../../Popper";
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; 
import AccountItem from "../../../AccountItem";
import Button from "../../../Button";


const cx = classNames.bind(styles)

function Header() {
    const[ searchResult , setSearchResult ] = useState([])

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1,2,3])
        },3000) 
    },[])
    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            
            <div className={cx('logo')} > 
                <img src={images.logo} alt="tiktok"></img>
            </div>

            <Tippy
                interactive
                visible={searchResult.length > 0}
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
                <Button primary  onClick={() => {alert('hello')}} >Log In</Button>

            </div>
        </div>
    </header> ;
}

export default Header;