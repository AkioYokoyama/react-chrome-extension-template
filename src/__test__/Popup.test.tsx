import { render } from '@testing-library/react'
import H1 from '../popup/H1'
 
test('h1のテキストが一致する', () => {
    const { container } = render(<H1 />);
    expect(container.innerHTML).toMatch('Google Chrome Extension Popup');
});
