const Sizes = {
  mobile: '576px',
  tabletM: '768px',
  tabletL: '992px',
  laptopM: '1160px',
  laptopL: '1400px',
};
export const devices = {
  mobileS: `(min-width: ${Sizes.mobile})`,
  mobileM: `(max-width: ${Sizes.mobile})`,
  tabletM: `(max-width: ${Sizes.tabletM})`,
  tabletL: `(max-width: ${Sizes.tabletL})`,
  laptopM: `(max-width: ${Sizes.laptopM})`,
  laptopL: `(max-width: ${Sizes.laptopL})`,
};
