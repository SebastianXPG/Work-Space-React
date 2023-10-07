import "./App.css";
import contacts from "./contacts";
import Card from "./components/Card";


function createCard(contact) {
  // return (
  //   <Card
  //     name={contact.name}
  //     img={contact.imgURL}
  //     tel={contact.phone}
  //     email={contact.email}
  //   />
  // );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Learn React</p>
      </header>
      <div>
        {contacts.map(createCard)}
        {contacts.map((contact) => {
          return (
            <Card
              name={contact.name}
              img={contact.imgURL}
              tel={contact.phone}
              email={contact.email}
            />
          );
        })}
        {/* <Card
          name={contacts[0].name}
          img={contacts[0].imgURL}
          tel={contacts[0].phone}
          email={contacts[0].email}
        />
        <Card
          name={contacts[1].name}
          img={contacts[1].imgURL}
          tel={contacts[1].phone}
          email={contacts[1].email}
        />
        <Card
          name={contacts[2].name}
          img={contacts[2].imgURL}
          tel={contacts[2].phone}
          email={contacts[2].email}
        /> */}
        <img src="" alt=""></img>
      </div>
    </div>
  );
}

export default App;
