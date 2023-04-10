import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Sidebar.module.css";
import * as action from "../../redux/actions";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
    // const allProducts = useSelector((state) => state.products);
  //   const ByCategory = useSelector((state) => state.productsFitered);
  const dispatch = useDispatch();

 
  function handleButtonClick(event) {
    let listElements = document.querySelectorAll(".list_button--click");
    listElements.forEach((listElement) => {
      listElement.addEventListener("click", () => {
        listElement.classList.toggle("arrow");

        let height = 0;
        let menu = listElement.nextElementSibling;
        if (menu.clientHeight === 0) {
          height = menu.scrollHeight;
        }
        menu.style.height = `${height}px`;
      });
    });
  }
  const handlerActions = (event) => {
    switch (event.currentTarget.textContent) {
      case "Ver Todo":
        dispatch(action.getAllProducts());
        break;
        case "Ofertas":
            dispatch(action.getAllProducts());
            break;
      case "Indumentaria":
        dispatch(action.getProductByCategory(event.currentTarget.textContent));
        break;
      case "Deportes":
        dispatch(action.getProductByCategory(event.currentTarget.textContent));
        break;
      case "Cosmética":
        dispatch(action.getProductByCategory(event.currentTarget.textContent));
        break;

      case "Jardinería":
        dispatch(action.getProductByCategory(event.currentTarget.textContent));
        break;
      case "Informatica":
        dispatch(action.getProductByCategory(event.currentTarget.textContent));
        break;
      case "Alimentos":
        dispatch(action.getProductByCategory(event.currentTarget.textContent));
        break;
      case "Herramientas":
        dispatch(action.getProductByCategory(event.currentTarget.textContent));
        break;
      case "Juguetes":
        dispatch(action.getProductByCategory(event.currentTarget.textContent));
        break;
      case "Muebles":
        dispatch(action.getProductByCategory(event.currentTarget.textContent));
        break;
      case "Joyería":
        dispatch(action.getProductByCategory(event.currentTarget.textContent));
        break;
      case "Electrodomesticos":
        dispatch(action.getProductByCategory(event.currentTarget.textContent));
        break;
      case "Por nombre a-z":
        dispatch(action.orderedByNameASC() );
        break;
      case "Por nombre z-a":
        dispatch(action.orderedByNameDESC());
        break;
      case "Mayor precio":
        dispatch(action.orderedByHighestPrice());
        break;
      case "Menor precio":
        dispatch(action.orderedByLowestPrice());
        break;
      case "Nuevos":
        dispatch(action.filterByNewProducts());
        break;
      case "Usados":
        dispatch(action.filterByUsedProducts());
        break; 
        case "Reacondicionado":
        dispatch(action.filterByRefurbishedProducts());
        break;
      case "Recientes":
        dispatch(action.getAllProducts);
        break;
      case "Ofertas":
        dispatch(action.getAllProducts);
        break;
      default:
        dispatch(action.getAllProducts());

        break;
    }
  };

  return (
    <div className="nav_contenedor">
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.list_item}>
            <div className={styles.list_button}>
              <img
                className={styles.list_img}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAARtJREFUSEvVlNsNQiEQROd2opWonWglaiVqJWol2onmJEvCxYUlGj4k4YswZ2dfkwafabC+egELSSdJa0lPu0dJtyjAHsDWxEstQBdJhxYkAhDx1QSIGDHcAN2bk13LSQQgLYgl8TzY5Iw0bWouIsDDIl5atLkOTngnVby75xcAgi9TrepEAPJPHbwUUQ/qcJZEHb5ykKchdUxeZETJf7VdIwcIpEi9CIkcB9XTA+Dz0EGLhrX5HjkgPSsrtDfJtOi9Nc01AJ3DkJGangPInWgPkK+H6keDEwCtyh+3ozxAmt5mf2e2yt00m+oS0LVfnJzlXTYbyhKQllvY3w4kpXa2/EpAa7lFxXaXXwkIl1dA+fgfzUEUdfj+/4A3ooFEGV62zuoAAAAASUVORK5CYII="
              />
              <span className={"nav_link"} onClick={handlerActions}>
                Ver Todo
              </span>
            </div>
          </li>
          <li className={styles.list_item}>
            <div className={styles.list_button}>
              <img
                className={styles.list_img}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAARtJREFUSEvVlNsNQiEQROd2opWonWglaiVqJWol2onmJEvCxYUlGj4k4YswZ2dfkwafabC+egELSSdJa0lPu0dJtyjAHsDWxEstQBdJhxYkAhDx1QSIGDHcAN2bk13LSQQgLYgl8TzY5Iw0bWouIsDDIl5atLkOTngnVby75xcAgi9TrepEAPJPHbwUUQ/qcJZEHb5ykKchdUxeZETJf7VdIwcIpEi9CIkcB9XTA+Dz0EGLhrX5HjkgPSsrtDfJtOi9Nc01AJ3DkJGangPInWgPkK+H6keDEwCtyh+3ozxAmt5mf2e2yt00m+oS0LVfnJzlXTYbyhKQllvY3w4kpXa2/EpAa7lFxXaXXwkIl1dA+fgfzUEUdfj+/4A3ooFEGV62zuoAAAAASUVORK5CYII="
              />
              <span className={"nav_link"} onClick={handlerActions}>
                Ofertas
              </span>
            </div>
          </li>
          <li className={`${styles.list_item} ${styles.list_item_click}`}>
            <div
              className={`${styles.list_button} ${isOpen ? styles.arrow : ""}`}
              onClick={handleButtonClick}
            >
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAXRJREFUSEvFlYtNBDEMROc6gUqASoBKgErgKgEqASoBPZSJZrPezyGdiHTKKmd7bM84OejM63Dm+NoDcC2J31XbPyW9SfpqO9+Law3gQtJzC7oWA8AbSeyztQTwKOmhWeN4jGwBpiL227bbBr/JqgAy+JOkmVNEAOQukpnZjwA4fLQAlL3a3wCiotfWpvv0GwEwwvhFEoanLFdOuy7tmACUCqkTgxMQUhS9+gRwBtlHzqimVEgj2BWTyyxGApA9VdAagmbJlQwzY/uYC7jDZzJokIsT/SNjvuGEfdR6Bs+WWiT9LCsYAUigAuHcA1jx9d14+42dAFbQKM8RhKC0ogpuoXQVbpFsESUIZ0tKWyU5h6XreJhaqmRV/3PuLpj0SYuSuKVBM+HVeFiFXUEjBybVV0XPYsewuXpMJxxWl52JwnjrssvhKu0rgPGG9APzHpeYr2xf14vJ/NuDk/IkW35+Mi1TV/TnJ3MHt9smex797SgrFj8cvm0ZvRlr2QAAAABJRU5ErkJggg==" />
              <span className={styles.nav_link}>Categorias</span>
              <img
                className={styles.list_arrow}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAJJJREFUSEvt1MEJgDAQRNFvJ9qJdmIn2ol2YiuWIgMRxEOyExAUzMVLmGdmow0Pr+bhfH6g2PCrKpqBFdiLr33ZED2BwqcUPjhIFGiBDdBTJwgjUUCHrkIcoApxARupBRagT/PocrfKBTSHcLhgB7DDHaAq3AHGVI2+gWzn93k4FQnRr8JaDmAFn5t/oFjb9ys6AAkuHBlC5x93AAAAAElFTkSuQmCC"
              />
            </div>
            <ul className={styles.list_show}>
              <li className={styles.list_1} onClick={handlerActions}>
                Indumentaria
              </li>
              <li className={styles.list_2} onClick={handlerActions}>
                Electrodomesticos
              </li>
              <li className={styles.list_3} onClick={handlerActions}>
                Informatica
              </li>
              <li className={styles.list_4} onClick={handlerActions}>
                Cosmética
              </li>
              <li className={styles.list_5} onClick={handlerActions}>
                Alimentos
              </li>
              <li className={styles.list_6} onClick={handlerActions}>
                Juguetes
              </li>
              <li className={styles.list_7} onClick={handlerActions}>
                Muebles
              </li>
              <li className={styles.list_8} onClick={handlerActions}>
                Jardinería
              </li>
              <li className={styles.list_9} onClick={handlerActions}>
                Deportes
              </li>
              <li className={styles.list_10} onClick={handlerActions}>
                Joyería
              </li>
              <li className={styles.list_11} onClick={handlerActions}>
                Herramientas
              </li>
            </ul>
          </li>
          <li className={`${styles.list_item} ${styles.list_item_click}`}>
            <div
              className={`${styles.list_button} ${isOpen ? styles.arrow : ""}`}
              onClick={handleButtonClick}
            >
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAXRJREFUSEvFlYtNBDEMROc6gUqASoBKgErgKgEqASoBPZSJZrPezyGdiHTKKmd7bM84OejM63Dm+NoDcC2J31XbPyW9SfpqO9+Law3gQtJzC7oWA8AbSeyztQTwKOmhWeN4jGwBpiL227bbBr/JqgAy+JOkmVNEAOQukpnZjwA4fLQAlL3a3wCiotfWpvv0GwEwwvhFEoanLFdOuy7tmACUCqkTgxMQUhS9+gRwBtlHzqimVEgj2BWTyyxGApA9VdAagmbJlQwzY/uYC7jDZzJokIsT/SNjvuGEfdR6Bs+WWiT9LCsYAUigAuHcA1jx9d14+42dAFbQKM8RhKC0ogpuoXQVbpFsESUIZ0tKWyU5h6XreJhaqmRV/3PuLpj0SYuSuKVBM+HVeFiFXUEjBybVV0XPYsewuXpMJxxWl52JwnjrssvhKu0rgPGG9APzHpeYr2xf14vJ/NuDk/IkW35+Mi1TV/TnJ3MHt9smex797SgrFj8cvm0ZvRlr2QAAAABJRU5ErkJggg==" />
              <span className={styles.nav_link}>Ordenar</span>
              <img
                className={styles.list_arrow}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAJJJREFUSEvt1MEJgDAQRNFvJ9qJdmIn2ol2YiuWIgMRxEOyExAUzMVLmGdmow0Pr+bhfH6g2PCrKpqBFdiLr33ZED2BwqcUPjhIFGiBDdBTJwgjUUCHrkIcoApxARupBRagT/PocrfKBTSHcLhgB7DDHaAq3AHGVI2+gWzn93k4FQnRr8JaDmAFn5t/oFjb9ys6AAkuHBlC5x93AAAAAElFTkSuQmCC"
              />
            </div>
            <ul className={styles.list_show} onClick={handlerActions}>
              <li className={styles.list_12} onClick={handlerActions}>
                Por nombre a-z
              </li>
              <li className={styles.list_13} onClick={handlerActions}>
                Por nombre z-a
              </li>
              <li className={styles.list_14} onClick={handlerActions}>
                Mayor precio
              </li>
              <li className={styles.list_15} onClick={handlerActions}>
                Menor precio
              </li>
              <li className={styles.list_16} onClick={handlerActions}>
                Nuevos
              </li>
              <li className={styles.list_17} onClick={handlerActions}>
                Usados
              </li>
              <li className={styles.list_17} onClick={handlerActions}>
                Reacondicionado
              </li>
              <li className={styles.list_18} onClick={handlerActions}>
                Recientes
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
