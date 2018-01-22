import React from 'react';
import { v4 } from 'uuid';

function NewNewsFeedForm(){
  let _title = null;
  let _description = null;

function handleNewNewsFormSubmission(event) {
  event.preventDefault();
  props.onNewNewsCardCreation({title: _title.value, description: _description.value, id: v4()});
  _title.value = '';
  _description.value = '';
}

  return (
    <div>
      <form onSubmit={handleNewNewsFormSubmission}>
        <input
          type='text'
          id='title'
          placeholder='Title'/>
        ref={(input) => {_title = input;}}
        <textarea
          id='issue'
          placeholder='Short Description of News.'/>
        ref={(input) => {_description = input;}}
        <button type='submit'>Help!</button>
      </form>
    </div>
  );
}

export default NewNewsFeedForm;
