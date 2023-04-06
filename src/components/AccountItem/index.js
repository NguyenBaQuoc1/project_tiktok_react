import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import classNames from "classnames/bind"
import Image from "../Image"
import styles from "./AccountItem.module.scss"

const cx = classNames.bind(styles)

function AccountItem(pev) {
    const userAccount = pev.data
    return (
        <div className={cx('wrapper')}>
            <Image className={cx('avatar')} src={userAccount.avatar} alt={userAccount.full_name}/>
            <div className={cx('infor')} >
                <p className={cx('name')}>
                    <span>{userAccount.full_name}</span>
                    {userAccount.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/> }
                </p>
                <span className={cx('user-name')}>{userAccount.nickname}</span>
            </div>
        </div>
    )
}

export default AccountItem