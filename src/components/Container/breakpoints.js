const Sizes = {
  mobile: '576px',
  tablet: '768px',
  laptopM: '992px',
  laptopL: '1400px',
};
export const devices = {
  mobileS: `(max-width: ${Sizes.mobile})`,
  mobileM: `(min-width: ${Sizes.mobile})`,
  tablet: `(min-width: ${Sizes.tablet})`,
  laptopM: `(min-width: ${Sizes.laptopM})`,
  laptopL: `(min-width: ${Sizes.laptopL})`,
};
