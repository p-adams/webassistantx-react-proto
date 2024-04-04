import { useCallback, useState } from "react";
import { nanoid } from "nanoid";
// TODO: define Contact modal
function Contacts() {
  const [contacts, setContacts] = useState([
    { id: nanoid(), name: "John Smith", email: "foobarbaz@quux.com" },
    { id: nanoid(), name: "Mary Smith", email: "foobarbaz1@quux.com" },
    { id: nanoid(), name: "Yahya Smith", email: "foobarbaz2@quux.com" },
    { id: nanoid(), name: "Maryam Smith", email: "foobarbaz3@quux.com" },
  ]);

  const [contactValue, setContactValue] = useState({
    id: "",
    name: "",
    email: "",
  });

  const handleInputChange = useCallback(
    (e: any) => {
      setContactValue((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    },
    [setContactValue]
  );

  const addContact = useCallback(() => {
    setContacts((prev) => [...prev, { ...contactValue, id: nanoid() }]);
    setContactValue(() => ({
      id: "",
      name: "",
      email: "",
    }));
  }, [contactValue]);

  return (
    <section>
      <h2>Contacts List</h2>
      <div>
        <ul>
          {contacts.map((el) => (
            <li key={el.id}>
              {el.id}
              {el.name}
            </li>
          ))}
        </ul>
        <div>
          <label>
            name
            <input
              placeholder="enter name"
              name="name"
              onChange={handleInputChange}
              value={contactValue.name}
            />
          </label>
          <label>
            email
            <input
              name="email"
              placeholder="enter email"
              onChange={handleInputChange}
              value={contactValue.email}
            />
          </label>
          <button onClick={addContact}>add</button>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
