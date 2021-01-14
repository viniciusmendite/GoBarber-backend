import IParseTemplateDTO from '../dtos/IParseMailTemplateDTO';
import IMailTemplateProvider from '../models/IMailTemplateProvider';

class FakeMailTemplateProvider implements IMailTemplateProvider {
  public async parse({ template }: IParseTemplateDTO): Promise<string> {
    return template;
  }
}

export default FakeMailTemplateProvider;
