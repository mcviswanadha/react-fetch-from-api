import React, {useEffect, useState} from 'react';
import axios from "axios";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'
const USER_SERVICE_URL = 'https://jsonplaceholder.typicode.com/users';

function rowClassNameFormat(row, rowIdx) {
    return rowIdx % 2 === 0 ? 'Gold-Row' : 'Silver-Row';
}

function UserTableReactHooks() {
    const [data, setData] = useState({users: [], isFetching: false});

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setData({users: data.users, isFetching: true});
                const response = await axios.get(USER_SERVICE_URL);
                setData({users: response.data, isFetching: false});
            } catch (e) {
                console.log(e);
                setData({users: data.users, isFetching: false});
            }
        };
        fetchUsers();
    }, []);

    return (
      <>
          <BootstrapTable data={data.users} 
                            trClassName={rowClassNameFormat}>
                <TableHeaderColumn isKey dataField='id' />               
                <TableHeaderColumn dataField='name' />
                <TableHeaderColumn dataField='username' />
            </BootstrapTable>
      </>)
}
export default UserTableReactHooks