import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import classNames from "classnames/bind"
import Image from "../Image"
import styles from "./AccountItem.module.scss"

const cx = classNames.bind(styles)

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image className={cx('avatar')} src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/39911deb09b62b80810dec42c0722bbd~c5_100x100.jpeg?x-expires=1679932800&x-signature=cdLyD8lP1ewCP2c32PF7Yag0n1Y%3D" alt="Hoa"/>
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