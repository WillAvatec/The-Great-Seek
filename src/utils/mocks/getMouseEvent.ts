// https://github.com/testing-library/react-testing-library/issues/268

interface MouseEventWithOffsets extends MouseEventInit {
  pageX?: number;
  pageY?: number;
  offsetX?: number;
  offsetY?: number;
  x?: number;
  y?: number;
}

class FakeMouseEvent extends MouseEvent {
  private _pageX: number;
  private _pageY: number;

  constructor(type: string, values: MouseEventWithOffsets) {
    const { pageX, pageY, offsetX, offsetY, ...mouseValues } = values;
    super(type, mouseValues);
    this._pageX = pageX || 0;
    this._pageY = pageY || 0;

    Object.defineProperties(this, {
      pageX: {
        get() {
          return this._pageX;
        },
        set(value: number) {
          this._pageX = value;
        },
      },
      pageY: {
        get() {
          return this._pageY;
        },
        set(value: number) {
          this._pageY = value;
        },
      },
    });
  }
}

export interface MouseMock {
  pageX: number;
  pageY: number;
}
