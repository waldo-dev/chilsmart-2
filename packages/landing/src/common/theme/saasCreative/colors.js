import { rgba } from 'polished';

const colors = {
  transparent: 'transparent', // 0
  black: '#000000', // 1
  white: '#ffffff', // 2
  headingColor: '#0F2137', // 3
  textColor: rgba('#0F2137', 0.6), // 4
  textColorAlt: '#36526C', // 5
  textColorLight: rgba('#fff', 0.7), // 6
  labelColor: '#767676', // 7
  inactiveField: '#f2f2f2', // 8
  inactiveButton: '#b7dbdd', // 9
  inactiveIcon: '#EBEBEB', // 10
  primary: '#0051ad', // 11 - Updated to match new design
  primaryHover: '#003d85', // 12
  secondary: '#FF9B3E', // 13
  borderColor: '#E5ECF4', //14
  linkColor: '#4C91FB', // 15
  primaryBoxShadow: '0px 8px 20px -6px rgba(42, 162, 117, 0.57)',
  secondaryBoxShadow: '0px 8px 20px -6px rgba(237, 205, 55, 0.5)',
  // New design colors
  text: '#0f172a',
  textSecondary: '#64748b',
  background: '#ffffff',
  backgroundLight: '#f5f7f8',
  backgroundDark: '#0f1823',
  cardBackground: '#ffffff',
  border: '#e2e8f0',
};

export default colors;
