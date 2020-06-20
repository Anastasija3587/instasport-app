import React, { useEffect, useState } from 'react';
import getAllClubs from '../../services/api';
import Club from '../Club/index';
import City from '../City/index';

const List = () => {
  const [clubs, setClubs] = useState([]);
  const [filteredClubs, setfilteredClubs] = useState([]);
  const [chooseSport, setChooseSport] = useState(false);

  useEffect(() => {
    getAllClubs().then(res => setClubs(res.data));
  }, []);

  const fn = () => {
    const sports = [];
    if (filteredClubs.length > 0) {
      filteredClubs
        .map(club => club.activity)
        .map(el => el.map(e => e.slug))
        .forEach(el => sports.push(...el));
    } else {
      clubs
        .map(club => club.activity)
        .map(el => el.map(e => e.slug))
        .forEach(el => sports.push(...el));
    }

    return sports;
  };

  const handleClick = event => {
    setChooseSport(true);
    if (filteredClubs.length > 0) {
      setfilteredClubs(
        filteredClubs.filter(club =>
          club.activity.map(el => el.slug).includes(event.target.value),
        ),
      );
    } else
      setfilteredClubs(
        clubs.filter(club =>
          club.activity.map(el => el.slug).includes(event.target.value),
        ),
      );
  };

  return (
    <>
      <City
        clubs={clubs}
        filteredClubs={filteredClubs}
        setfilteredClubs={setfilteredClubs}
        chooseSport={chooseSport}
      />

      {Array.from(new Set(fn()))
        .sort()
        .map(sport => (
          <button onClick={handleClick} value={sport} key={sport} type="button">
            {sport}
          </button>
        ))}

      <ul>
        {filteredClubs.length > 0
          ? filteredClubs.map(club => <Club key={club.title} club={club} />)
          : clubs.map(club => <Club key={club.title} club={club} />)}
      </ul>
    </>
  );
};

export default List;
