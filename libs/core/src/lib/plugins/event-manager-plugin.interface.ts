export interface IEventManagerPlugin {
  supports(eventName: string): boolean;
  addEventListener(
    target: HTMLElement,
    eventName: string,
    handler: Function
  ): Function;
}