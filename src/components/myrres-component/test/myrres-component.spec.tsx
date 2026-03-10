import { newSpecPage } from '@stencil/core/testing';
import { MyrresComponent } from '../myrres-component';

describe('myrres-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyrresComponent],
      html: `<myrres-component></myrres-component>`,
    });

    const wlList = page.rootInstance as PfxAmbulanceWlList;
    const expectedPatients = wlList?.waitingPatients?.length

    const items = page.root.shadowRoot.querySelectorAll("md-list-item");
    expect(items.length).toEqual(expectedPatients);
  });
});
