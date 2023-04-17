import Accueil from "../../pages/Accueil";
import Associes from "../../pages/Associes";
import Contact from "../../pages/Contact";
import Metiers from "../../pages/Metiers";

export const menu = [
    { titre: "Accueil", permalien: "/", components: <Accueil/> },
    { titre: "Nos Métiers", permalien: "/nos-metiers", components: <Metiers/>},
    { titre: "Nos Associés", permalien: "/nos-associes", components: <Associes/> },
    { titre: "Contact", permalien: "/contact", components: <Contact/> }
];