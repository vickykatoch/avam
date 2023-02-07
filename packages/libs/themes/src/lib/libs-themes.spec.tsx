import { render } from '@testing-library/react';

import LibsThemes from './libs-themes';

describe('LibsThemes', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LibsThemes />);
    expect(baseElement).toBeTruthy();
  });
});
