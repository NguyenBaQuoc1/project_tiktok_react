import { Wrapper as PopperWrapper } from '../../../Popper';
import HeadlessTippy from '@tippyjs/react/headless';
import AccountItem from '../../../AccountItem';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Search.module.scss'

const cx = classNames.bind(styles)
function Search(){
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult , setshowResult ] = useState(true);


    const focusInput = useRef()

    useEffect(()=>{
        setTimeout(()=>{
            setSearchResult([1,2,3,4])
        },0)
    })


    const handelClearSearch = () => {
        setSearchValue('');
        setSearchValue([]);
        focusInput.current.focus()
    }

    const handelOutSide = () =>{
        setshowResult(false)
    }

    return(
        <HeadlessTippy
                    interactive
                    visible={showResult && searchResult.length >0}
                    render={(attrs) => (
                        <PopperWrapper>
                            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                <h4 className={cx('search-title')}> Accounts</h4>
                                <AccountItem></AccountItem>
                                <AccountItem></AccountItem>
                                <AccountItem></AccountItem>
                                <AccountItem></AccountItem>
                            </div>
                        </PopperWrapper>
                    )}
                    onClickOutside={handelOutSide}
                >
                    <div className={cx('search')}>
                        <input 
                            ref={focusInput}
                            value={searchValue} 
                            onChange={(e)=>{setSearchValue(e.target.value)}}  
                            placeholder="Search accounts and videos" 
                            spellCheck={false} 
                            onFocus={()=>{setshowResult(true)}}
                        />
                        {/* clear input */}
                        {!!searchValue && (
                            <button className={cx('clear') } onClick={handelClearSearch}>
                                <FontAwesomeIcon  icon={faCircleXmark}  />
                            </button>
                        )}
                        {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}
                        {/* search */}

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
        </HeadlessTippy>
    )
}

export default Search