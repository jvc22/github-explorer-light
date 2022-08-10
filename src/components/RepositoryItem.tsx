import { GitBranch, HandPointing } from "phosphor-react";

interface RepositoryItemProps {
    repository: {
        name: string;
        description: string;
        html_url: string;
    }
}

export function RepositoryItem(props: RepositoryItemProps){
    function handleClick(){
        window.open(props.repository.html_url, '_blank');
    }

    return(
        <li onClick={handleClick}>
            <div>    
                <strong>{props.repository.name.toUpperCase()}</strong>
                <GitBranch size={20}/>
            </div>
            <p>{props.repository.description}</p>
            
            <a href={props.repository.html_url} target="_blank">
                {<HandPointing size={20}/>}
            </a>
        </li>
    )
}