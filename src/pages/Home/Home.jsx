import { FcMultipleSmartphones } from 'react-icons/fc';
import css from './Home.module.css';

export default function Home() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook Application</h1>
      <FcMultipleSmartphones size={'10em'} />
    </div>
  );
}
