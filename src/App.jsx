import { Counter } from './components/Counter';
import { ReposotoryList } from './components/RepositoryList';
import './styles/global.scss';

export function App() {
  return (
    <>
      <ReposotoryList/>
      <Counter/>
    </>
  )
}