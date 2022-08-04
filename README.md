# Storybook Stylesheet Disable

A Storybook add-on that makes it easy to disable stylesheets.

## Getting Started

1. `yarn add --dev storybook-stylesheet-disable`
2. Add to your `main.js` config file:

```
module.exports = {
  ...,
  addons: [
    ...,
    "storybook-stylesheet-disable"
  ],
  ...,
};
```

3. Configure `stylesheetId` in `preview.js` within your `.storybook` directory:

```
export const parameters = {
  ...,
  stylesheetId: 'your-unique-id-here',
  ...,
};
```

4. Create a `preview-head.html` file within your `.storybook` directory if you don't already have one.
5. Add the stylesheets you wish to be disabled/enabled via `<link>` tags, giving each one _the same unique identifier_ as a `title` attribute:

```
<link rel="stylesheet" href="./path-to-css-file-1.css" type="text/css" title="my-unique-id">
<link rel="stylesheet" href="./path-to-css-file-2.css" type="text/css" title="my-unique-id">
<link rel="stylesheet" href="./path-to-css-file-3.css" type="text/css" title="my-unique-id">
```

(This tool can operate in reverse, too, if you wish. Simply add the `disabled` attribute to the `<link>` tags.)

6. Spin up Storybook and you should see a new toolbar button with the `< >` icon, which will disable/enable the specified stylesheets.
