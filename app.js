const contacts = require('./db');

const [...test] = [1, 2, 3, 4, 5];
console.log(test);
const invorkeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'show':
      const allContacts = await contacts.getAll();
      console.log(allContacts);
      break;
    case 'getById':
      const contact = await contacts.getById(id);
      console.log(contact);
      break;
    case 'addNewContact':
      const newContact = await contacts.addContact({ name, email, phone });
      console.log(newContact);
      break;
    case 'upDateContact':
      const upContact = await contacts.updateContact(id, {
        name,
        email,
        phone,
      });
      console.log(upContact);
      break;
    case 'deleteContact':
      const deleteContact = await contacts.deleteContact(id);
      console.log(deleteContact);
      break;
  }
};

// invorkeAction({ action: 'show' });
// invorkeAction({ action: 'getById', id: 'vza2RIzNGIwutCVCs4mCL' });
// invorkeAction({
//   action: 'addNewContact',
//   name: 'Andrey',
//   email: 'andrey@gmail.com',
//   phone: '01234',
// });
// invorkeAction({
//   action: 'upDateContact',
//   id: 'a8MT4bR0EwXZwn81mNeOM',
//   name: 'Oleg',
//   email: 'andrey@gmail.com',
//   phone: '01234',
// });

// invorkeAction({ action: 'deleteContact', id: 'vza2RIzNGIwutCVCs4mCL' });
