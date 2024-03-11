/* eslint-disable no-unused-vars */
// eslint-disable-next-line react/prop-types
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import {Button} from "./UtilsComponents/Button.jsx";
import {useState} from "react";

function App() {

     const TABSCONTENTS = [
        {
            id: 1,
            title: "C'est le 12 mars et je dédie cette journée à mes colocs",
            type: 'home',
            text: "L'extrait standard de Lorem Ipsum utilisé depuis le XVIè siècle est reproduit ci-dessous pour les curieux."
        },
        {
            id: 2,
            title: "Non, les femmes sont à l'honneur aujourd'hui",
            type: 'decor',
            text: "D'où vient-il ? Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire. Il trouve ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C., le rendant vieux de 2000 ans. Un professeur du Hampden-Sydney College, en Virginie, s'est intéressé à un des mots latins les plus obscurs, consectetur, extrait d'un passage du Lorem Ipsum, et en étudiant tous les usages de ce mot dans la littérature classique, découvrit la source incontestable du Lorem Ipsum. Il provient en fait des sections 1.10.32 et 1.10.33 du \"De Finibus Bonorum et Malorum\" (Des Suprêmes Biens et des Suprêmes Maux) de Cicéron. Cet ouvrage, très populaire pendant la Renaissance, est un traité sur la théorie de l'éthique. Les premières lignes du Lorem Ipsum, \"Lorem ipsum dolor sit amet...\", proviennent de la section 1.10.32."
        },
        {
            id: 3,
            title: "C'est bien alors ",
            type: 'saison',
            text: "Pourquoi l'utiliser ? On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte. Du texte. Du texte.' est qu'il possède une distribution de lettres plus ou moi"
        },
        {
            id: 4,
            title: "Bienvenue à la Casa",
            type: 'jouet',
            text: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. "
        },
        {
            id: 4,
            title: " Sortir pour aller ",
            type: 'food',
            text: "Où puis-je m'en procurer ? Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d'entre elles a été altérée par l'addition d'humour ou de mots aléatoires qui ne ressemblent pas une seconde à du texte standard. "
        },
        {
            id: 5,
            title: " beaucoup de choses",
            type: 'home',
            text: "L'extrait standard de Lorem Ipsum utilisé depuis le XVIè siècle est reproduit ci-dessous pour les curieux."
        },
        {
            id:6,
            title: " Rien à signifier  ",
            type: 'decor',
            text: "D'où vient-il ? Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire. Il trouve ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C., le rendant vieux de 2000 ans. Un professeur du Hampden-Sydney College, en Virginie, s'est intéressé à un des mots latins les plus obscurs, consectetur, extrait d'un passage du Lorem Ipsum, et en étudiant tous les usages de ce mot dans la littérature classique, découvrit la source incontestable du Lorem Ipsum. Il provient en fait des sections 1.10.32 et 1.10.33 du \"De Finibus Bonorum et Malorum\" (Des Suprêmes Biens et des Suprêmes Maux) de Cicéron. Cet ouvrage, très populaire pendant la Renaissance, est un traité sur la théorie de l'éthique. Les premières lignes du Lorem Ipsum, \"Lorem ipsum dolor sit amet...\", proviennent de la section 1.10.32."
        },
        {
            id: 7,
            title: " Juste un produit ",
            type: 'saison',
            text: "Pourquoi l'utiliser ? On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte. Du texte. Du texte.' est qu'il possède une distribution de lettres plus ou moi"
        },
        {
            id: 8,
            type: 'jouet',
            title: "Pourquoi l'utiliser ?",
            text: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. "
        },
        {
            id: 9,
            title: " Sortir pour aller ",
            type: 'food',
            text: "Où puis-je m'en procurer ? Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d'entre elles a été altérée par l'addition d'humour ou de mots aléatoires qui ne ressemblent pas une seconde à du texte standard. "
        },
        {
            id: 10,
            title: " Juste un produit ",
            type: 'home',
            text: "L'extrait standard de Lorem Ipsum utilisé depuis le XVIè siècle est reproduit ci-dessous pour les curieux."
        },
        {
            id: 11,
            title: " Un ami sympa",
            type: 'decor',
            text: "D'où vient-il ? Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire. Il trouve ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C., le rendant vieux de 2000 ans. Un professeur du Hampden-Sydney College, en Virginie, s'est intéressé à un des mots latins les plus obscurs, consectetur, extrait d'un passage du Lorem Ipsum, et en étudiant tous les usages de ce mot dans la littérature classique, découvrit la source incontestable du Lorem Ipsum. Il provient en fait des sections 1.10.32 et 1.10.33 du \"De Finibus Bonorum et Malorum\" (Des Suprêmes Biens et des Suprêmes Maux) de Cicéron. Cet ouvrage, très populaire pendant la Renaissance, est un traité sur la théorie de l'éthique. Les premières lignes du Lorem Ipsum, \"Lorem ipsum dolor sit amet...\", proviennent de la section 1.10.32."
        },
        {
            id: 12,
            title: " Quel beau pays la France !",
            type: 'saison',
            text: "Pourquoi l'utiliser ? On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte. Du texte. Du texte.' est qu'il possède une distribution de lettres plus ou moi"
        },
        {
            id: 13,
            title: " Nous naissons tous égaux ",
            type: 'jouet',
            text: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. "
        },
        {
            id: 14,
            title: " La liberté est fondamentale.",
            type: 'food',
            text: "Où puis-je m'en procurer ? Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d'entre elles a été altérée par l'addition d'humour ou de mots aléatoires qui ne ressemblent pas une seconde à du texte standard. "
        },
        {
            id: 15,
            title: " C'est le PR qui l'a interpellé ",
            type: 'home',
            text: "L'extrait standard de Lorem Ipsum utilisé depuis le XVIè siècle est reproduit ci-dessous pour les curieux."
        },
        {
            id: 16,
            title: " Bon débarra alors !",
            type: 'decor',
            text: "D'où vient-il ? Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire. Il trouve ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C., le rendant vieux de 2000 ans. Un professeur du Hampden-Sydney College, en Virginie, s'est intéressé à un des mots latins les plus obscurs, consectetur, extrait d'un passage du Lorem Ipsum, et en étudiant tous les usages de ce mot dans la littérature classique, découvrit la source incontestable du Lorem Ipsum. Il provient en fait des sections 1.10.32 et 1.10.33 du \"De Finibus Bonorum et Malorum\" (Des Suprêmes Biens et des Suprêmes Maux) de Cicéron. Cet ouvrage, très populaire pendant la Renaissance, est un traité sur la théorie de l'éthique. Les premières lignes du Lorem Ipsum, \"Lorem ipsum dolor sit amet...\", proviennent de la section 1.10.32."
        },
        {
            id: 17,
            title: " Sors d'ici ",
            type: 'saison',
            text: "Pourquoi l'utiliser ? On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte. Du texte. Du texte.' est qu'il possède une distribution de lettres plus ou moi"
        },
        {
            id: 18,
            title: " Ce n'est pas vrai ",
            type: 'jouet',
            text: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. "
        },
        {
            id: 19,
            title: " Juste un produit ",
            type: 'food',
            text: "Où puis-je m'en procurer ? Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d'entre elles a été altérée par l'addition d'humour ou de mots aléatoires qui ne ressemblent pas une seconde à du texte standard. "
        },
        {
            id: 20,
            title: " Juste un produit ",
            type: 'home',
            text: "L'extrait standard de Lorem Ipsum utilisé depuis le XVIè siècle est reproduit ci-dessous pour les curieux."
        },
        {
            id: 21,
            title: " Juste un produit ",
            type: 'decor',
            text: "D'où vient-il ? Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire. Il trouve ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C., le rendant vieux de 2000 ans. Un professeur du Hampden-Sydney College, en Virginie, s'est intéressé à un des mots latins les plus obscurs, consectetur, extrait d'un passage du Lorem Ipsum, et en étudiant tous les usages de ce mot dans la littérature classique, découvrit la source incontestable du Lorem Ipsum. Il provient en fait des sections 1.10.32 et 1.10.33 du \"De Finibus Bonorum et Malorum\" (Des Suprêmes Biens et des Suprêmes Maux) de Cicéron. Cet ouvrage, très populaire pendant la Renaissance, est un traité sur la théorie de l'éthique. Les premières lignes du Lorem Ipsum, \"Lorem ipsum dolor sit amet...\", proviennent de la section 1.10.32."
        },
        {
            id: 22,
            title: " Juste un produit ",
            type: 'saison',
            text: "Pourquoi l'utiliser ? On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte. Du texte. Du texte.' est qu'il possède une distribution de lettres plus ou moi"
        },
        {
            id: 23,
            title: " Juste un produit ",
            type: 'jouet',
            text: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. "
        },
        {
            id: 24,
            title: " Juste un produit ",
            type: 'food',
            text: "Où puis-je m'en procurer ? Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d'entre elles a été altérée par l'addition d'humour ou de mots aléatoires qui ne ressemblent pas une seconde à du texte standard. "
        }
    ]


    const [currentTab, setCurrentTab] = useState('saison')

    /**
     * Function qui permet de savoir le bouton sur lequel on a cliqué afin de changer notre const currentTab
     * @param buttonAttribute
     */
    function handleButtonClick(buttonAttribute) {
        return setCurrentTab(buttonAttribute)
    }

    // On filtre notre Tableau initial pour n'affiche que les objets avec le type de notre currentTab.
    const visibleContents = TABSCONTENTS.filter((tabContent) => {
        if (currentTab !== tabContent.type) {
            return false
        }
        return tabContent

    })


    return (
    <>
           <div className="container p-4 mx-auto">
               <div className="row m-auto align-items-center d-flex gap-2 justify-content-around  ">

                   <div className="col-8">
                       <h1> Bienvenue sur mon projet fictif sur React.  </h1>
                       <p>  Le but de cet exercice est de créer une fonctionnalité un peu comme des Onglets qui affiche du contenu.    </p>
                       <p> Vous verrez plusieurs boutons qui ont chacun un attribut, et qui me permettent de pouvoir afficher les contenus qui ont le même attribut   </p>
                       <p> Le challenge pour moi ici a été de bien utiliser les fonctions <strong> Filter</strong> et <strong>Map</strong> de Javascript avec React   </p>
                   </div>
                   <div className=" projet_title  col-12">
                       <div className={'tab_buttons hstack justify-content-between'}>
                           <Button type={'primary'} dataAttribute={'home'} onClick={handleButtonClick}> Articles de maison </Button>
                           <Button type={'secondary'} dataAttribute={'decor'} onClick={handleButtonClick}> Décoration </Button>
                           <Button type={'outline-dark'} dataAttribute={"saison"} onClick={handleButtonClick}> Saisons </Button>
                           <Button type={'info'} dataAttribute={"jouet"} onClick={handleButtonClick}> Jouets </Button>
                           <Button type={'outline-danger'} dataAttribute={"food"} onClick={handleButtonClick}> Foods  </Button>
                       </div>
                       <div className={'tab_contents'}>
                           {visibleContents.map( tabContent => (
                               <div  key={tabContent.id} className="card my-3 shadow-sm" >
                                 {/*  <img src="..." className="card-img-top" alt="..."/>*/}
                                   <div className="card-body">
                                       <h5 className="card-title"> {tabContent.title}</h5>
                                       <p className="card-text">{tabContent.text}</p>
                                   </div>
                               </div>
                           ))}
                       </div>
                   </div>
               </div>
           </div>
    </>
    )
}

export default App
