const { program } = require('commander');
const database = require('./contacts');

program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse();

const options = program.opts();

// TODO: рефакторити
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      const allContacts = await database.getAll();
      console.log(allContacts);
      break;

    case 'get':
      const contact = await database.getById(id);
      console.log(contact);
      break;

    case 'add':
      const newContact = await database.addContact({
        name,
        email,
        phone,
      });
      console.log(newContact);
      break;
    case 'upDate':
      const upContact = await database.updateContact(id, {
        name,
        email,
        phone,
      });
      console.log(upContact);
      break;
    case 'remove':
      const deleteContact = await database.deleteContact(id);
      console.log(deleteContact);
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(options);
