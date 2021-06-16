import React, { useEffect, useState, useContext } from 'react';
import { Button } from 'react-bootstrap';
import ClassUser from './ClassUser';
import AuthContext from '../../../context/auth/AuthContext';

function Participant(props) {
  const authContext = useContext(AuthContext);
  const {
    IcreateClass,
    participants,
    storePaticipant,
    user,
    loadUser,
    isAdd,
    storePDATA,
    theFinalList,
    finaList,
  } = authContext;

  useEffect(() => {
    loadUser();
    isAdd();
  }, []);

  const [getIsAdd, setgetIsAdd] = useState();

  useEffect(async () => {
    try {
      await setgetIsAdd(participants.getUser);
    } catch (error) {
      console.log(error);
    }
  }, [participants.getUser]);

  const onSave = async () => {
    try {
      theFinalList(storePDATA);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h4>All Users In The System</h4>
      {typeof getIsAdd === 'object' &&
        getIsAdd.map((parti) => <ClassUser parti={parti} />)}
      <Button
        variant="danger"
        className="btn btn-lg px-4 py-3 ml-4  btn-danger"
        onClick={onSave}
      >
        Save
      </Button>
    </div>
  );
}

export default Participant;
