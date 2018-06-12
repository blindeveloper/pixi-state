import React from 'react'
import { storiesOf } from '@storybook/react'
import Input from '.'

storiesOf('Input', module)
  .add('Input with placeholder', () => (
    <Input placeholder='type here'/>
  ))
  .add('Input type number', () => (
    <Input type='number'/>
  ))
  .add('Input type textarea', () => (
    <Input type='textarea'/>
  ))
  .add('Input type text', () => (
    <Input type='text'/>
  ))