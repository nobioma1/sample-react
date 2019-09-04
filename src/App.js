const Car = ({ make, model, year }) => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, make),
    React.createElement('h2', {}, model),
    React.createElement('h2', {}, year)
  ]);
};

const App = () => {
  return React.createElement(
    'div',
    {},
    // React.createElement(htmlTag, {<attributes>}, children)
    [
      React.createElement('h1', {}, 'Sample React'),
      React.createElement(Car, {
        make: 'Mercedes-Benz',
        model: 'G-wagon',
        year: '2019'
      }),
      React.createElement(Car, {
        make: 'Lexus',
        model: 'LC 500',
        year: '2019'
      })
    ]
  );
};

ReactDOM.render(React.createElement(App), document.getElementById('root'));
