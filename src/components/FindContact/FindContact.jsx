import React from 'react';
import styles from './FindContact.module.css';
import { useDispatch } from 'react-redux';
import { filter } from './../../redux/actions';

const FindContact = () => {
  const dispatch = useDispatch();
  const onChange = e => dispatch(filter(e.target.value));
  return (
    <div>
      <div className={styles.findDiv}>
        <input
          className={styles.findInput}
          placeholder="Find contacts by name..."
          onChange={onChange}
          type="text"
        />
      </div>
    </div>
  );
};
export default FindContact;
