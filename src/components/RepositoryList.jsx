import { RepositoryItem } from "./RepositoryItem";

const repository = {
  name: 'ConfigurandoAmbienteReact.js',
  description: 'Este repositório é basicamente um "tutorial" de como fazer a configuração básica de desenvolvimento em React.js do zero. Utilizo visual Studio Code em todo o processo.',
  link: 'https://github.com/Joao-Pedro-Nogueira/ConfigurandoAmbienteReact.js'

}

export function ReposotoryList() {
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