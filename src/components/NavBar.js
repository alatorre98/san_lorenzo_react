import { NavLink } from "react-router-dom";
import styles from "../styles/NavBar.module.css";

export default function NavBar() {
    return (
        <div className={styles.navbarContainer}>
            <nav className={styles.navbar}>
                <ul>
                    <li>
                        <NavLink to="/" 
                            className={({ isActive}) =>
                                isActive ? styles.activeNavLink : styles.navlink
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className={styles.navlink}>Locations
                    
                    </li>
                    <li>
                        <NavLink to="/about" 
                            className={({ isActive}) =>
                                isActive ? styles.activeNavLink : styles.navlink
                            }
                        >
                            About
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};