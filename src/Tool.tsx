import React from 'react';
import { useGlobals } from '@storybook/api';
import { Icons, IconButton } from '@storybook/components';

export const Tool = () => {
  const [globals, updateGlobals] = useGlobals();
  const iframe = document.getElementById(
    'storybook-preview-iframe',
  ) as HTMLIFrameElement;

  const toggle = () => {
    const linkElements: NodeListOf<HTMLLinkElement> =
      iframe.contentDocument.querySelectorAll(
        `[title="${globals.stylesheetId}"]`,
      );

    for (let i = 0; i < linkElements.length; i++) {
      const element = linkElements[i];

      if (element.title === globals.stylesheetId) {
        element.disabled = !element.disabled;
      }
    }

    updateGlobals({ CSSToggled: !globals.CSSToggled });
  };

  return (
    <IconButton
      active={globals.CSSToggled}
      onClick={toggle}
      title="Enable/disable stylesheets"
    >
      <Icons icon="markup" />
    </IconButton>
  );
};
