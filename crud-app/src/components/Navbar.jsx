import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)`
  background: pink;
  height: 50px;
`;


const Tabs = styled(NavLink)`
  font-size: 20px;
  margin:20px;
  text-decoration: none;
  color: white;
`;

function Navbar() {
  return (
    <Header position="static">
      <Toolbar>
        <Tabs to="/" >Home</Tabs>
        <Tabs to="/all">All User</Tabs>
        <Tabs to="/add">Add User</Tabs>
      </Toolbar>
    </Header>
  );
}

export default Navbar;
