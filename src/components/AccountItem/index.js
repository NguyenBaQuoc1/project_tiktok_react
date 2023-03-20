import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import classNames from "classnames/bind"
import styles from "./AccountItem.module.scss"

const cx = classNames.bind(styles)

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/0995309d9b40283f49325641059892f6~c5_100x100.jpeg?x-expires=1679328000&x-signature=uvXLWeZ%2B5%2Fk93pWv7WoChrA0tHQ%3D" alt="Hoa"/>
            <div className={cx('infor')} >
                <p className={cx('name')}>
                    <span>Nguyen Ba Quoc</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}></FontAwesomeIcon>
                </p>
                <span className={cx('user-name')}>NguyenBaQuoc</span>
            </div>
        </div>
    )
}

export default AccountItem