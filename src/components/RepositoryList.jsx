import { useState } from 'react';
import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';


// https://api.github.com/users/Joao-Pedro-Nogueira/repos


const repository = {
  name: 'unform',
  description: 'Forms in ReactJS',
  link: 'https://github.com'

}

export function ReposotoryList() {
  const [repositories, setRepositories] = useState([]);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItem repository={repository}/>
        <RepositoryItem/>
        <RepositoryItem/>
        <RepositoryItem/>
      </ul>
    </section>
  )
}