import styles from './'
import classNames from "classnames";

const cx = classNames.bind(styles)
function Header() {
    return <header className={cx('wrapper')}>nguyenbaquoc</header>;
}

export default Header;