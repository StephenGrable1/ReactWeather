var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>This is my weather aplication that is built with ReactJS.</p>
      <p>
        Here are some of the tools I've used:
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This is the Javascript Framework I used to built this application
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - I used the Open Weather Map API to search for the temperature in any given city.
        </li>
        <li>
          <a href="http://foundation.zurb.com/">Foundation</a> - I used Foundation to style this application and make it pretty.
        </li>
      </ul>
    </div>

  );
};

module.exports = About;
