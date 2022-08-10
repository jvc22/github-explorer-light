import { GithubLogo, InstagramLogo, LinkedinLogo } from "phosphor-react"
import { MacOSButtons } from "./MacOSButtons"

export function Card(){
    return(
        <li>
            <MacOSButtons />
            <div className="main-div">
                <div className="image-div">
                    <img src="https://avatars.githubusercontent.com/u/105883612?v=4" alt="image" />
                </div>
                <h2>João Victor Costa da Silva</h2>
                <p>University of São Paulo • Biomedical Informatics</p>
                <span>JVC22</span>
                <div className="links">
                    <a href="https://github.com/jvc22" target="_blank"><GithubLogo size={28}/></a>
                    <a href="https://www.linkedin.com/in/joaovictorcostadasilva/" target="_blank"><LinkedinLogo size={28}/></a>
                    <a href="https://www.instagram.com/_jvc22_/" target="_blank"><InstagramLogo size={28}/></a>
                </div>
            </div>
        </li>
    )
}