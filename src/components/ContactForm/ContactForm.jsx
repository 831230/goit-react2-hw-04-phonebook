import PropTypes from 'prop-types';

const ContactForm = ({ nameTitle, numberTitle, addContact }) => {
  return (
    <div>
      <form onSubmit={addContact}>
        <h3>{nameTitle}</h3>
        <input
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <h3>{numberTitle}</h3>
        <input
          type="tel"
          name="number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit">Add contact</button>
      </form>
    </div>
  );
};

ContactForm.propTypes = {
  nameTitle: PropTypes.string,
  numberTitle: PropTypes.string,
  addContact: PropTypes.func,
};

export default ContactForm;
