export function RepositoryItem(props) {
  return (
     <li>
          <strong>{props.repository?.name ?? 'Default'}</strong>
          <p>{props.repository?.description ?? 'Forms in ReactJS'}</p>

          <a href={props.repository?.link ?? 'https://github.com/Joao-Pedro-Nogueira'}>
            Acessar repositório
          </a>
      </li>
  )
}