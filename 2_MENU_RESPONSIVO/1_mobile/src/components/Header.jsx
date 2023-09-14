import { List } from "@phosphor-icons/react"
import { Fire } from "@phosphor-icons/react"
import Styles from "./Header.module.css"
function Header() {
  return (
    <header className={Styles.header}>
        <div className={Styles.mobile}>
            <div className={Styles.menu}>
                <button>
                    <List size={32}/>
                </button>

                <h1><Fire size={32} color="#c22b05" /></h1>
            </div>
            <div className={Styles.options}>
              <nav>
                <a href="">Home</a>
                <a href="">Resultados</a>
                <a href="">Produtos</a>
                <a href="">Login</a>
              </nav>
            </div>
        </div>
    </header>
  )
}

export default Header