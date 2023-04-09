import Accueil from "../../pages/Accueil";
import Metiers from "../../pages/Metiers";

export const menu = [
    { titre: "Accueil", permalien: "/", components: <Accueil/> },
    { titre: "Nos Métiers", permalien: "/nos-metiers", components: <Metiers/>},
    { titre: "Nos Associés", permalien: "/nos-associes", components: <Accueil/> },
    { titre: "Contact", permalien: "/contact", components: <Accueil/> }
];