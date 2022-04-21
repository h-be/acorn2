import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import '../variables.scss'

import TagPickerComponent, {
  TagPickerProps,
} from '../components/TagPicker/TagPicker'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Tags/TagPicker',
  component: TagPickerComponent,
} as ComponentMeta<typeof TagPickerComponent>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TagPickerComponent> = (args) => {
  const [filterText, setFilterText] = useState('')
  return (
    <TagPickerComponent
      {...args}
      filterText={filterText}
      setFilterText={setFilterText}
    />
  )
}

export const TagPicker = Template.bind({})
// 'single story hoist' (place the component at the 'top level' without nesting in the storybook menu)
TagPicker.storyName = 'TagPicker'
// More on args: https://storybook.js.org/docs/react/writing-stories/args
const args: TagPickerProps = {
  tags: [
    {
      text: 'Release 0.6.2',
      backgroundColor: '#00A094',
      headerHash: '1',
    },
    {
      text: 'Code Refactor',
      backgroundColor: '#1C57C6',
      headerHash: '2',
    },
    {
      text: 'Rust Bug',
      backgroundColor: '#B45C11',
      headerHash: '3',
    },
    {
      text: 'UI Bug',
      backgroundColor: 'purple',
      headerHash: '4',
    },
    {
      text: 'UI Bug',
      backgroundColor: 'purple',
      headerHash: '5',
    },
    {
      text: 'UI Bug',
      backgroundColor: 'purple',
      headerHash: '6',
    },
    {
      text: 'UI Bug',
      backgroundColor: 'purple',
      headerHash: '7',
    },
  ],
  selectedTags: ['1', '3', '7'],
  onChange: function (newSelectedTags: string[]): void {
    throw new Error('Function not implemented.')
  },
  filterText: '',
  setFilterText: function (text: string): void {
    throw new Error('Function not implemented.')
  },
  onSaveTag: function (text: string, backgroundColor: string): Promise<void> {
    throw new Error('Function not implemented.')
  },
}

TagPicker.args = args
