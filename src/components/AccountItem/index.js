import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import classNames from "classnames/bind"
import Image from "../Image"
import styles from "./AccountItem.module.scss"

const cx = classNames.bind(styles)

function AccountItem(pev) {
    const userAccout = pev.data
    return (
        <div className={cx('wrapper')}>
            <Image className={cx('avatar')} src={userAccout.avatar} alt={userAccout.full_name}/>
            <div className={cx('infor')} >
                <p className={cx('name')}>
                    <span>{userAccout.full_name}</span>
                    {userAccout.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/> }
                </p>
                <span className={cx('user-name')}>{userAccout.nickname}</span>
            </div>
        </div>
    )
}

export default AccountItem