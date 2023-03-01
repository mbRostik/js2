import { dblClick } from '@testing-library/user-event/dist/click';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


class Ex1 extends React.Component {
  render() {
      return (
          <div>
              Text
          </div>
      );
  }
}

class Ex2 extends React.Component {
  render() {
      let smth = 'Text';
      return (
          <div>
              { smth }
          </div>
      );
  }
}


class Ex3 extends React.Component {
  render() {
    let smth = (<p>Text</p>);
      return (
          <div>
              { smth }
          </div>
      );
  }
}

class Ex4 extends React.Component {
  render() {
    let text1 = (<p>Text1</p>);
    let text2 = (<p>Text2</p>);
      return (
          <div>
             { text1 }
             <p>!!!</p>
             { text2 }
          </div>
      );
  }
}


class Ex5 extends React.Component {
  render() {
    let attr = 'block';
    return (
        <div id={ attr }>
            Text
        </div>
    );
  }
}


class Ex6 extends React.Component {
  render() {
    let str = 'block';
    return (
        <div className={ str }>
            Text
        </div>
    );
  }
}

class Ex7 extends React.Component {
  render() {
    return (
      <div style={ { 
                  background: 'green' ,
                  border: '5px solid green',
                  borderRadius: '30px',
              } }>
      </div>
    );
  }
}

class Ex8 extends React.Component {
  render() {

        let show = false;
        let text;

        if (show==true) text = 'true'
        else text = 'false'

        return (
            <div>
                { text }
            </div>
        );
  }
}


class Ex9 extends React.Component {
  render() {
      const arr = ['a', 'b', 'c', 'd', 'e'];

      const El = arr.map((item) => <li>{item}</li>);

      return (
          <ul>
              {El}
          </ul>
      );
  }
}



class Ex10 extends React.Component {
  getText() {
    return <p>Text</p>
    }

  render() {
    return (
        <div>
            { this.getText() }
        </div>
    );
  }
}


class Ex11 extends React.Component {
  getNum1() {
    return 1;
}

getNum2() {
    return 2;
}

render() {

    return (
        <div>
            Text = { this.getNum1() + this.getNum2() }
        </div>
    );
  }
}



const root = ReactDOM.createRoot(document.getElementById("root")).render(
        <div>
            <Ex1 />
            <hr></hr>
            <br></br>

            <Ex2 />
            <hr></hr>
            <br></br>

            <Ex3 />
            <hr></hr>
            <br></br>

            <Ex4 />
            <br></br>
            <hr></hr>
            <br></br>
            
            <Ex5 />
            <hr></hr>
            <br></br>

            <Ex6 />
            <hr></hr>
            <br></br>

            <Ex7 />
            <hr></hr>
            <br></br>


            <Ex8 />
            <hr></hr>
            <br></br>

            <Ex9 />
            <hr></hr>
            <br></br>

            <Ex10 />
            <hr></hr>
            <br></br>


            <Ex11 />
            <hr></hr>
            <br></br>
        </div>
    );