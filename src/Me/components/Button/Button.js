// @ts-check
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { desktop } from '../../styles/shared/devices';

/**
 * @callback OnClick
 * @typedef {('primary' | 'secondary' | 'danger')} Skin
 * @typedef {Pick<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'onClick' | 'id' | 'disabled' | 'type' | 'name'>} ButtonProps
 */

const StyledButton = styled.button`
  box-sizing: border-box;
  height: 30px;
  width: 285px;
  border-radius: 3px;
  font-family: Lato;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  margin-bottom: 1rem;
  cursor: pointer;

  @media ${desktop} {
    height: 30px;
    width: 151px;
    margin: 1rem;
  }
`;

const PrimaryButton = styled(StyledButton)`
  background-color: #000000;
  color: #fff;
`;

const SecondaryButton = styled(StyledButton)`
  background-color: #fff;
  border: 2px solid;
  color: #000000;
`;

const DangerButton = styled(StyledButton)`
  background-color: #d56969;
  color: #fff;
`;

/**
 * @param {Skin} skin
 */
const getComponentBySkin = skin => {
  switch (skin) {
    case 'primary':
    default:
      return PrimaryButton;
    case 'secondary':
      return SecondaryButton;
    case 'danger':
      return DangerButton;
  }
};

/**
 * @param {{
 *  skin: Skin,
 *  onClick: OnClick,
 * } & ButtonProps
 * } params
 */
export const Button = ({ skin = 'primary', ...props }) => {
  const ThemedButton = getComponentBySkin(skin);
  return <ThemedButton {...props} />;
};

Button.propTypes = {
  skin: PropTypes.oneOf(['primary', 'secondary', 'danger']),
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  disabled: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};
