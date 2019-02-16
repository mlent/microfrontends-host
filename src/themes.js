const shared = {
  border: {
    width: 2
  },
  spacing: {
    unit: 8
  }
};

export const light = {
  ...shared,
  colors: {
    body: '#fff',
    text: '#000',
    highlight: '#E91E63'
  }
};

export const dark = {
  ...shared,
  colors: {
    body: '#000',
    text: '#fff',
    highlight: '#FFDA01'
  }
};
