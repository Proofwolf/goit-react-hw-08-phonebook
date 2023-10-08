import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';
import {
  selectContactsCount,
  selectIsLoading,
  selectError,
} from 'redux/contacts/selectors';
import { selectVisibleContacts } from 'redux/filter/selectors';

import css from './ContactList.module.css';

export const ContactList = () => {
  const filteredContacts = useSelector(selectVisibleContacts);
  const count = useSelector(selectContactsCount);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  return (
    <ul className={css.list}>
      {!count && !isLoading && !error ? (
        <p className={css.emptyMessage}>
          The Phonebook is empty. Add your first contact.
        </p>
      ) : (
        filteredContacts.map(contact => (
          <ContactListItem key={contact.id} contact={contact} />
        ))
      )}
    </ul>
  );
};
