// This object will be used as the prototype for Nodes when creating a
// DOM-Level-1-compliant structure.

import { ElementType } from './dom-api-abstract';
import { DomApi } from './dom-api';

export interface NodeParam {
  type: ElementType;
  name: string;
  attribs: any;
  children: DomApi[];
}

export class Tag extends DomApi {
  public readonly children: DomApi[];
  public readonly type: ElementType;
  public readonly name: string;

  private attribs: any; // Map<string, any>;

  constructor(np: NodeParam) {
    super(np.type, np.children || []);
    this.name = np.name;
    this.attribs = {}; // new Map<string, any>();
    for (let key in np.attribs) {
      if (np.attribs.hasOwnProperty(key)) {
        this.setAttribute(key, np.attribs[key]);
      }
    }
  }

  public setAttribute(key: string, attr: string): void {
    // this.attribs.set(key, attr);
    this.attribs[key] = attr;
    const tmp = this as any;
    tmp[key] = tmp[key] || attr;
  }

  public _children(): DomApi[] {
    return this.children;
  }

}
