
import s from './ContactList.module.css';

export const ContactItem = ({ contact,onDelete }) => {
  const { id, name, phone } = contact;
  return (
    <li className={s.list__item}>
      <p className={s.text}>{name}</p>
      <p className={s.text}>{phone}</p>
      <button
         className={s.button}
         type="button"
         id={id}
         onClick={e => {
           onDelete(e.target.id);
         }}
       >
         Delete
      </button>
    </li>
  );
};