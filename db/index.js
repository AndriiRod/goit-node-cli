const fs = require('fs/promises');
const path = require('path');
const { nanoid } = require('nanoid');

const contactsPath = path.join(__dirname, 'contacts.json');
const getAll = async () => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
};

const getById = async id => {
  const data = await getAll();
  return data.find(contact => contact.id === id) || null;
};

const addContact = async newContact => {
  const contact = {
    id: nanoid(),
    ...newContact,
  };
  const data = await getAll();
  data.push(contact);
  await fs.writeFile(contactsPath, JSON.stringify(data, null, 2));
  return contact;
};

const updateContact = async (id, contact) => {
  const data = await getAll();
  const indexContact = data.findIndex(contact => contact.id === id);
  if (indexContact === -1) return null;
  data[indexContact] = { id, ...contact };
  await fs.writeFile(contactsPath, JSON.stringify(data, null, 2));
  return data[indexContact];
};

const deleteContact = async id => {
  const data = await getAll();
  const indexContact = data.findIndex(contact => contact.id === id);
  if (indexContact === -1) return null;
  const [deleteContact] = data.splice(indexContact, 1);
  await fs.writeFile(contactsPath, JSON.stringify(data, null, 2));
  return deleteContact;
};

module.exports = {
  getAll,
  getById,
  addContact,
  updateContact,
  deleteContact,
};
