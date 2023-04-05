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
    const [loading , setloading ] = useState(false);



    const focusInput = useRef()

    useEffect(()=>{
        if(!searchValue.trim()){
            return;
        }
        setloading(true)
        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
            .then(res => res.json())
            .then((res) => {
                // console.log(res.data)
                setSearchResult(res.data)
                setloading(false)
            })
    },[searchValue])


    const handelClearSearch = () => {
        setSearchValue('');
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