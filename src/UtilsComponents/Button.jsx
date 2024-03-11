// eslint-disable
/**
 * Bouton pour afficher l'élément qui affiche les contenus selon la catégorie :
 * La fonction onClick retourne l'attribut data-id-content du bouton
 * @param {string} children
 * @param { string } type
 * @param { string } dataAttribute
 * @param { function } onClick
 * @returns {JSX.Element}
 * @constructor
 */
export function Button({children, type, dataAttribute, onClick}) {

    return <button data-id-content={dataAttribute} className={`btn btn-${type} p-2  `} onClick={(e) => onClick(e.target.dataset.idContent)}>{children}</button>;
}