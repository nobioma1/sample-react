const Car = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, 'Mercedes-Benz'),
    React.createElement('h2', {}, 'G-Wagon'),
    React.createElement('h2', {}, '2019'),
  ]);
};

const App = () => {
  return React.createElement(
    'div',
    {},
    // React.createElement(htmlTag, {<attributes>}, children)
    [
      React.createElement('h1', {}, 'Sample React'),
      React.createElement(Car),
      React.createElement(Car),
    ]
  );
};

ReactDOM.render(React.createElement(App), document.getElementById('root'));
