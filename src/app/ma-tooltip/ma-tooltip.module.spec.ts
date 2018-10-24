import { MaTooltipModule } from './ma-tooltip.module';

describe('MaTooltipModule', () => {
  let maTooltipModule: MaTooltipModule;

  beforeEach(() => {
    maTooltipModule = new MaTooltipModule();
  });

  it('should create an instance', () => {
    expect(maTooltipModule).toBeTruthy();
  });
});
