import { useEffect, useState } from "react";
import { Modal, Button } from '@geneui/components';

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss"

function Users() {
  const [selectedRow, setSelectedRow] = useState();
  const [usersList, setUsersList] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsersList(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    console.log({usersList});
  }, [usersList]);

  const handleRowClick = (userId) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(response => response.json())
      .then(data => {
        setSelectedRow(data);
        setIsModalVisible(true);
      })
      .catch(error => console.error('Error fetching data:', error));
  };
 
  return (
    <>
      <h2>Users page</h2>
      {
        usersList.map((user, index) => {
          return (
            <div key={index}>
              <span>{`Name: ${user.name}, Id: ${user.id}`}</span>
              <Button appearance="minimal" icon="bc-icon-preview" onClick={() => handleRowClick(user.id)}>view user details</Button>
            </div>
          )
        })
      }

      <Modal
        visible={isModalVisible}
        background="dark"
        onCancel={() => setIsModalVisible(false)}
        onClose={() => setIsModalVisible(false)}
        title="User info"
        withPortal
        zIndex={1000}
      >
        <div>Id: {selectedRow?.id}</div>
        <div>Name: {selectedRow?.name}</div>
      </Modal>
    </>
  );
}

export default Users;