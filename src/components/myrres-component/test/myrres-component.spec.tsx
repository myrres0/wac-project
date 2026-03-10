import { newSpecPage } from '@stencil/core/testing';
import { MyrresComponent } from '../myrres-component';

describe('myrres-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyrresComponent],
      html: `<myrres-component></myrres-component>`,
    });
    expect(page.root).toEqualHtml(`
      <myrres-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </myrres-component>
    `);
  });
});
