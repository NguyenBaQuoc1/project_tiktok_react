import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from './Header.module.scss';
import images from "../../../../accsets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark , faSpinner , faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; 


const cx = classNames.bind(styles)

function Header() {
    const[ searchResult , setSearchResult ] = useState([])

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1,2,3])
        },3000) 
    })
    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            
            <div className={cx('logo')} > 
                <img src={images.logo} alt="tiktok"></img>
            </div>

            <Tippy
                visible={searchResult.length > 0}
                render={attrs => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        My tippy box
                    </div>
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
                a 
                a
            </div>
        </div>
    </header> ;
}

export default Header;