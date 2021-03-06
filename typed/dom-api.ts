import { DomApiAbstract, ElementType, appendString } from './dom-api-abstract';

export abstract class DomApi implements DomApiAbstract {
  public readonly type: ElementType;
  public name?: string;
  public next?: DomApi;
  public prev?: DomApi;
  public parent?: DomApi;
  public startIndex?: number;
  public endIndex?: number;
  public children: DomApi[];
  public data: string;

  constructor(type: ElementType, children: DomApi[]) {
    this.type = type;
    this.children = children;
  }

  public _data(str: string, normalize: boolean): void {
    this.data = appendString(this.data, str, normalize);
  }

  public _endindex(idx: number): void {
    this.endIndex = idx;
  }

  public _startindex(idx: number): void {
    this.startIndex = idx;
  }

  public _next(idx: DomApi): void {
    this.next = idx;
  }

  public _prev(idx: DomApi): void {
    this.prev = idx;
  }

  public _parent(idx: DomApi): void {
    this.parent = idx;
  }

  public _children(modify: boolean): DomApi[] {
    return this.children;
  }

  public _lastChild(fc: DomApi): void {
    /* */
  }
  public _firstChild(fc: DomApi): void {
    /* */
  }
}

export { Tag } from './tag';
export { Text } from './text';
