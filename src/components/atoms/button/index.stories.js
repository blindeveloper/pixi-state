import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Button from './'

storiesOf('Button', module)
  .add('with text', () => (
    <Button active={true} onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button active={true} onClick={action('clicked')}><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  )) 
  .add('disabled', () => (
    <Button active={false}>disabled</Button>
  )) 