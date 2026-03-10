import { newE2EPage } from '@stencil/core/testing';

describe('myrres-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<myrres-component></myrres-component>');

    const element = await page.find('myrres-component');
    expect(element).toHaveClass('hydrated');
  });
});
