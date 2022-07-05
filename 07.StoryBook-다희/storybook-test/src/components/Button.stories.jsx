import React from 'react';
import Button from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Next = Template.bind({});
Next.args = {
  size: 'large',
  label: '다음',
};
export const NextDisabled = Template.bind({});
NextDisabled.args = {
  size: 'large',
  label: '다음',
  active: 'false',
};
export const Follow = Template.bind({});
Follow.args = {
  size: 'medium',
  label: '팔로우',
};
export const FollowDisabled = Template.bind({});
FollowDisabled.args = {
  size: 'medium',
  label: '팔로우',
  active: 'false',
};
export const Unfollow = Template.bind({});
Unfollow.args = {
  size: 'medium',
  label: '언팔로우',
  primary: false,
};
export const Save = Template.bind({});
Save.args = {
  size: 'medium_small',
  label: '저장',
};
export const SaveDisabled = Template.bind({});
SaveDisabled.args = {
  size: 'medium_small',
  label: '저장',
  active: 'false',
};
export const FollowSmall = Template.bind({});
FollowSmall.args = {
  size: 'small',
  label: '팔로우',
};
export const Cancle = Template.bind({});
Cancle.args = {
  size: 'small',
  label: '취소',
  primary: false,
};