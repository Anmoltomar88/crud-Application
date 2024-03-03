import { useState, useEffect } from 'react';
import { Button, FormControl, FormGroup, Input, InputLabel, Typography, colors, styled } from '@mui/material';
import { getUser, editUser } from '../service/api';
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';

const Container = styled(FormGroup)`
  width: 90%;
  margin: 0px auto 0px auto;
  & > div {
    margin-top: 20px;
  }`;

const Title = styled(Typography)`
  display: flex;
  justify-content: center;
  color:Blue`;

const initValue = { Name: "", UserName: "", Email: "", Phone: "", };

function Edituser() {

  const [User, setUser] = useState(initValue);

  const handleChange = (e) => {
    setUser({ ...User, [e.target.id]: e.target.value });
  };

  const { id } = useParams();
  useEffect(() => {
    getOneUsersDetail(id);
  }, []);

  const getOneUsersDetail = async (id) => {
    const response = await getUser(id);
    setUser(response.data)
  }
  //nevigation routing
  const navigate = useNavigate();
  
  const editUserDetails = async () => {
    await editUser(User,id);
    navigate("/all")
  }

  return (
    <div className='Box' style={{ border: "1px solid black", width: "30%", margin: "5% auto 0 auto", borderRadius: "15px" }}>
      <Container>
        <Title variant='h4'>Edit Users</Title>
        <hr style={{ margin: "10px auto", width: "100%" }} />

        <FormControl>
          <InputLabel htmlFor="name">Name</InputLabel>
          <Input id="Name" value={User.Name} onChange={handleChange}></Input>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="username">UserName</InputLabel>
          <Input id="UserName" value={User.UserName} onChange={handleChange}></Input>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="Email">Email</InputLabel>
          <Input id="Email" value={User.Email} onChange={handleChange}></Input>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="Phone">Phone</InputLabel>
          <Input id="Phone" value={User.Phone} onChange={handleChange}></Input>
        </FormControl>

        <FormControl style={{ marginTop: "0" }}>
          <Button variant="contained" onClick={editUserDetails}>Edit User</Button>
        </FormControl>
      </Container>
    </div>
  );
}

export default Edituser;
