import "./Header.scss"
import countdownHero from "../../assets/countdown-hero.png"

export default function Header() {
    return (
        <header>
            <img src={countdownHero} alt="Hero" />
        </header>
    )
}