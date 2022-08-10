import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';
import { useEffect, useState } from "react";
import { GithubLogo, User } from "phosphor-react";
import { Card } from "./Card";

interface Repository {
    name: string;
    description: string;
    html_url: string;
}

export function RepositoryList(){

    const [repositories, setRepositories] = useState<Repository[]>([]);

    useEffect(() => {
        fetch('https://api.github.com/users/jvc22/repos')
        .then((response) => response.json())
        .then((data) => setRepositories(data));
    }, [])

    return(
        <div className="teste">
            <section className="repository-list">
                <h1>Repositories List {<GithubLogo />}</h1>

                <ul>
                    {repositories.map((repository) => {
                        return <RepositoryItem repository={repository} key={repository.name}/>
                    })}
                </ul>
            </section>
            <section className="card">
                <h1>Profile <User/></h1>
                
                <ul>    
                    <Card />
                </ul>
            </section>
        </div>
    )
}