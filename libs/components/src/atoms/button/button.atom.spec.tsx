import { render } from '@testing-library/react';

import ButtonAtom from './button.atom';

describe('ButtonAtom', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ButtonAtom />);
    expect(baseElement).toBeTruthy();
  });
});
