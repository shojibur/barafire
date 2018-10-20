import { FirereportModule } from './firereport.module';

describe('FirereportModule', () => {
  let firereportModule: FirereportModule;

  beforeEach(() => {
    firereportModule = new FirereportModule();
  });

  it('should create an instance', () => {
    expect(firereportModule).toBeTruthy();
  });
});
