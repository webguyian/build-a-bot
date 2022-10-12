/* eslint-disable no-param-reassign */
export default function (element, binding) {
  const { value } = binding;

  element.style.position = 'absolute';

  Object.keys(value).forEach((key) => {
    element.style[key] = value[key];
  });
}
