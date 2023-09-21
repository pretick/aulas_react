import { List, X } from "@phosphor-icons/react"
import { useState } from "react"
import { Fire } from "@phosphor-icons/react"
import Styles from "./Header.module.css"
function Header() {
   const [AbrirMenu, setAbrirMenu] = useState(false)

   function handleAbrirFecharMenu () {
      if (AbrirMenu === true) {
        setAbrirMenu(false)
        return
      }

      setAbrirMenu(true)
   }
  return (
    <header className={Styles.header}>
        <div className={Styles.mobile}>
            <div className={Styles.menu}>
                <button onClick={handleAbrirFecharMenu}>
                    {
                      AbrirMenu === true ? (
                        <X size={32} />
                      ) : (
                        <List size={32} />
                      )
                    }
                </button>

                <h1><Fire size={32} color="#c22b05" /></h1>
            </div>
            <div className={`${Styles.options} ${AbrirMenu === true && Styles.open}`}>
              <nav className="">
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