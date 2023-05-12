import type { Meta, StoryObj } from '@storybook/react';
import { TestButton } from '../components/TestButton';
// TestButton-改成你的元件名稱
//👇 這個預設匯出決定了你的故事在故事列表中的位置
const meta: Meta<typeof TestButton> = {
  /* 👇 
   * title這個props是選用的詳細設定可參照下面的網頁
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   */
  title: 'DEMO/TestButton',
  component: TestButton,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TestButton>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Click me',
  },
};