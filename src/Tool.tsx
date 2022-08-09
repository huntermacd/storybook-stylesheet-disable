import React, { useCallback } from 'react';
import { FORCE_RE_RENDER } from '@storybook/core-events';
import { addons } from '@storybook/addons';
import { useGlobals } from '@storybook/api';
import { Icons, IconButton } from '@storybook/components';

export const Tool = () => {
  const [{ CSSToggled, stylesheetId }, updateGlobals] = useGlobals();

  const iframe = document.getElementById(
    'storybook-preview-iframe',
  ) as HTMLIFrameElement;

  const refreshAndUpdateGlobal = () => {
    updateGlobals({
      CSSToggled: !CSSToggled,
      stylesheetId,
    }),
      addons.getChannel().emit(FORCE_RE_RENDER);
  };

  const toggle = useCallback(() => {
    const linkElements: NodeListOf<HTMLLinkElement> =
      iframe.contentDocument.querySelectorAll(`[title="${stylesheetId}"]`);

    for (let i = 0; i < linkElements.length; i++) {
      const element = linkElements[i];

      if (element.title === stylesheetId) {
        element.disabled = !element.disabled;
      }
    }

    refreshAndUpdateGlobal();
  }, [stylesheetId, CSSToggled]);

  return (
    <IconButton
      active={CSSToggled}
      onClick={toggle}
      title="Enable/disable stylesheets"
    >
      <Icons icon="markup" />
    </IconButton>
  );
};
