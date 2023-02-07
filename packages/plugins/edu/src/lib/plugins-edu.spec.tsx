import { render } from '@testing-library/react';

import PluginsEdu from './plugins-edu';

describe('PluginsEdu', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PluginsEdu />);
    expect(baseElement).toBeTruthy();
  });
});
