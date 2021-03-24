import React, { useState, useEffect } from 'react';
import Input from '../components/atoms/Input';
import { app } from '../firebase/firebaseConfig';

const db = app.firestore();

function DatabaseUpload() {
  const [users, setUsers] = useState([]);

  const onSubmit = async (e, url) => {
    const username = e.target.username.value;
    if (!username || !url) {
      return;
    }
    const id = db.collection('productsUploadTest').doc().id;
    await db.collection('productsUploadTest').doc(`${id}`).set({
      name: username,
      avatar: url,
      id: id,
    });
  };

  const onFileChange = async (e) => {
    e.preventDefault();
    const file = e.target.photo.files[0];
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    const url = await fileRef.getDownloadURL();
    onSubmit(e, url);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const usersCollection = await db.collection('productsUploadTest').get();
      setUsers(
        usersCollection.docs.map((doc) => {
          return doc.data();
        })
      );
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    console.log(users);
  }, [users]);

  return (
    <>
      <form onSubmit={onFileChange}>
        <Input
          type="text"
          name="username"
          label="*Product name:"
          placeholder="Type your product name"
        />
        <Input type="file" name="photo" label="*Photo:" />
        <button>Submit</button>
      </form>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.name}>
              <img width="100" height="100" src={user.avatar} alt={user.name} />
              <p>{user.name}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default DatabaseUpload;
