import PropTypes from 'prop-types';
import css from './ContactList.module.css';

const ContactList = ({ contacts, deleteContact }) => {
  const sortedContacts = [...contacts].sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  //   const sortedContacts = [...contacts].sort((a, b) => {
  //     if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
  //     if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
  //     return 0;
  //   });

  return (
    <ul className={css.list}>
      {sortedContacts.map(({ id, name, number }) => (
        <li className={css.item} key={id}>
          <p className={css.contact}>
            <span>{name}: </span>
            <span>{number}</span>
          </p>

          <button
            className={css.btn}
            type="submit"
            onClick={() => deleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
