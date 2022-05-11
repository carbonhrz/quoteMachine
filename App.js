import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import axios from 'axios';
import { Button, Card } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import React from 'react';

const URL = "https://api.quotable.io/random";
const colors = [
  '#6699ff',
  '#66ff33',
  '#996600',
  '#990033',
  '#669900'

];



function App() {

  const [number, setNumber] = React.useState(0);
  const [quote, setQuote] = React.useState(null);

  const getUpdate = () => {
    axios.get(URL).then((response) => {
      setQuote(response.data);
      setNumber(Math.floor(Math.random() * 5));
    });
    };

    React.useEffect(() => {
      getUpdate();
    }, []);


    function handleClick(e) {
      window.open("https://www.twitter.com/intent/tweet");
    }

    if (!quote) return null;

  return (
    <div className="App" style={{color: colors[number],
                              backgroundColor: colors[number]
    
    }}>
          <Card>
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p>
        {quote.content}
      </p>
      <footer className="blockquote-footer">
       <cite title="Source Title">{quote.author}</cite>
       <Button className="button" style={{color: colors[number]}} variant="outline-secondary" onClick={getUpdate}>New Quote</Button>{' '}
       <i id="tweet" className="bi bi-twitter" style={{ fontSize: 35 }} onClick={handleClick}  ></i>
       
      </footer>
    </blockquote>
  </Card.Body>
</Card>
    </div>
  );
}

export default App;


