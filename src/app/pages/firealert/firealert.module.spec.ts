import { FirealertModule } from './firealert.module';

describe('FirealertModule', () => {
  let firealertModule: FirealertModule;

  beforeEach(() => {
    firealertModule = new FirealertModule();
  });

  it('should create an instance', () => {
    expect(firealertModule).toBeTruthy();
  });
});
