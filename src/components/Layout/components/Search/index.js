import HeadlessTippy from '@tippyjs/react/headless';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';


import { Wrapper as PopperWrapper } from '../../../Popper';
import styles from './Search.module.scss'
import AccountItem from '../../../AccountItem';
import { useDebounce } from '../../../../hooks';
import * as requets from '../../../../utils/requets';

const cx = classNames.bind(styles)
function Search(){
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult , setshowResult ] = useState(true);
    const [loading , setloading ] = useState(false);

    const debounced = useDebounce(searchValue , 500)

    const focusInput = useRef()

    useEffect(()=>{
        if(!debounced.trim()){
            return;
        }
        setloading(true)
        const fetchApi = async () => {
            try {
                const res = await requets.get(`users/search`,{
                    params: {
                        q:debounced,
                        type : 'less'
                    }}
                )
                setSearchResult(res.data)
                setloading(false)
            } catch (error) {
                setloading(false)
                
            }
        }
        fetchApi()
            
    },[debounced])


    const handelClearSearch = () => {
        setSearchValue('');
        focusInput.current.focus()
    }

    const handelOutSide = () =>{
        setshowResult(false)
    }

    console.log(searchResult)

    return(
        <HeadlessTippy
                    interactive
                    visible={showResult && searchResult.length >0}
                    render={(attrs) => (
                        <PopperWrapper>
                            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                <h4 className={cx('search-title')}> Accounts</h4>
                                {
                                    searchResult.map((pev)=>(
                                        <AccountItem key={pev.id} data={pev} />
                                    ))
                                }
                            </div>
                        </PopperWrapper>
                    )}
                    onClickOutside={handelOutSide}
                >
                    <div className={cx('search')}>
                        <input 
                            ref={focusInput}
                            value={searchValue} 
                            onChange={(e)=>(setSearchValue(e.target.value))}  
                            placeholder="Search accounts and videos" 
                            spellCheck={false} 
                            onFocus={()=>{setshowResult(true)}}
                        />
                        {/* clear input */}
                        {!!searchValue && !loading && (
                            <button className={cx('clear') } onClick={handelClearSearch}>
                                <FontAwesomeIcon  icon={faCircleXmark}  />
                            </button>
                        )}
                        {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                        {/* search */}

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
        </HeadlessTippy>
    )
}

export default Search