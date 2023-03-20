import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss"


const cx = classNames.bind(styles)
function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <h4>Sidebar</h4>
        </div>
    )
}

export default Sidebar;