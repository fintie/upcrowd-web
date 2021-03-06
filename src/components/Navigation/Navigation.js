import React, { useContext } from 'react';
import styled from 'styled-components';
import { isMentor } from '../../helpers/user';
import auth from '../../utils/auth';
import EditProfile from '../MemberArea/EditProfile';
import UserContext from '../../context/userContext/UserContext';

function Navigation({ isAuthenticated, onOpenModal }) {
  const { currentUser } = useContext(UserContext);

  const openProfile = e => {
    e.preventDefault();
    onOpenModal('Edit Your Profile', <EditProfile />);
  };

  const renderBecomeAMentor = () => {
    if (isAuthenticated && isMentor(currentUser)) {
      return null;
    }

    return (
      <Link href="https://forms.gle/JVssxjGEzq2mtvq39">
        Become a Mentor
      </Link>
    );
  };

  return (
    <Nav id="menu">
      <List>
        <Link href="https://forms.gle/wPzUKy1HtaK9UMvr8">
          Find A Mentor
        </Link>
        {renderBecomeAMentor()}
        <Link href="https://calendar.google.com/calendar/u/0?cid=Y18xdmhxMWlzOTRqdHVwdHZnNTJrbzM0cW42a0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t" target="_blank">Sessions Calender</Link>
      </List>
    </Nav>
  );
}

const Nav = styled.nav`
  flex-grow: 1;
`;

const List = styled.ul`
  list-style: none;
  display: flex;

  @media all and (min-width: 801px) {
    padding: 0;
    margin: 0;
  }

  @media all and (max-width: 800px) {
    margin-top: 100px;
    flex-direction: column;
  }
`;

const Link = styled.a`
  color: #4a4a4a;
  text-decoration: none;
  padding: 10px;
  font-size: 16px;

  @media all and (max-width: 800px) {
    padding-left: 0;
    color: #fff;
  }

  &:hover {
    color: #2c2c2c;
  }
`;

export default Navigation;
