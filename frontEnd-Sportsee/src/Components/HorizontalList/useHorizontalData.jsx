import logo from "../assets/logoSportSee.svg";
export default function useHorizontalData() {
    return [
        {type: "logo",src: logo,alt: "Sportsee logo"},
        { type: "text", value: "Accueil" },
        { type: "text", value: "Profil" },
        { type: "text", value: "Réglage" },
        { type: "text", value: "Communauté" },
    ]
}