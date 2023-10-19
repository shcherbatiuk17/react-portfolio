import React from 'react';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';

const styles = {
  a: {
    backgroundColor: 'pink',
    padding: '20px',
  },
  b: {
    border: '3px solid green',
    backgroundColor: 'yellow',
    color: 'blue',
  },
  c: {
    border: '3px dotted red',
    backgroundColor: 'cyan',
    color: 'purple',
  },
  d: {
    backgroundColor: 'orange',
    color: 'black',
  },
};

function ContactForm() {
  return (
    <Form style={styles.a}>
      <Form.Group widths="equal">
        <Form.Field
          id='a-input-control-name'
          control={Input}
          label='a'
          type="text"
          name="a-name"
          placeholder='a...'
          style={styles.b}
        />
      </Form.Group>
      <Form.Field
        id='a-input-control-error-email'
        control={Input}
        label='a (a a)'
        type="email"
        name="a-email"
        placeholder='a@a.a'
        style={styles.b}
      />
      <Form.Field
        id='a-textarea-control-message'
        control={TextArea}
        label='a'
        type="text"
        name="a-message"
        placeholder='a a a...'
        style={styles.c}
      />
      <Form.Field
        id='a-button-control-public'
        control={Button}
        content='a a a'
        style={styles.d}
      />
    </Form>
  );
}

export default ContactForm;
