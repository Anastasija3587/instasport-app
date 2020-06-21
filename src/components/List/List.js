import React, { useEffect, useState } from 'react';
import getAllClubs from '../../services/api';
import Club from '../Club/index';
import City from '../City/index';
import Sport from '../Sport/index';
import styled from './List.module.css';

const List = () => {
  const [clubs, setClubs] = useState([]);
  const [filteredClubs, setfilteredClubs] = useState([]);
  const [chooseSport, setChooseSport] = useState('');
  const [inputCity, setInputCity] = useState('');

  useEffect(() => {
    getAllClubs().then(res => setClubs(res.data));
  }, []);

  return (
    <>
      <City
        clubs={clubs}
        filteredClubs={filteredClubs}
        setfilteredClubs={setfilteredClubs}
        chooseSport={chooseSport}
        setChooseSport={setChooseSport}
        inputCity={inputCity}
        setInputCity={setInputCity}
      />
      <Sport
        setChooseSport={setChooseSport}
        clubs={clubs}
        chooseSport={chooseSport}
        filteredClubs={filteredClubs}
        setfilteredClubs={setfilteredClubs}
        inputCity={inputCity}
      />
      <ul className={styled.list}>
        {filteredClubs.length > 0
          ? filteredClubs.map(club => <Club key={club.title} club={club} />)
          : clubs.map(club => <Club key={club.title} club={club} />)}
      </ul>
    </>
  );
};

export default List;
