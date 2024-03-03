import { useEffect, useState } from "react";
import { Table, TableHead, TableBody, TableRow, TableCell, styled, Button } from "@mui/material";
import { getUsers ,deleteUser } from "../service/api";
import { Link } from "react-router-dom";

const Tab = styled(Table)`
  width:90%;
  margin:50px auto 0 auto;
  border: 1px solid #dddddd; 
`;

const styles = {
  padding: "8px"
};

const Thead = styled(TableRow)`
  background: plum;
  height: 30px;
  & > th {
    color: white;
    font-size: 16px;
    vertical-align: middle;
    padding: ${styles.padding};
    border: 1px solid #dddddd; 
  }
`;

const TRow = styled(TableRow)`
  height: 30px;
  & > td {
    font-size: 14px;
    vertical-align: middle;
    padding: ${styles.padding};
    border: 1px solid #dddddd; 
  }
`;

function Alluser() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUserDetail();
  }, []);

  const getUserDetail = async () => {
    try {
      const response = await getUsers();
      setUsers(response);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }

  async function handleDelete(id) {
    await deleteUser(id);
    // getUserDetail();
  }

  return (
    <Tab>
      <TableHead>
        <Thead style={{ padding: "8px" }}>
          <TableCell>Id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>UserName</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell>Email</TableCell>
          <TableCell></TableCell>
        </Thead>
      </TableHead>

      <TableBody>
        {
          users.map(user => (
            <TRow key={user._id} style={{ padding: "8px" }}>
              <TableCell>{user._id}</TableCell>
              <TableCell>{user.Name}</TableCell>
              <TableCell>{user.UserName}</TableCell>
              <TableCell>{user.Phone}</TableCell>
              <TableCell>{user.Email}</TableCell>
              <TableCell>
                <Link to={`/edit/${user._id}`}>
                  <Button variant="contained" style={{ marginRight: "5px", padding: "5px" }}>Edit</Button>
                </Link>
                <Button variant="contained" color="secondary" onClick={() => handleDelete(user._id)} style={{ padding: "5px" }}>Delete</Button>
              </TableCell>
            </TRow>
          ))
        }
      </TableBody>
    </Tab>
  )
}

export default Alluser;
