type EventCallback = (...args: any[]) => void;

class EventBus {
  private events = new Map<string, EventCallback[]>();

  addEvent(name: string, callback: EventCallback): void {
    const callbacks = this.events.get(name) || [];
    callbacks.push(callback);
    this.events.set(name, callbacks);
  }

  removeEvent(name: string, callback: EventCallback): void {
    const callbacks = this.events.get(name) || [];
    const index = callbacks.indexOf(callback);
    if (index > -1) callbacks.splice(index, 1);
  }

  emit(name: string, ...args: any[]): void {
    const callbacks = this.events.get(name) || [];
    callbacks.forEach(callback => callback(...args));
  }
}

export default new EventBus();
