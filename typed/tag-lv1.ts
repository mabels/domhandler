// This object will be used as the prototype for Nodes when creating a
// DOM-Level-1-compliant structure.
import { ElementType } from './dom-api-abstract';
import { DomApiLv1 } from './dom-api-lv1';
// import { Tag } from './tr';

// export enum domLvl1 {
//   tagName = 'name',
//   childNodes = 'children',
//   parentNode = 'parent',
//   previousSibling = 'prev',
//   nextSibling = 'next',
//   nodeValue = 'data'
// }

// export enum ElementType {
//   Script,
//   Style,
//   Tag
// }

export interface NodeParamLv1 {
  type: ElementType;
  tagName: string;
  attribs: any;
  children: DomApiLv1[];
}

export class TagLv1 extends DomApiLv1 {
  public readonly type: ElementType;
  public readonly name: string;
  // public readonly childNodes: DomApiLv1[];

  private attribs: any; // Map<string, any>;

  constructor(np: NodeParamLv1) {
    super(np.type, np.children || null);
    this.name = np.tagName;
    this.tagName = np.tagName;
    this.nodeValue = null;

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

}
