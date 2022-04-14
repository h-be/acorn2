import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import '../variables.scss'

import Checklist, { ChecklistItemType } from '../components/Checklist/Checklist'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Checklist',
  component: Checklist,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Checklist>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Checklist> = (args) => {
  const [listItems, setListItems] = useState<ChecklistItemType[]>([
    { text: 'Create a scope of work, for development.', isChecked: true },
    { text: 'Create a scope of work, for development.', isChecked: false },
    { text: 'Create a scope of work, for development.', isChecked: false },
  ])
  return (
    <Checklist
      {...args}
      listItems={listItems}
      onChange={(index, text, isChecked) => {
        const newListItems = listItems.map((listItem, liIndex) => {
          if (index === liIndex) {
            return { text, isChecked }
          } else {
            return listItem
          }
        })
        setListItems(newListItems)
      }}
      onAdd={(text) => {
        setListItems([...listItems, { text: text, isChecked: false }])
      }}
      onRemove={(index) => {
        // clone the array
        const newListItems = [...listItems]
        // remove the indicated one from the list
        newListItems.splice(index, 1)
        // update the list
        setListItems(newListItems)
      }}
    />
  )
}

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  size: 'medium',
}
