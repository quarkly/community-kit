interface Dom7Array {
  /* ====== DEFAULT ARRAY METHODS ====== */
  /**
   * Gets or sets the length of the array. This is a number one higher than the highest element defined in an array.
   */
  length: number;

  /**
   * Removes the last element from an array and returns it.
   */
  pop(): Element | undefined;
  /**
   * Appends new elements to an array, and returns the new length of the array.
   * @param items New elements of the Array.
   */
  push(...items: Element[]): number;
  /**
   * Combines two or more arrays.
   * @param items Additional items to add to the end of array1.
   */
  concat(...items: ConcatArray<Element>[]): Element[];
  /**
   * Combines two or more arrays.
   * @param items Additional items to add to the end of array1.
   */
  concat(...items: (Element | ConcatArray<Element>)[]): Element[];
  /**
   * Adds all the elements of an array separated by the specified separator string.
   * @param separator A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma.
   */
  join(separator?: string): string;
  /**
   * Reverses the elements in an Array.
   */
  reverse(): Element[];
  /**
   * Removes the first element from an array and returns it.
   */
  shift(): Element | undefined;
  /**
   * Returns a section of an array.
   * @param start The beginning of the specified portion of the array.
   * @param end The end of the specified portion of the array. This is exclusive of the element at the index 'end'.
   */
  slice(start?: number, end?: number): Element[];
  /**
   * Sorts an array.
   * @param compareFn Function used to determine the order of the elements. It is expected to return
   * a negative value if first argument is less than second argument, zero if they're equal and a positive
   * value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.
   * ```ts
   * [11,2,22,1].sort((a, b) => a - b)
   * ```
   */
  sort(compareFn?: (a: Element, b: Element) => number): this;
  /**
   * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
   * @param start The zero-based location in the array from which to start removing elements.
   * @param deleteCount The number of elements to remove.
   */
  splice(start: number, deleteCount?: number): Element[];
  /**
   * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
   * @param start The zero-based location in the array from which to start removing elements.
   * @param deleteCount The number of elements to remove.
   * @param items Elements to insert into the array in place of the deleted elements.
   */
  splice(start: number, deleteCount: number, ...items: Element[]): Element[];
  /**
   * Inserts new elements at the start of an array.
   * @param items  Elements to insert at the start of the Array.
   */
  unshift(...items: Element[]): number;
  /**
   * Returns the index of the first occurrence of a value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.
   */
  indexOf(searchElement: Element, fromIndex?: number): number;
  /**
   * Returns the index of the last occurrence of a specified value in an array.
   * @param searchElement The value to locate in the array.
   * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at the last index in the array.
   */
  lastIndexOf(searchElement: Element, fromIndex?: number): number;
  /**
   * Determines whether all the members of an array satisfy the specified test.
   * @param callbackfn A function that accepts up to three arguments. The every method calls
   * the callbackfn function for each element in the array until the callbackfn returns a value
   * which is coercible to the Boolean value false, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  every(
    callbackfn: (value: Element, index: number, array: Element[]) => unknown,
    thisArg?: any,
  ): boolean;
  /**
   * Determines whether the specified callback function returns true for any element of an array.
   * @param callbackfn A function that accepts up to three arguments. The some method calls
   * the callbackfn function for each element in the array until the callbackfn returns a value
   * which is coercible to the Boolean value true, or until the end of the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  some(
    callbackfn: (value: Element, index: number, array: Element[]) => unknown,
    thisArg?: any,
  ): boolean;
  /**
   * Performs the specified action for each element in an array.
   * @param callbackfn  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
   * @param thisArg  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  forEach(
    callbackfn: (value: Element, index: number, array: Element[]) => void,
    thisArg?: any,
  ): void;
  /**
   * Calls a defined callback function on each element of an array, and returns an array that contains the results.
   * @param callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  map<U>(
    callbackfn: (value: Element, index: number, array: Element[]) => U,
    thisArg?: any,
  ): U[];

  /* ====== DOM7 ARRAY METHODS ====== */

  /**  Retrieve one of the elements matched by the Dom7Array object (jQuery syntax). **/
  [index: number]: Element;

  // CLASSES
  /** Add class to elements */
  addClass(className: string): Dom7Array;
  /** Remove specified class */
  removeClass(className: string): Dom7Array;
  /** Determine whether any of the matched elements are assigned the given class */
  hasClass(className: string): Dom7Array;
  /** Remove (if class is present) or add (if not) one or more classes from each element in the set of matched elements */
  toggleClass(className: string): Dom7Array;

  // ATTRIBUTES AND PROPERTIES
  /** Get property value */
  prop(propName: string): any;
  /** Set single property value */
  prop(propName: string, propValue: any): Dom7Array;
  /** Set multiple properties */
  prop(propertiesObject: any): Dom7Array;
  /** Get attribute value */
  attr(attrName: string): string;
  /** Set single attribute value */
  attr(attrName: string, attrValue: string): Dom7Array;
  /** Set multiple attributes */
  attr(attributesObject: any): Dom7Array;
  /** Remove specified attribute */
  removeAttr(attrName: string): Dom7Array;
  /** Get the current value of the first element in the set of matched elements */
  val(): any;
  /** Set the value of every matched element */
  val(newValue: any): Dom7Array;

  // DATA
  /** Store arbitrary data associated with the matched elements */
  data(key: string, value: any): Dom7Array;
  /** Return the value at the named data store for the first element in the collection, as set by data(key, value) or by an HTML5 data-* attribute */
  data(key: string): any;
  /** Remove specified data */
  removeData(key: string): void;
  /** Returns element's data set (set of data- attributes) as plain Object */
  dataset(): any;

  // CSS TRASFORMS, TRANSITIONS
  /** Adds prefixed CSS transform property */
  transform(CSSTransformString: string): Dom7Array;
  /** Set CSS transition-duration property to collection */
  transition(transitionDuration: number): Dom7Array;

  // EVENTS
  /** Add event handler function to one or more events to the selected elements */
  on(
    eventName: string,
    handler: (event: Event) => void,
    useCapture?: boolean,
  ): Dom7Array;
  /** Live/delegated event handler */
  on(
    eventName: string,
    delegatedTarget: string,
    handler: (event: Event) => void,
    useCapture?: boolean,
  ): Dom7Array;
  /** Add event handler function to one or more events to the selected elements that will be executed only once */
  once(
    eventName: string,
    handler: (event: Event) => void,
    useCapture?: boolean,
  ): Dom7Array;
  /** Live/delegated event handler that will be executed only once */
  once(
    eventName: string,
    delegatedTarget: string,
    handler: (event: Event) => void,
    useCapture?: boolean,
  ): Dom7Array;
  /** Remove event handler */
  off(
    eventName: string,
    handler: (event: Event) => void,
    useCapture?: boolean,
  ): Dom7Array;
  /** Remove live/delegated event handler */
  off(
    eventName: string,
    delegatedTarget: string,
    handler: (event: Event) => void,
    useCapture?: boolean,
  ): Dom7Array;
  /** Execute all handlers added to the matched elements for the specified event */
  trigger(eventName: string, eventData?: any): Dom7Array;
  /** Adds transitionEnd event handler to collection */
  transitionEnd(callback: () => void): Dom7Array;
  /** Adds animationEnd event handler to collection */
  animationEnd(callback: () => void): Dom7Array;

  // STYLES
  /** Get the current computed width for the first element in the set of matched elements */
  width(): number;
  /** Set width for the first element in the set of matched elements */
  width(value: string | number): Dom7Array;
  /** Get the current computed width for the first element in the set of matched elements, including padding and border, and margin (if includeMargin is true) */
  outerWidth(includeMargin?: boolean): number;
  /** Set width for the first element in the set of matched elements, including padding and border, and margin (if includeMargin is true) */
  outerWidth(value: string | number): Dom7Array;
  /** Get the current computed height for the first element in the set of matched elements */
  height(): number;
  /** Set height for the first element in the set of matched elements */
  height(value: string | number): Dom7Array;
  /** Get the current computed height for the first element in the set of matched elements, including padding and border, and margin (if includeMargin is true) */
  outerHeight(includeMargin?: boolean): number;
  /** Set height for the first element in the set of matched elements, including padding and border, and margin (if includeMargin is true) */
  outerHeight(value: string | number): Dom7Array;
  /** Get the current coordinates of the first element relative to the document */
  offset(): { top: number; left: number };
  /** Set the coordinates of the first element relative to the document */
  offset(value: string | number): Dom7Array;
  /** Set "display:none" to the matched elements */
  hide(): void;
  /** Set "display:block" to the matched elements */
  show(): void;
  /** Get value of specified CSS property for the first element */
  css(property: string): string | number;
  /** Set specified CSS property to the matched elements */
  css(property: string, value: string | number): Dom7Array;
  /** Set multiple CSS properties to the matched elements */
  css(propertiesObject: any): Dom7Array;

  // SCROLL
  /** Get scrollTop position of element */
  scrollTop(): number;
  /** Set scrollTop "position" with animation during "duration" (in ms). Scroll top position will be set immediately if duration is not specified. If you have specified "callback" function, then it will be executed after scrolling completed */
  scrollTop(
    position: number,
    duration?: number,
    callback?: () => void,
  ): Dom7Array;
  /** Get scrollLeft position of element */
  scrollLeft(): number;
  /** Set scrollLeft "position" with animation during "duration" (in ms). Scroll left postion will be set immediately if duration is not specified. If you have specified "callback" function, then it will be executed after scrolling completed */
  scrollLeft(
    position: number,
    duration?: number,
    callback?: () => void,
  ): Dom7Array;
  /** Set scroll left and scroll top with animation during "duration" (in ms). Scroll postion will be set immediately if duration is not specified. If you have specified "callback" function, then it will be executed after scrolling completed */
  scrollTo(
    left: number,
    top: number,
    duration?: number,
    callback?: () => void,
  ): Dom7Array;

  // DOM MANIPULATION
  /** Add HTML element to the set of matched elements */
  add(html: string): Dom7Array;
  /** Create a new Dom7Array collection with elements added to the set of matched elements */
  add(...elements: Array<Element | Dom7Array>): Dom7Array;
  /** Iterate over collection, executing a callback function for each matched element */
  each(callback: (element: any, index: number) => void): Dom7Array;
  /** Get the HTML contents of the first element in the set of matched elements */
  html(): string;
  /** Set the HTML contents of every matched element */
  html(newInnerHTML: string): Dom7Array;
  /** Get the text contents of the first element in the set of matched elements */
  text(): string;
  /** Set the text contents of every matched element */
  text(newTextContent: string): Dom7Array;
  /** `.is(CSSSelector)` :
   * Check the current matched set of elements against CSS selector
   *
   * `.is(HTMLElement)` :
   * Check the current matched set of elements against HTML element or Dom7Array collection
   * */
  is(CSSSelector: string | Element | Dom7Array): boolean;
  /** Return the position of the first element within the Dom7Array collection relative to its sibling elements */
  index(): number;
  /** Reduce the set of matched elements to the one at the specified index */
  eq(index: number): Dom7Array;
  /** `.append(HTMLString)` :
   * Insert content, specified by the parameter, to the end of each element in the set of matched elements
   *
   * `.append(HTMLElement)` :
   * Insert specified HTML element to the end of element in the set of matched elements
   * */
  append(element: string | Element | Dom7Array): Dom7Array;
  /** Insert content/elements, to the end of element specified in parameter */
  appendTo(element: string | Element | Dom7Array): Dom7Array;
  /** `.prepend(newHTML)` :
   * Insert content, specified by the parameter, to the beginning of each element in the set of matched elements
   *
   * `.prepend(HTMLElement)` :
   * Insert specified HTML element to the beginning of element in the set of matched elements
   * */
  prepend(element: string | Element | Dom7Array): Dom7Array;
  /** Insert content/elements, to the beginning of element specified in parameter */
  prependTo(element: string | Element | Dom7Array): Dom7Array;
  /** Insert every element in the set of matched elements before the target. Target could be specified as CSS selector or HTML element or Dom7Array collection */
  insertBefore(element: string | Element | Dom7Array): Dom7Array;
  /** Insert every element in the set of matched elements after the target. Target could be specified as CSS selector or HTML element or Dom7Array collection */
  insertAfter(element: string | Element | Dom7Array): Dom7Array;
  /** Get the immediately following sibling of each element in the set of matched elements. If a selector is provided, it retrieves the next sibling only if it matches that selector */
  next(selector?: string): Dom7Array;
  /** Get all following siblings of each element in the set of matched elements, optionally filtered by a selector */
  nextAll(selector?: string): Dom7Array;
  /** Get the immediately preceding sibling of each element in the set of matched elements, optionally filtered by a selector */
  prev(selector?: string): Dom7Array;
  /** Get all preceding siblings of each element in the set of matched elements, optionally filtered by a selector */
  prevAll(selector?: string): Dom7Array;
  /** Get the siblings of each element in the set of matched elements, optionally filtered by a selector */
  siblings(selector?: string): Dom7Array;
  /** Get the first parent of each element in the current set of matched elements, optionally filtered by a selector */
  parent(selector?: string): Dom7Array;
  /** Get the ancestors of each element in the current set of matched elements, optionally filtered by a selector */
  parents(selector?: string): Dom7Array;
  /** For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree */
  closest(selector?: string): Dom7Array;
  /** Get the descendants of each element in the current set of matched elements, filtered by a selector */
  find(selector?: string): Dom7Array;
  /** Get the children of each element in the set of matched elements, optionally filtered by a selector */
  children(selector?: string): Dom7Array;
  /** Filter collection of elements */
  filter(callback: (element: any, index: number) => boolean): Dom7Array;
  /** Remove/detach matched elements from the Dom */
  remove(): Dom7Array;
  /** Remove all child nodes of the set of matched elements from the DOM. Alias for `.html('')` */
  empty(): Dom7Array;

  // SHORTCUTS
  /** Trigger "click" event on collection */
  click(): Dom7Array;
  /** Add "click" event handler to collection */
  click(handler: (event: Event) => void): Dom7Array;
  /** Trigger "blur" event on collection */
  blur(): Dom7Array;
  /** Add "blur" event handler to collection */
  blur(handler: (event: Event) => void): Dom7Array;
  /** Trigger "focus" event on collection */
  focus(): Dom7Array;
  /** Add "focus" event handler to collection */
  focus(handler: (event: Event) => void): Dom7Array;
  /** Trigger "focusin" event on collection */
  focusin(): Dom7Array;
  /** Add "focusin" event handler to collection */
  focusin(handler: (event: Event) => void): Dom7Array;
  /** Trigger "focusout" event on collection */
  focusout(): Dom7Array;
  /** Add "focusout" event handler to collection */
  focusout(handler: (event: Event) => void): Dom7Array;
  /** Trigger "keyup" event on collection */
  keyup(): Dom7Array;
  /** Add "keyup" event handler to collection */
  keyup(handler: (event: Event) => void): Dom7Array;
  /** Trigger "keydown" event on collection */
  keydown(): Dom7Array;
  /** Add "keydown" event handler to collection */
  keydown(handler: (event: Event) => void): Dom7Array;
  /** Trigger "keypress" event on collection */
  keypress(): Dom7Array;
  /** Add "keypress" event handler to collection */
  keypress(handler: (event: Event) => void): Dom7Array;
  /** Trigger "submit" event on collection */
  submit(): Dom7Array;
  /** Add "submit" event handler to collection */
  submit(handler: (event: Event) => void): Dom7Array;
  /** Trigger "change" event on collection */
  change(): Dom7Array;
  /** Add "change" event handler to collection */
  change(handler: (event: Event) => void): Dom7Array;
  /** Trigger "mousedown" event on collection */
  mousedown(): Dom7Array;
  /** Add "mousedown" event handler to collection */
  mousedown(handler: (event: Event) => void): Dom7Array;
  /** Trigger "mousemove" event on collection */
  mousemove(): Dom7Array;
  /** Add "mousemove" event handler to collection */
  mousemove(handler: (event: Event) => void): Dom7Array;
  /** Trigger "mouseup" event on collection */
  mouseup(): Dom7Array;
  /** Add "mouseup" event handler to collection */
  mouseup(handler: (event: Event) => void): Dom7Array;
  /** Trigger "mouseenter" event on collection */
  mouseenter(): Dom7Array;
  /** Add "mouseenter" event handler to collection */
  mouseenter(handler: (event: Event) => void): Dom7Array;
  /** Trigger "mouseleave" event on collection */
  mouseleave(): Dom7Array;
  /** Add "mouseleave" event handler to collection */
  mouseleave(handler: (event: Event) => void): Dom7Array;
  /** Trigger "mouseout" event on collection */
  mouseout(): Dom7Array;
  /** Add "mouseout" event handler to collection */
  mouseout(handler: (event: Event) => void): Dom7Array;
  /** Trigger "mouseover" event on collection */
  mouseover(): Dom7Array;
  /** Add "mouseover" event handler to collection */
  mouseover(handler: (event: Event) => void): Dom7Array;
  /** Trigger "touchstart" event on collection */
  touchstart(): Dom7Array;
  /** Add "touchstart" event handler to collection */
  touchstart(handler: (event: Event) => void): Dom7Array;
  /** Trigger "touchend" event on collection */
  touchend(): Dom7Array;
  /** Add "touchend" event handler to collection */
  touchend(handler: (event: Event) => void): Dom7Array;
  /** Trigger "touchmove" event on collection */
  touchmove(): Dom7Array;
  /** Add "touchmove" event handler to collection */
  touchmove(handler: (event: Event) => void): Dom7Array;
  /** Add "resize" event handler to collection */
  resize(handler: (event: Event) => void): Dom7Array;
  /** Add "scroll" event handler to collection */
  scroll(handler: (event: Event) => void): Dom7Array;
  /** Perform a custom animation of a set of CSS properties */
  animate(properties: any, parameters: any): Dom7Array;
}

interface A11yMethods {}

interface A11yEvents {}

interface A11yOptions {
  /**
   * Enables A11y
   *
   * @default true
   */
  enabled?: boolean;

  /**
   * Message for screen readers for previous button
   *
   * @default 'Previous slide'
   */
  prevSlideMessage?: string;

  /**
   * Message for screen readers for next button
   *
   * @default 'Next slide'
   */
  nextSlideMessage?: string;

  /**
   * Message for screen readers for previous button when swiper is on first slide
   *
   * @default 'This is the first slide'
   */
  firstSlideMessage?: string;

  /**
   * Message for screen readers for next button when swiper is on last slide
   *
   * @default 'This is the last slide'
   */
  lastSlideMessage?: string;

  /**
   * Message for screen readers for single pagination bullet
   *
   * @default 'Go to slide {{index}}'
   */
  paginationBulletMessage?: string;

  /**
   * CSS class name of A11y notification
   *
   * @default 'swiper-notification'
   */
  notificationClass?: string;

  /**
   * Message for screen readers for outer swiper container
   *
   * @default null
   */
  containerMessage?: string | null;

  /**
   * Message for screen readers describing the role of outer swiper container
   *
   * @default null
   */
  containerRoleDescriptionMessage?: string | null;

  /**
   * Message for screen readers describing the role of slide element
   *
   * @default null
   */
  itemRoleDescriptionMessage?: string | null;

  /**
   * Message for screen readers describing the label of slide element
   *
   * @default '{{index}} / {{slidesLength}}'
   */
  slideLabelMessage?: string;

  /**
   * Value of swiper slide `role` attribute
   *
   * @default 'group'
   */
  slideRole?: string;

  /**
   * Value of `id` attribute to be set on swiper-wrapper. If `null` will be generated automatically
   *
   * @default null
   */
  id?: string | number | null;
}

interface AutoplayMethods {
  /**
   * Whether autoplay enabled and running
   */
  running: boolean;

  /**
   * Whether autoplay is paused
   */
  paused: boolean;

  /**
   * Pause autoplay
   */
  pause(speed?: number): void;

  /**
   * Run the autoplay logic
   */
  run(): void;

  /**
   * Start autoplay
   */
  start(): boolean;

  /**
   * Stop autoplay
   */
  stop(): boolean;
}

interface AutoplayEvents {
  /**
   * Event will be fired in when autoplay started
   */
  autoplayStart: (swiper: Swiper) => void;
  /**
   * Event will be fired when autoplay stopped
   */
  autoplayStop: (swiper: Swiper) => void;
  /**
   * Event will be fired on autoplay pause (on mouse/pointer enter), when `pauseOnMouseEnter` enabled
   */
  autoplayPause: (swiper: Swiper) => void;
  /**
   * Event will be fired on autoplay resume (on mouse/pointer leave), when `pauseOnMouseEnter` enabled
   */
  autoplayResume: (swiper: Swiper) => void;
  /**
   * Event will be fired when slide changed with autoplay
   */
  autoplay: (swiper: Swiper) => void;
}

/**
 * Object with autoplay parameters or boolean `true` to enable with default settings.
 *
 * @example
 * ```js
 * const swiper = new Swiper('.swiper', {
 *   autoplay: {
 *     delay: 5000,
 *   },
 * });
 * ```
 */
interface AutoplayOptions {
  /**
   * Delay between transitions (in ms). If this parameter is not specified, auto play will be disabled
   *
   * If you need to specify different delay for specific slides you can do it by using
   * `data-swiper-autoplay` (in ms) attribute on slide.
   *
   * @example
   * ```html
   * <!-- hold this slide for 2 seconds -->
   * <div class="swiper-slide" data-swiper-autoplay="2000">
   * ```
   *
   * @default 3000
   */
  delay?: number;

  /**
   * Enable this parameter and autoplay will be stopped when it reaches last slide (has no effect in loop mode)
   *
   * @default false
   */
  stopOnLastSlide?: boolean;

  /**
   * Set to `false` and autoplay will not be disabled after user interactions (swipes),
   * it will be restarted every time after interaction
   *
   * @default true
   */
  disableOnInteraction?: boolean;

  /**
   * Enables autoplay in reverse direction
   *
   * @default false
   */
  reverseDirection?: boolean;

  /**
   * When enabled autoplay will wait for wrapper transition to continue.
   * Can be disabled in case of using Virtual Translate when your
   * slider may not have transition
   *
   * @default true
   */
  waitForTransition?: boolean;

  /**
   * When enabled autoplay will be paused on mouse enter over Swiper container. If `disableOnInteraction` is also enabled, it will stop autoplay instead of pause
   *
   * @default false
   */
  pauseOnMouseEnter?: boolean;
}

interface ControllerMethods {
  /**
   * Pass here another Swiper instance or array with Swiper instances that should be controlled
   * by this Swiper
   */
  control?: Swiper | Swiper[];
}

interface ControllerEvents {}

interface ControllerOptions {
  /**
   * Pass here another Swiper instance or array with Swiper instances that should be controlled
   * by this Swiper
   */
  control?: Swiper | Swiper[];

  /**
   * Set to `true` and controlling will be in inverse direction
   *
   * @default false
   */
  inverse?: boolean;

  /**
   * Defines a way how to control another slider: slide by slide
   * (with respect to other slider's grid) or depending on all slides/container
   * (depending on total slider percentage).
   *
   * @default 'slide'
   */
  by?: 'slide' | 'container';
}

interface CSSSelector extends String {}

interface SwiperModule {
  name: string;
}

interface CoverflowEffectMethods {}

interface CoverflowEffectEvents {}

interface CoverflowEffectOptions {
  /**
   * Enables slides shadows
   *
   * @default true
   */
  slideShadows?: boolean;
  /**
   * Slide rotate in degrees
   *
   * @default 50
   */
  rotate?: number;
  /**
   * Stretch space between slides (in px)
   *
   * @default 0
   */
  stretch?: number;
  /**
   * Depth offset in px (slides translate in Z axis)
   *
   * @default 100
   */
  depth?: number;
  /**
   * Slide scale effect
   *
   * @default 1
   */
  scale?: number;
  /**
   * Effect multiplier
   *
   * @default 1
   */
  modifier?: number;
  /**
   * CSS selector of the element inside of the slide to transform instead of the slide itself. Useful to use with cssMode
   *
   * @default null
   */
  transformEl?: CSSSelector;
}

interface CubeEffectMethods {}

interface CubeEffectEvents {}

interface CubeEffectOptions {
  /**
   * Enables slides shadows
   *
   * @default true
   */
  slideShadows?: boolean;
  /**
   * Enables main slider shadow
   *
   * @default true
   */
  shadow?: boolean;
  /**
   * Main shadow offset in px
   *
   * @default 20
   */
  shadowOffset?: number;
  /**
   * Main shadow scale ratio
   *
   * @default 0.94
   */
  shadowScale?: number;
}

interface FadeEffectMethods {}

interface FadeEffectEvents {}

interface FadeEffectOptions {
  /**
   * Enables slides cross fade
   *
   * @default false
   */
  crossFade?: boolean;
  /**
   * CSS selector of the element inside of the slide to transform instead of the slide itself. Useful to use with cssMode
   *
   * @default null
   */
  transformEl?: CSSSelector;
}

interface FlipEffectMethods {}

interface FlipEffectEvents {}

interface FlipEffectOptions {
  /**
   * Enables slides shadows
   *
   * @default true
   */
  slideShadows?: boolean;
  /**
   * Limit edge slides rotation
   *
   * @default true
   */
  limitRotation?: boolean;
  /**
   * CSS selector of the element inside of the slide to transform instead of the slide itself. Useful to use with cssMode
   *
   * @default null
   */
  transformEl?: CSSSelector;
}

interface CreativeEffectTransform {
  translate?: (string | number)[];
  rotate?: number[];
  opacity?: number;
  scale?: number;
  shadow?: boolean;
  origin?: string;
}

interface CreativeEffectMethods {}

interface CreativeEffectEvents {}

interface CreativeEffectOptions {
  /**
   * Previous slide transformations. Accepts object of the following type:
   *
   * @example
   * ```js
   * {
   *   // Array with translate X, Y and Z values
   *   translate: (string | number)[];
   *   // Array with rotate X, Y and Z values (in deg)
   *   rotate?: number[];
   *   // Slide opacity
   *   opacity?: number;
   *   // Slide scale
   *   scale?: number;
   *   // Enables slide shadow
   *   shadow?: boolean;
   *   // Transform origin, e.g. `left bottom`
   *   origin?: string;
   * }
   * ```
   *
   */
  prev?: CreativeEffectTransform;
  /**
   * Next slide transformations.
   *
   * @example
   * ```js
   * {
   *   // Array with translate X, Y and Z values
   *   translate: (string | number)[];
   *   // Array with rotate X, Y and Z values (in deg)
   *   rotate?: number[];
   *   // Slide opacity
   *   opacity?: number;
   *   // Slide scale
   *   scale?: number;
   *   // Enables slide shadow
   *   shadow?: boolean;
   *   // Transform origin, e.g. `left bottom`
   *   origin?: string;
   * }
   * ```
   *
   */
  next?: CreativeEffectTransform;
  /**
   * CSS selector of the element inside of the slide to transform instead of the slide itself. Useful to use with cssMode
   *
   * @default null
   */
  transformEl?: CSSSelector;
  /**
   * Limit progress/offset to amount of side slides. If `1`, then slides all slides after prev/next will have same state. If `2`, then all slides after 2nd before/after active will have same state, etc.
   *
   * @default 1
   */
  limitProgress?: number;
  /**
   * Splits shadow "opacity" per slide based on `limitProgress` (only if transformation shadows enabled). E.g. setting `limitProgress: 2` and enabling `shadowPerProgress`, will set shadow opacity to `0.5` and `1` on two slides next to active. With this parameter disabled, all slides beside active will have shadow with `1` opacity
   *
   * @default false
   */
  shadowPerProgress?: boolean;
  /**
   * Allows to multiply slides transformations and opacity.
   *
   * @default 1
   */
  progressMultiplier?: number;
  /**
   * Enable this parameter if your custom transforms require 3D transformations (`translateZ`, `rotateX`, `rotateY` )
   *
   * @default true
   */
  perspective?: boolean;
}

interface CardsEffectMethods {}

interface CardsEffectEvents {}

interface CardsEffectOptions {
  /**
   * Enables slides shadows
   *
   * @default true
   */
  slideShadows?: boolean;

  /**
   * Enables cards rotation
   *
   * @default true
   */
  rotate?: boolean;

  /**
   * Rotate angle per slide (in degrees)
   *
   * @default 2
   */
  perSlideRotate?: number;

  /**
   * Offset distance per slide (in px)
   *
   * @default 8
   */
  perSlideOffset?: number;

  /**
   * CSS selector of the element inside of the slide to transform instead of the slide itself. Useful to use with cssMode
   *
   * @default null
   */
  transformEl?: CSSSelector;
}

interface HashNavigationMethods {}

interface HashNavigationEvents {
  /**
   * Event will be fired on window hash change
   */
  hashChange: (swiper: Swiper) => void;
  /**
   * Event will be fired when swiper updates the hash
   */
  hashSet: (swiper: Swiper) => void;
}

interface HashNavigationOptions {
  /**
   * Set to `true` to enable also navigation through slides (when hashnav
   * is enabled) by browser history or by setting directly hash on document location
   *
   * @default false
   */
  watchState?: boolean;

  /**
   * Works in addition to hashnav to replace current url state with the
   * new one instead of adding it to history
   *
   * @default     false
   */
  replaceState?: boolean;
}

interface HistoryMethods {}

interface HistoryEvents {}

interface HistoryOptions {
  /**
   * Enables History Plugin.
   *
   * @default false
   */
  enabled?: boolean;

  /**
   * Swiper page root, useful to specify when you use Swiper history mode not on root website page.
   * For example can be `https://my-website.com/` or `https://my-website.com/subpage/` or `/subpage/`
   *
   *
   * @default ''
   */
  root?: string;

  /**
   * Works in addition to hashnav or history to replace current url state with the
   * new one instead of adding it to history
   *
   * @default false
   */
  replaceState?: boolean;

  /**
   * Url key for slides
   *
   * @default 'slides'
   */
  key?: string;

  /**
   * Keep query parameters when changing browser url.
   *
   * @default false
   */
  keepQuery?: boolean;
}

interface KeyboardMethods {
  /**
   * Whether the keyboard control is enabled
   */
  enabled: boolean;

  /**
   * Enable keyboard control
   */
  enable(): void;

  /**
   * Disable keyboard control
   */
  disable(): void;
}

interface KeyboardEvents {
  /**
   * Event will be fired on key press
   */
  keyPress: (swiper: Swiper, keyCode: string) => void;
}

interface KeyboardOptions {
  /**
   * Set to `true` to enable keyboard control
   *
   * @default false
   */
  enabled?: boolean;
  /**
   * When enabled it will control sliders that are currently in viewport
   *
   * @default true
   */
  onlyInViewport?: boolean;
  /**
   * When enabled it will enable keyboard navigation by Page Up and Page Down keys
   *
   * @default true
   */
  pageUpDown?: boolean;
}

interface LazyMethods {
  /**
   * Load/update lazy images based on current slider state (position)
   */
  load(): void;

  /**
   * Force to load lazy images in slide by specified index
   * @param number index number of slide to load lazy images in
   */
  loadInSlide(index: number): void;
}

interface LazyEvents {
  /**
   * Event will be fired in the beginning of lazy loading of image
   */
  lazyImageLoad: (swiper: Swiper, slideEl: HTMLElement, imageEl: HTMLElement) => void;
  /**
   * Event will be fired when lazy loading image will be loaded
   */
  lazyImageReady: (swiper: Swiper, slideEl: HTMLElement, imageEl: HTMLElement) => void;
}

interface LazyOptions {
  /**
   * Whether the lazy loading images is enabled
   *
   * @default false
   */
  enabled?: boolean;
  /**
   * Enables to check is the Swiper in view before lazy loading images on initial slides
   *
   * @default false
   */
  checkInView?: boolean;
  /**
   * Element to check scrolling on for `checkInView`. Defaults to `window`
   */
  scrollingElement?: CSSSelector | null | Dom7Array | HTMLElement;
  /**
   * Set to `true` to enable lazy loading for the closest slides images (for previous and next slide images)
   *
   * @default false
   */
  loadPrevNext?: boolean;
  /**
   * Amount of next/prev slides to preload lazy images in. Can't be less than `slidesPerView`
   *
   * @default 1
   */
  loadPrevNextAmount?: number;
  /**
   * By default, Swiper will load lazy images after transition to this slide, so you may enable this parameter if you need it to start loading of new image in the beginning of transition
   *
   * @default false
   */
  loadOnTransitionStart?: boolean;
  /**
   * CSS class name of lazy element
   *
   * @default 'swiper-lazy'
   */
  elementClass?: string;
  /**
   * CSS class name of lazy loading element
   *
   * @default 'swiper-lazy-loading'
   */
  loadingClass?: string;
  /**
   * CSS class name of lazy loaded element
   *
   * @default 'swiper-lazy-loaded'
   */
  loadedClass?: string;
  /**
   * CSS class name of lazy preloader
   *
   * @default 'swiper-lazy-preloader'
   */
  preloaderClass?: string;
}

interface MousewheelMethods {
  /**
   * Whether the mousewheel control is enabled
   */
  enabled: boolean;

  /**
   * Enable mousewheel control
   */
  enable(): void;

  /**
   * Disable mousewheel control
   */
  disable(): void;
}

interface MousewheelEvents {
  /**
   * Event will be fired on mousewheel scroll
   */
  scroll: (swiper: Swiper, event: WheelEvent) => void;
}

interface MousewheelOptions {
  /**
   * Set to `true` to force mousewheel swipes to axis. So in horizontal mode mousewheel will work only with horizontal mousewheel scrolling, and only with vertical scrolling in vertical mode.

   *
   * @default false
   */
  forceToAxis?: boolean;
  /**
   * Set to `true` and swiper will release mousewheel event and allow page scrolling when swiper is on edge positions (in the beginning or in the end)

   *
   * @default false
   */
  releaseOnEdges?: boolean;
  /**
   * Set to `true` to invert sliding direction
   *
   * @default false
   */
  invert?: boolean;
  /**
   * Multiplier of mousewheel data, allows to tweak mouse wheel sensitivity
   *
   * @default 1
   */
  sensitivity?: number;
  /**
   * String with CSS selector or HTML element of the container accepting mousewheel events. By default it is swiper
   *
   * @default 'container'
   */
  eventsTarget?: 'container' | 'wrapper' | CSSSelector | HTMLElement;

  /**
   * Minimum mousewheel scroll delta to trigger swiper slide change
   *
   * @default null
   */
  thresholdDelta?: number | null;

  /**
   * Minimum mousewheel scroll time delta (in ms) to trigger swiper slide change
   *
   * @default null
   */
  thresholdTime?: number | null;
}

interface NavigationMethods {
  /**
   * HTMLElement of "next" navigation button
   */
  nextEl: HTMLElement;

  /**
   * HTMLElement of "previous" navigation button
   */
  prevEl: HTMLElement;

  /**
   * Update navigation buttons state (enabled/disabled)
   */
  update(): void;

  /**
   * Initialize navigation
   */
  init(): void;

  /**
   * Destroy navigation
   */
  destroy(): void;
}

interface NavigationEvents {
  /**
   * Event will be fired on navigation hide
   */
  navigationHide: (swiper: Swiper) => void;
  /**
   * Event will be fired on navigation show
   */
  navigationShow: (swiper: Swiper) => void;
  /**
   * Event will be fired on navigation prev button click
   */
  navigationPrev: (swiper: Swiper) => void;
  /**
   * Event will be fired on navigation next button click
   */
  navigationNext: (swiper: Swiper) => void;
}

interface NavigationOptions {
  /**
   * Boolean property to use with breakpoints to enable/disable navigation on certain breakpoints
   */
  enabled?: boolean;
  /**
   * String with CSS selector or HTML element of the element that will work
   * like "next" button after click on it
   *
   * @default null
   */
  nextEl?: CSSSelector | HTMLElement | null;

  /**
   * String with CSS selector or HTML element of the element that will work
   * like "prev" button after click on it
   *
   * @default null
   */
  prevEl?: CSSSelector | HTMLElement | null;

  /**
   * Toggle navigation buttons visibility after click on Slider's container
   *
   * @default false
   */
  hideOnClick?: boolean;

  /**
   * CSS class name added to navigation button when it becomes disabled
   *
   * @default 'swiper-button-disabled'
   */
  disabledClass?: string;

  /**
   * CSS class name added to navigation button when it becomes hidden
   *
   * @default 'swiper-button-hidden'
   */
  hiddenClass?: string;

  /**
   * CSS class name added to navigation button when it is disabled
   *
   * @default 'swiper-button-lock'
   */
  lockClass?: string;

  /**
   * CSS class name added on swiper container when navigation is disabled by breakpoint
   *
   * @default 'swiper-navigation-disabled'
   */
  navigationDisabledClass?: string;
}

interface PaginationMethods {
  /**
   * HTMLElement of pagination container element
   */
  el: HTMLElement;

  /**
   * Dom7 array-like collection of pagination bullets
   * HTML elements. To get specific slide HTMLElement
   * use `swiper.pagination.bullets[1]`.
   */
  bullets: Dom7Array;

  /**
   * Render pagination layout
   */
  render(): void;

  /**
   * Update pagination state (enabled/disabled/active)
   */
  update(): void;

  /**
   * Initialize pagination
   */
  init(): void;

  /**
   * Destroy pagination
   */
  destroy(): void;
}

interface PaginationEvents {
  /**
   * Event will be fired after pagination rendered
   */
  paginationRender: (swiper: Swiper, paginationEl: HTMLElement) => void;

  /**
   * Event will be fired when pagination updated
   */
  paginationUpdate: (swiper: Swiper, paginationEl: HTMLElement) => void;

  /**
   * Event will be fired on pagination hide
   */
  paginationHide: (swiper: Swiper) => void;

  /**
   * Event will be fired on pagination show
   */
  paginationShow: (swiper: Swiper) => void;
}

interface PaginationOptions {
  /**
   * Boolean property to use with breakpoints to enable/disable pagination on certain breakpoints
   */
  enabled?: boolean;
  /**
   * String with CSS selector or HTML element of the container with pagination
   *
   * @default null
   */
  el?: CSSSelector | HTMLElement | null;

  /**
   * String with type of pagination. Can be `'bullets'`, `'fraction'`, `'progressbar'` or `'custom'`
   *
   * @default 'bullets'
   */
  type?: 'bullets' | 'fraction' | 'progressbar' | 'custom';

  /**
   * Defines which HTML tag will be used to represent single pagination bullet. Only for `'bullets'` pagination type.
   *
   * @default 'span'
   */
  bulletElement?: string;

  /**
   * Good to enable if you use bullets pagination with a lot of slides. So it will keep only few bullets visible at the same time.
   *
   * @default false
   */
  dynamicBullets?: boolean;

  /**
   * The number of main bullets visible when `dynamicBullets` enabled.
   *
   * @default 1
   */
  dynamicMainBullets?: number;

  /**
   * Toggle (hide/show) pagination container visibility after click on Slider's container
   *
   * @default true
   */
  hideOnClick?: boolean;

  /**
   * If `true` then clicking on pagination button will cause transition to appropriate slide. Only for bullets pagination type
   *
   * @default false
   */
  clickable?: boolean;

  /**
   * Makes pagination progressbar opposite to Swiper's `direction` parameter, means vertical progressbar for horizontal swiper
   * direction and horizontal progressbar for vertical swiper direction
   *
   * @default false
   */
  progressbarOpposite?: boolean;

  /**
   * format fraction pagination current number. Function receives current number,
   * and you need to return formatted value
   */
  formatFractionCurrent?: (number: number) => number | string;

  /**
   * format fraction pagination total number. Function receives total number, and you
   * need to return formatted value
   */
  formatFractionTotal?: (number: number) => number | string;

  /**
   * This parameter allows totally customize pagination bullets, you need to pass here a function that accepts `index` number of
   * pagination bullet and required element class name (`className`). Only for `'bullets'` pagination type
   *
   * @default null
   *
   * @example
   * ```js
   * const swiper = new Swiper('.swiper', {
   *   //...
   *   renderBullet: function (index, className) {
   *     return '<span class="' + className + '">' + (index + 1) + '</span>';
   *   }
   * });
   * ```
   */
  renderBullet?: (index: number, className: string) => void;

  /**
   * This parameter allows to customize "fraction" pagination html. Only for `'fraction'` pagination type
   *
   * @default null
   *
   * @example
   * ```js
   * const swiper = new Swiper('.swiper', {
   *   //...
   *   renderFraction: function (currentClass, totalClass) {
   *       return '<span class="' + currentClass + '"></span>' +
   *               ' of ' +
   *               '<span class="' + totalClass + '"></span>';
   *   }
   * });
   * ```
   */
  renderFraction?: (currentClass: string, totalClass: string) => void;

  /**
   * This parameter allows to customize "progress" pagination. Only for `'progress'` pagination type
   *
   * @default null
   *
   * @example
   * ```js
   * const swiper = new Swiper('.swiper', {
   *   //...
   *   renderProgressbar: function (progressbarFillClass) {
   *       return '<span class="' + progressbarFillClass + '"></span>';
   *   }
   * });
   * ```
   */
  renderProgressbar?: (progressbarFillClass: string) => void;

  /**
   * This parameter is required for `'custom'` pagination type where you have to specify
   * how it should be rendered.
   *
   * @default null
   *
   * @example
   * ```js
   * const swiper = new Swiper('.swiper', {
   *   //...
   *   renderCustom: function (swiper, current, total) {
   *     return current + ' of ' + total;
   *   }
   * });
   * ```
   */
  renderCustom?: (swiper: Swiper, current: number, total: number) => void;

  /**
   * CSS class name of single pagination bullet
   *
   * @default 'swiper-pagination-bullet'
   */
  bulletClass?: string;

  /**
   * CSS class name of currently active pagination bullet
   *
   * @default 'swiper-pagination-bullet-active'
   */
  bulletActiveClass?: string;

  /**
   * The beginning of the modifier CSS class name that will be added to pagination depending on parameters
   *
   * @default 'swiper-pagination-'
   */
  modifierClass?: string;

  /**
   * CSS class name of the element with currently active index in "fraction" pagination
   *
   * @default 'swiper-pagination-current'
   */
  currentClass?: string;

  /**
   * CSS class name of the element with total number of "snaps" in "fraction" pagination
   *
   * @default 'swiper-pagination-total'
   */
  totalClass?: string;

  /**
   * CSS class name of pagination when it becomes inactive
   *
   * @default 'swiper-pagination-hidden'
   */
  hiddenClass?: string;

  /**
   * CSS class name of pagination progressbar fill element
   *
   * @default 'swiper-pagination-progressbar-fill'
   */
  progressbarFillClass?: string;

  /**
   * CSS class name of pagination progressbar opposite
   *
   * @default 'swiper-pagination-progressbar-opposite'
   */
  progressbarOppositeClass?: string;
  /**
   * CSS class name set to pagination when it is clickable
   *
   * @default 'swiper-pagination-clickable'
   */
  clickableClass?: string;

  /**
   * CSS class name set to pagination when it is disabled
   *
   * @default 'swiper-pagination-lock'
   */
  lockClass?: string;

  /**
   * CSS class name set to pagination in horizontal Swiper
   *
   * @default 'swiper-pagination-horizontal'
   */
  horizontalClass?: string;

  /**
   * CSS class name set to pagination in vertical Swiper
   *
   * @default 'swiper-pagination-vertical'
   */
  verticalClass?: string;

  /**
   * CSS class name added on swiper container and pagination element when pagination is disabled by breakpoint
   *
   * @default 'swiper-pagination-disabled'
   */
  paginationDisabledClass?: string;
}

interface ParallaxMethods {}

interface ParallaxEvents {}

interface ParallaxOptions {
  /**
   * Enable, if you want to use "parallaxed" elements inside of slider
   *
   * @default false
   */
  enabled?: boolean;
}

interface ScrollbarMethods {
  /**
   * HTMLElement of Scrollbar container element
   */
  el: HTMLElement;

  /**
   * HTMLElement of Scrollbar draggable handler element
   */
  dragEl: HTMLElement;

  /**
   * Updates scrollbar track and handler sizes
   */
  updateSize(): void;

  /**
   * Updates scrollbar translate
   */
  setTranslate(): void;

  /**
   * Initialize scrollbar
   */
  init(): void;

  /**
   * Destroy scrollbar
   */
  destroy(): void;
}

interface ScrollbarEvents {
  /**
   * Event will be fired on draggable scrollbar drag start
   */
  scrollbarDragStart: (swiper: Swiper, event: MouseEvent | TouchEvent | PointerEvent) => void;

  /**
   * Event will be fired on draggable scrollbar drag move
   */
  scrollbarDragMove: (swiper: Swiper, event: MouseEvent | TouchEvent | PointerEvent) => void;

  /**
   * Event will be fired on draggable scrollbar drag end
   */
  scrollbarDragEnd: (swiper: Swiper, event: MouseEvent | TouchEvent | PointerEvent) => void;
}

/**
 * Object with scrollbar parameters.
 *
 * @example
 * ```js
 * const swiper = new Swiper('.swiper', {
 *   scrollbar: {
 *     el: '.swiper-scrollbar',
 *     draggable: true,
 *   },
 * });
 * ```
 */
interface ScrollbarOptions {
  /**
   * Boolean property to use with breakpoints to enable/disable scrollbar on certain breakpoints
   */
  enabled?: boolean;
  /**
   * String with CSS selector or HTML element of the container with scrollbar.
   *
   * @default null
   */
  el?: CSSSelector | HTMLElement | null;

  /**
   * Hide scrollbar automatically after user interaction
   *
   * @default true
   */
  hide?: boolean;

  /**
   * Set to `true` to enable make scrollbar draggable that allows you to control slider position
   *
   * @default false
   */
  draggable?: boolean;

  /**
   * Set to `true` to snap slider position to slides when you release scrollbar
   *
   * @default false
   */
  snapOnRelease?: boolean;

  /**
   * Size of scrollbar draggable element in px
   *
   * @default 'auto'
   */
  dragSize?: 'auto' | number;

  /**
   * Scrollbar element additional CSS class when it is disabled
   *
   * @default 'swiper-scrollbar-lock'
   */
  lockClass?: string;

  /**
   * Scrollbar draggable element CSS class
   *
   * @default 'swiper-scrollbar-drag'
   */
  dragClass?: string;

  /**
   * CSS class name added on swiper container and scrollbar element when scrollbar is disabled by breakpoint
   *
   * @default 'swiper-scrollbar-disabled'
   */
  scrollbarDisabledClass?: string;

  /**
   * CSS class name set to scrollbar in horizontal Swiper
   *
   * @default 'swiper-scrollbar-horizontal'
   */
  horizontalClass?: string;

  /**
   * CSS class name set to scrollbar in vertical Swiper
   *
   * @default 'swiper-scrollbar-vertical'
   */
  verticalClass?: string;
}

interface ThumbsMethods {
  /**
   * Swiper instance of thumbs swiper
   */
  swiper: Swiper;

  /**
   * Update thumbs
   */
  update(initial: boolean): void;

  /**
   * Initialize thumbs
   */
  init(): boolean;
}

interface ThumbsEvents {}

interface ThumbsOptions {
  /**
   * Swiper instance of swiper used as thumbs or object with Swiper parameters to initialize thumbs swiper
   *
   * @default null
   */
  swiper?: Swiper | null;
  /**
   * Additional class that will be added to activated thumbs swiper slide
   *
   * @default 'swiper-slide-thumb-active'
   */
  slideThumbActiveClass?: string;
  /**
   * Additional class that will be added to thumbs swiper
   *
   * @default 'swiper-thumbs'
   */
  thumbsContainerClass?: string;
  /**
   * When enabled multiple thumbnail slides may get activated
   *
   * @default true
   */
  multipleActiveThumbs?: boolean;
  /**
   * Allows to set on which thumbs active slide from edge it should automatically move scroll thumbs. For example, if set to 1 and last visible thumb will be activated (1 from edge) it will auto scroll thumbs

   *
   * @default 0
   */
  autoScrollOffset?: number;
}

interface VirtualMethods {
  /**
   * Object with cached slides HTML elements
   */
  cache: object;

  /**
   * Index of first rendered slide
   */
  from: number;

  /**
   * Index of last rendered slide
   */
  to: number;

  /**
   * Array with slide items passed by `virtual.slides` parameter
   */
  slides: any[];

  /*
   * Methods
   */

  /**
   * Append slide. `slides` can be a single slide item or array with such slides.
   *
   * @note Only for Core version (in React, Svelte, Vue & Angular it should be done by modifying slides array/data/source)
   */
  appendSlide(slide: HTMLElement | string | HTMLElement[] | string[]): void;

  /**
   * Prepend slide. `slides` can be a single slide item or array with such slides.
   *
   * @note Only for Core version (in React, Svelte, Vue & Angular it should be done by modifying slides array/data/source)
   */
  prependSlide(slide: HTMLElement | string | HTMLElement[] | string[]): void;

  /**
   * Remove specific slide or slides. `slideIndexes` can be a number with slide index to remove or array with indexes.
   *
   * @note Only for Core version (in React, Svelte, Vue & Angular it should be done by modifying slides array/data/source)
   */
  removeSlide(slideIndexes: number[]): void;

  /**
   * Remove all slides
   *
   * @note Only for Core version (in React, Svelte, Vue & Angular it should be done by modifying slides array/data/source)
   */
  removeAllSlides(): void;

  /**
   * Update virtual slides state
   */
  update(force: boolean): void;
}

interface VirtualEvents {}

interface VirtualData {
  /**
   * slides left/top offset in px
   */
  offset: number;
  /**
   * index of first slide required to be rendered
   */
  from: number;
  /**
   * index of last slide required to be rendered
   */
  to: number;
  /**
   * array with slide items to be rendered
   */
  slides: any[];
}

interface VirtualOptions {
  /**
   * Whether the virtual slides are enabled
   *
   * @default false
   */
  enabled?: boolean;
  /**
   * Array with slides
   *
   * @default []
   */
  slides?: any[];
  /**
   * Enables DOM cache of rendering slides html elements. Once they are rendered they will be saved to cache and reused from it.
   *
   * @default true
   */
  cache?: boolean;
  /**
   * Increases amount of pre-rendered slides before active slide
   *
   * @default 0
   */
  addSlidesBefore?: number;
  /**
   * Increases amount of pre-rendered slides after active slide
   *
   * @default 0
   */
  addSlidesAfter?: number;
  /**
   * Function to render slide. As an argument it accepts current slide item for `slides` array and index number of the current slide. Function must return an outter HTML of the swiper slide.
   *
   * @default null
   */
  renderSlide?: (slide: any, index: any) => any | null;
  /**
   * Function for external rendering (e.g. using some other library to handle DOM manipulations and state like React.js or Vue.js). As an argument it accepts `data` object with the following properties:
   *
   * - `offset` - slides left/top offset in px
   * - `from` - index of first slide required to be rendered
   * - `to` - index of last slide required to be rendered
   * - `slides` - array with slide items to be rendered
   *
   * @default null
   */
  renderExternal?: (data: VirtualData) => any | null;
  /**
   * When enabled (by default) it will update Swiper layout right after renderExternal called. Useful to disable and update swiper manually when used with render libraries that renders asynchronously
   *
   * @default true
   */
  renderExternalUpdate?: boolean;
}

interface ZoomMethods {
  /**
   * Whether the zoom module is enabled
   */
  enabled: boolean;

  /**
   * Current image scale ratio
   */
  scale: number;

  /**
   * Enable zoom module
   */
  enable(): void;

  /**
   * Disable zoom module
   */
  disable(): void;

  /**
   * Zoom in image of the currently active slide
   */
  in(): void;

  /**
   * Zoom out image of the currently active slide
   */
  out(): void;

  /**
   * Toggle image zoom of the currently active slide
   */
  toggle(): void;
}

interface ZoomEvents {
  /**
   * Event will be fired on zoom change
   */
  zoomChange: (swiper: Swiper, scale: number, imageEl: HTMLElement, slideEl: HTMLElement) => void;
}

interface ZoomOptions {
  /**
   * Maximum image zoom multiplier
   *
   * @default 3
   */
  maxRatio?: number;
  /**
   * Minimal image zoom multiplier
   *
   * @default 1
   */
  minRatio?: number;
  /**
   * Enable/disable zoom-in by slide's double tap
   *
   * @default true
   */
  toggle?: boolean;
  /**
   * CSS class name of zoom container
   *
   * @default 'swiper-zoom-container'
   */
  containerClass?: string;
  /**
   * CSS class name of zoomed in container
   *
   * @default 'swiper-slide-zoomed'

   */
  zoomedSlideClass?: string;
}

interface FreeModeMethods {
  onTouchMove(): void;
  onTouchEnd(): void;
}

interface FreeModeEvents {}

interface FreeModeOptions {
  /**
   * Whether the free mode is enabled
   *
   * @default false
   */
  enabled?: boolean;

  /**
   * If enabled, then slide will keep moving for a while after you release it
   *
   * @default true
   */
  momentum?: boolean;

  /**
   * Higher value produces larger momentum distance after you release slider
   *
   * @default 1
   */
  momentumRatio?: number;

  /**
   * Higher value produces larger momentum velocity after you release slider
   *
   * @default 1
   */
  momentumVelocityRatio?: number;

  /**
   * Set to `false` if you want to disable momentum bounce in free mode
   *
   * @default true
   */
  momentumBounce?: boolean;

  /**
   * Higher value produces larger momentum bounce effect
   *
   * @default 1
   */
  momentumBounceRatio?: number;

  /**
   * Minimum touchmove-velocity required to trigger free mode momentum
   *
   * @default 0.02
   */
  minimumVelocity?: number;

  /**
   * Set to enabled to enable snap to slides positions in free mode
   *
   * @default false
   */
  sticky?: boolean;
}

interface GridOptions {
  /**
   * Number of slides rows, for multirow layout
   *
   * @note `rows` > 1 is currently not compatible with loop mode (`loop: true`)
   *
   * @default 1
   */
  rows?: number;

  /**
   * Can be `'column'` or `'row'`. Defines how slides should fill rows, by column or by row
   *
   * @default 'column'
   */
  fill?: 'row' | 'column';
}

interface SwiperEvents {
  // CORE_EVENTS_START
  /**
   * Fired right after Swiper initialization.
   * @note Note that with `swiper.on('init')` syntax it will
   * work only in case you set `init: false` parameter.
   *
   * @example
   * ```js
   * const swiper = new Swiper('.swiper', {
   *   init: false,
   *   // other parameters
   * });
   * swiper.on('init', function() {
   *  // do something
   * });
   * // init Swiper
   * swiper.init();
   * ```
   *
   * @example
   * ```js
   * // Otherwise use it as the parameter:
   * const swiper = new Swiper('.swiper', {
   *   // other parameters
   *   on: {
   *     init: function () {
   *       // do something
   *     },
   *   }
   * });
   * ```
   */
  init: (swiper: Swiper) => any;

  /**
   * Event will be fired right before Swiper destroyed
   */
  beforeDestroy: (swiper: Swiper) => void;

  /**
   * Event will be fired when currently active slide is changed
   */
  slideChange: (swiper: Swiper) => void;

  /**
   * Event will be fired in the beginning of animation to other slide (next or previous).
   */
  slideChangeTransitionStart: (swiper: Swiper) => void;

  /**
   * Event will be fired after animation to other slide (next or previous).
   */
  slideChangeTransitionEnd: (swiper: Swiper) => void;

  /**
   * Same as "slideChangeTransitionStart" but for "forward" direction only
   */
  slideNextTransitionStart: (swiper: Swiper) => void;

  /**
   * Same as "slideChangeTransitionEnd" but for "forward" direction only
   */
  slideNextTransitionEnd: (swiper: Swiper) => void;

  /**
   * Same as "slideChangeTransitionStart" but for "backward" direction only
   */
  slidePrevTransitionStart: (swiper: Swiper) => void;

  /**
   * Same as "slideChangeTransitionEnd" but for "backward" direction only
   */
  slidePrevTransitionEnd: (swiper: Swiper) => void;

  /**
   * Event will be fired in the beginning of transition.
   */
  transitionStart: (swiper: Swiper) => void;

  /**
   * Event will be fired after transition.
   */
  transitionEnd: (swiper: Swiper) => void;

  /**
   * Event will be fired when user touch Swiper. Receives `touchstart` event as an arguments.
   */
  touchStart: (swiper: Swiper, event: MouseEvent | TouchEvent | PointerEvent) => void;

  /**
   * Event will be fired when user touch and move finger over Swiper. Receives `touchmove` event as an arguments.
   */
  touchMove: (swiper: Swiper, event: MouseEvent | TouchEvent | PointerEvent) => void;

  /**
   * Event will be fired when user touch and move finger over Swiper in direction opposite to direction parameter. Receives `touchmove` event as an arguments.
   */
  touchMoveOpposite: (swiper: Swiper, event: MouseEvent | TouchEvent | PointerEvent) => void;

  /**
   * Event will be fired when user touch and move finger over Swiper and move it. Receives `touchmove` event as an arguments.
   */
  sliderMove: (swiper: Swiper, event: MouseEvent | TouchEvent | PointerEvent) => void;

  /**
   * Event will be fired when user release Swiper. Receives `touchend` event as an arguments.
   */
  touchEnd: (swiper: Swiper, event: MouseEvent | TouchEvent | PointerEvent) => void;

  /**
   * Event will be fired when user click/tap on Swiper. Receives `touchend` event as an arguments.
   */
  click: (swiper: Swiper, event: MouseEvent | TouchEvent | PointerEvent) => void;

  /**
   * Event will be fired when user click/tap on Swiper. Receives `touchend` event as an arguments.
   */
  tap: (swiper: Swiper, event: MouseEvent | TouchEvent | PointerEvent) => void;

  /**
   * Event will be fired when user double tap on Swiper's container. Receives `touchend` event as an arguments
   */
  doubleTap: (swiper: Swiper, event: MouseEvent | TouchEvent | PointerEvent) => void;

  /**
   * Event will be fired right after all inner images are loaded. updateOnImagesReady should be also enabled
   */
  imagesReady: (swiper: Swiper) => void;

  /**
   * Event will be fired when Swiper progress is changed, as an arguments it receives progress that is always from 0 to 1
   */
  progress: (swiper: Swiper, progress: number) => void;

  /**
   * Event will be fired when Swiper reach its beginning (initial position)
   */
  reachBeginning: (swiper: Swiper) => void;

  /**
   * Event will be fired when Swiper reach last slide
   */
  reachEnd: (swiper: Swiper) => void;

  /**
   * Event will be fired when Swiper goes to beginning or end position
   */
  toEdge: (swiper: Swiper) => void;

  /**
   * Event will be fired when Swiper goes from beginning or end position
   */
  fromEdge: (swiper: Swiper) => void;

  /**
   * Event will be fired when swiper's wrapper change its position. Receives current translate value as an arguments
   */
  setTranslate: (swiper: Swiper, translate: number) => void;

  /**
   * Event will be fired everytime when swiper starts animation. Receives current transition duration (in ms) as an arguments
   */
  setTransition: (swiper: Swiper, transition: number) => void;

  /**
   * Event will be fired on window resize right before swiper's onresize manipulation
   */
  resize: (swiper: Swiper) => void;

  /**
   * Event will be fired if observer is enabled and it detects DOM mutations
   */
  observerUpdate: (swiper: Swiper) => void;

  /**
   * Event will be fired right before "loop fix"
   */
  beforeLoopFix: (swiper: Swiper) => void;

  /**
   * Event will be fired after "loop fix"
   */
  loopFix: (swiper: Swiper) => void;

  /**
   * Event will be fired on breakpoint change
   */
  breakpoint: (swiper: Swiper, breakpointParams: SwiperOptions) => void;

  /**
   * !INTERNAL: Event will fired right before breakpoint change
   */
  _beforeBreakpoint?: (swiper: Swiper, breakpointParams: SwiperOptions) => void;

  /**
   * !INTERNAL: Event will fired after setting CSS classes on swiper container element
   */
  _containerClasses?: (swiper: Swiper, classNames: string) => void;

  /**
   * !INTERNAL: Event will fired after setting CSS classes on swiper slide element
   */
  _slideClass?: (swiper: Swiper, slideEl: HTMLElement, classNames: string) => void;

  /**
   * !INTERNAL: Event will fired after setting CSS classes on all swiper slides
   */
  _slideClasses?: (
    swiper: Swiper,
    slides: { slideEl: HTMLElement; classNames: string; index: number }[],
  ) => void;

  /**
   * !INTERNAL: Event will fired as soon as swiper instance available (before init)
   */
  _swiper?: (swiper: Swiper) => void;

  /**
   * !INTERNAL: Event will be fired on free mode touch end (release) and there will no be momentum
   */
  _freeModeNoMomentumRelease?: (swiper: Swiper) => void;

  /**
   * Event will fired on active index change
   */
  activeIndexChange: (swiper: Swiper) => void;
  /**
   * Event will fired on snap index change
   */
  snapIndexChange: (swiper: Swiper) => void;
  /**
   * Event will fired on real index change
   */
  realIndexChange: (swiper: Swiper) => void;
  /**
   * Event will fired right after initialization
   */
  afterInit: (swiper: Swiper) => void;
  /**
   * Event will fired right before initialization
   */
  beforeInit: (swiper: Swiper) => void;
  /**
   * Event will fired before resize handler
   */
  beforeResize: (swiper: Swiper) => void;
  /**
   * Event will fired before slide change transition start
   */
  beforeSlideChangeStart: (swiper: Swiper) => void;
  /**
   * Event will fired before transition start
   */
  beforeTransitionStart: (swiper: Swiper, speed: number, internal: any) => void; // what is internal?
  /**
   * Event will fired on direction change
   */
  changeDirection: (swiper: Swiper) => void;
  /**
   * Event will be fired when user double click/tap on Swiper
   */
  doubleClick: (swiper: Swiper, event: MouseEvent | TouchEvent | PointerEvent) => void;
  /**
   * Event will be fired on swiper destroy
   */
  destroy: (swiper: Swiper) => void;
  /**
   * Event will be fired on momentum bounce
   */
  momentumBounce: (swiper: Swiper) => void;
  /**
   * Event will be fired on orientation change (e.g. landscape -> portrait)
   */
  orientationchange: (swiper: Swiper) => void;
  /**
   * Event will be fired in the beginning of animation of resetting slide to current one
   */
  slideResetTransitionStart: (swiper: Swiper) => void;
  /**
   * Event will be fired in the end of animation of resetting slide to current one
   */
  slideResetTransitionEnd: (swiper: Swiper) => void;
  /**
   * Event will be fired with first touch/drag move
   */
  sliderFirstMove: (swiper: Swiper, event: TouchEvent) => void;
  /**
   * Event will be fired when number of slides has changed
   */
  slidesLengthChange: (swiper: Swiper) => void;
  /**
   * Event will be fired when slides grid has changed
   */
  slidesGridLengthChange: (swiper: Swiper) => void;
  /**
   * Event will be fired when snap grid has changed
   */
  snapGridLengthChange: (swiper: Swiper) => void;
  /**
   * Event will be fired after swiper.update() call
   */
  update: (swiper: Swiper) => void;
  /**
   * Event will be fired when swiper is locked (when `watchOverflow` enabled)
   */
  lock: (swiper: Swiper) => void;
  /**
   * Event will be fired when swiper is unlocked (when `watchOverflow` enabled)
   */
  unlock: (swiper: Swiper) => void;
  // CORE_EVENTS_END
}

interface SwiperEvents extends A11yEvents {}
interface SwiperEvents extends AutoplayEvents {}
interface SwiperEvents extends ControllerEvents {}
interface SwiperEvents extends CoverflowEffectEvents {}
interface SwiperEvents extends CubeEffectEvents {}
interface SwiperEvents extends FadeEffectEvents {}
interface SwiperEvents extends FlipEffectEvents {}
interface SwiperEvents extends CreativeEffectEvents {}
interface SwiperEvents extends CardsEffectEvents {}
interface SwiperEvents extends HashNavigationEvents {}
interface SwiperEvents extends HistoryEvents {}
interface SwiperEvents extends KeyboardEvents {}
interface SwiperEvents extends LazyEvents {}
interface SwiperEvents extends MousewheelEvents {}
interface SwiperEvents extends NavigationEvents {}
interface SwiperEvents extends PaginationEvents {}
interface SwiperEvents extends ParallaxEvents {}
interface SwiperEvents extends ScrollbarEvents {}
interface SwiperEvents extends ThumbsEvents {}
interface SwiperEvents extends VirtualEvents {}
interface SwiperEvents extends ZoomEvents {}
interface SwiperEvents extends FreeModeEvents {}

interface SwiperOptions {
  /**
   * Array with Swiper modules
   *
   * @example
   * ```js
   * import Swiper, { Navigation, Pagination } from 'swiper';
   *
   * const swiper = new Swiper('.swiper', {
   *    modules: [ Navigation, Pagination ],
   *  });
   * ```
   */
  modules?: SwiperModule[];
  /**
   * Whether Swiper should be initialised automatically when you create an instance.
   * If disabled, then you need to init it manually by calling `swiper.init()`
   *
   * @default true
   */
  init?: boolean;

  /**
   * Whether Swiper initially enabled. When Swiper is disabled, it will hide all navigation elements and won't respond to any events and interactions
   *
   * @default true
   */
  enabled?: boolean;

  /**
   * Swiper will recalculate slides position on window resize (orientationchange)
   *
   * @default true
   */
  updateOnWindowResize?: boolean;

  /**
   * When enabled it will use ResizeObserver (if supported by browser) on swiper container to detect container resize (instead of watching for window resize)
   *
   * @default true
   */
  resizeObserver?: boolean;

  /**
   * Index number of initial slide.
   *
   * @default 0
   */
  initialSlide?: number;

  /**
   * Can be `'horizontal'` or `'vertical'` (for vertical slider).
   *
   * @default 'horizontal'
   */
  direction?: 'horizontal' | 'vertical';

  /**
   * Duration of transition between slides (in ms)
   *
   * @default 300
   */
  speed?: number;

  /**
   * Enabled this option and plugin will set width/height on swiper wrapper equal to total size of all slides.
   * Mostly should be used as compatibility fallback option for browser that don't support flexbox layout well
   *
   * @default false
   */
  setWrapperSize?: boolean;

  /**
   * Enabled this option and swiper will be operated as usual except it will not move, real translate values on wrapper will not be set.
   * Useful when you may need to create custom slide transition
   *
   * @default false
   */
  virtualTranslate?: boolean;

  /**
   * Swiper width (in px). Parameter allows to force Swiper width.
   * Useful only if you initialize Swiper when it is hidden and in SSR and Test environments for correct Swiper initialization
   *
   * @default null
   *
   * @note Setting this parameter will make Swiper not responsive
   */
  width?: number | null;

  /**
   * Swiper height (in px). Parameter allows to force Swiper height.
   * Useful only if you initialize Swiper when it is hidden and in SSR and Test environments for correct Swiper initialization
   *
   * @default null
   *
   * @note Setting this parameter will make Swiper not responsive
   */
  height?: number | null;

  /**
   * Set to `true` and slider wrapper will adapt its height to the height of the currently active slide
   *
   * @default false
   */
  autoHeight?: boolean;

  /**
   * Set to `true` to round values of slides width and height to prevent blurry texts on usual
   * resolution screens (if you have such)
   *
   * @default false
   */
  roundLengths?: boolean;

  /**
   * Set to `true` on  Swiper for correct touch events interception. Use only on
   * swipers that use same direction as the parent one
   *
   * @default false
   */
  nested?: boolean;

  /**
   * When enabled Swiper will automatically wrap slides with swiper-wrapper element,
   * and will create required elements for navigation, pagination and scrollbar
   * they are enabled (with their respective params object or with boolean `true`))
   *
   * @default false
   */
  createElements?: boolean;

  /**
   * CSS selector for focusable elements. Swiping will be disabled on such elements if they are "focused"
   *
   * @default 'input, select, option, textarea, button, video, label'
   */
  focusableElements?: string;

  /**
   * If enabled (by default) and navigation elements' parameters passed as a string (like `".pagination"`)
   * then Swiper will look for such elements through child elements first.
   * Applies for pagination, prev/next buttons and scrollbar elements
   *
   * @default true
   */
  uniqueNavElements?: boolean;

  /**
   * Transition effect. Can be `'slide'`, `'fade'`, `'cube'`, `'coverflow'`, `'flip'` or `'creative'`
   *
   * @default 'slide'
   */
  effect?: 'slide' | 'fade' | 'cube' | 'coverflow' | 'flip' | 'creative' | 'cards';

  /**
   * Fire Transition/SlideChange/Start/End events on swiper initialization.
   * Such events will be fired on initialization in case of your initialSlide is not 0, or you use loop mode
   *
   * @default true
   */
  runCallbacksOnInit?: boolean;

  /**
   * When enabled Swiper will be disabled and hide navigation buttons on
   * case there are not enough slides for sliding.
   *
   * @default true
   */
  watchOverflow?: boolean;

  /**
   * userAgent string. Required for browser/device detection when rendered on server-side
   *
   * @default null
   */
  userAgent?: string | null;

  /**
   * Required for active slide detection when rendered on server-side and enabled history
   *
   * @default null
   */
  url?: string | null;

  /**
   * Register event handlers
   */
  on?: {
    [event in keyof SwiperEvents]?: SwiperEvents[event];
  };

  /**
   * Add event listener that will be fired on all events
   *
   * @example
   * ```js
   * const swiper = new Swiper('.swiper', {
   *    onAny(eventName, ...args) {
   *      console.log('Event: ', eventName);
   *      console.log('Event data: ', args);
   *    }
   *  });
   * ```
   */
  onAny?(handler: (eventName: string, ...args: any[]) => void): void;

  /**
   * When enabled it will use modern CSS Scroll Snap API.
   * It doesn't support all of Swiper's features, but potentially should bring a much better performance in simple configurations.
   *
   * This is what is not supported when it is enabled:
   *
   * - Cube and Cards effects
   * - `speed` parameter may not have no effect
   * - All transition start/end related events (use `slideChange` instead)
   * - `slidesPerGroup` has limited support
   * - `simulateTouch` doesn't have effect and "dragging" with mouse doesn't work
   * - `resistance` doesn't have any effect
   * - `allowSlidePrev/Next`
   * - `swipeHandler`
   * - `freeMode` and all relevant features
   *
   * @default false
   */
  cssMode?: boolean;

  // Slides grid

  /**
   * Distance between slides in px.
   *
   * @default 0
   *
   * @note If you use "margin" css property to the elements which go into Swiper in which you pass "spaceBetween" into, navigation might not work properly.
   */
  spaceBetween?: number;

  /**
   * Number of slides per view (slides visible at the same time on slider's container).
   * @note If you use it with "auto" value and along with `loop: true` then you need to specify `loopedSlides` parameter with amount of slides to loop (duplicate)
   * @note `slidesPerView: 'auto'` is currently not compatible with multirow mode, when `grid.rows` > 1
   *
   * @default 1
   */
  slidesPerView?: number | 'auto';

  /**
   * If total number of slides less than specified here value, then Swiper will enable `backface-visibility: hidden` on slide elements to reduce visual "flicker" in Safari.
   *
   * @note It is not recommended to enable it on large amount of slides as it will reduce performance
   *
   * @default 10
   */
  maxBackfaceHiddenSlides?: number;

  /**
   * Set numbers of slides to define and enable group sliding. Useful to use with slidesPerView > 1
   *
   * @default 1
   */
  slidesPerGroup?: number;

  /**
   * The parameter works in the following way: If `slidesPerGroupSkip` equals `0` (default), no slides are excluded from grouping, and the resulting behaviour is the same as without this change.
   *
   * If `slidesPerGroupSkip` is equal or greater than `1` the first X slides are treated as single groups, whereas all following slides are grouped by the `slidesPerGroup` value.
   *
   * @default 0
   */
  slidesPerGroupSkip?: number;

  /**
   * This param intended to be used only with `slidesPerView: 'auto'` and `slidesPerGroup: 1`. When enabled, it will skip all slides in view on `.slideNext()` & `.slidePrev()` methods calls, on Navigation "buttons" clicks and in autoplay.
   *
   * @default false
   */
  slidesPerGroupAuto?: boolean;

  /**
   * If `true`, then active slide will be centered, not always on the left side.
   *
   * @default false
   */
  centeredSlides?: boolean;

  /**
   * If `true`, then active slide will be centered without adding gaps at the beginning and end of slider.
   * Required `centeredSlides: true`. Not intended to be used with `loop` or `pagination`
   *
   * @default false
   */
  centeredSlidesBounds?: boolean;

  /**
   * Add (in px) additional slide offset in the beginning of the container (before all slides)
   *
   * @default 0
   */
  slidesOffsetBefore?: number;

  /**
   * Add (in px) additional slide offset in the end of the container (after all slides)
   *
   * @default 0
   */
  slidesOffsetAfter?: number;

  /**
   * Normalize slide index.
   *
   * @default true
   */
  normalizeSlideIndex?: boolean;

  /**
   * When enabled it center slides if the amount of slides less than `slidesPerView`. Not intended to be used `loop` mode and `grid.rows`
   *
   * @default false
   */
  centerInsufficientSlides?: boolean;

  /**
   * This option may a little improve desktop usability. If `true`, user will see the "grab" cursor when hover on Swiper
   *
   * @default false
   */
  grabCursor?: boolean;

  /**
   * Target element to listen touch events on. Can be `'container'` (to listen for touch events on swiper) or `'wrapper'`
   * (to listen for touch events on swiper-wrapper)
   *
   * @default 'wrapper'
   */
  touchEventsTarget?: 'container' | 'wrapper';

  /**
   * Touch ratio
   *
   * @default 1
   */
  touchRatio?: number;

  /**
   * Allowable angle (in degrees) to trigger touch move
   *
   * @default 45
   */
  touchAngle?: number;

  /**
   * If `true`, Swiper will accept mouse events like touch events (click and drag to change slides)
   *
   * @default true
   */
  simulateTouch?: boolean;

  /**
   * Set to `false` if you want to disable short swipes
   *
   * @default true
   */
  shortSwipes?: boolean;

  /**
   * Set to `false` if you want to disable long swipes
   *
   * @default true
   */
  longSwipes?: boolean;

  /**
   * Ratio to trigger swipe to next/previous slide during long swipes
   *
   * @default 0.5
   */
  longSwipesRatio?: number;

  /**
   * Minimal duration (in ms) to trigger swipe to next/previous slide during long swipes
   *
   * @default 300
   */
  longSwipesMs?: number;

  /**
   * If disabled, then slider will be animated only when you release it, it will not move while you hold your finger on it
   *
   * @default true
   */
  followFinger?: boolean;

  /**
   * If `false`, then the only way to switch the slide is use of external API functions like slidePrev or slideNext
   *
   * @default true
   */
  allowTouchMove?: boolean;

  /**
   * Threshold value in px. If "touch distance" will be lower than this value then swiper will not move
   *
   * @default 0
   */
  threshold?: number;

  /**
   * If disabled, `touchstart` (`pointerdown`) event won't be prevented
   *
   * @default true
   */
  touchStartPreventDefault?: boolean;

  /**
   * Force to always prevent default for `touchstart` (`pointerdown`) event
   *
   * @default false
   */
  touchStartForcePreventDefault?: boolean;

  /**
   * If enabled, then propagation of "touchmove" will be stopped
   *
   * @default false
   */
  touchMoveStopPropagation?: boolean;

  /**
   * Enable to release Swiper events for swipe-back work in app. If set to `'prevent'` then it will prevent system swipe-back navigation instead
   *
   * @default false
   */
  edgeSwipeDetection?: boolean | string;

  /**
   * Area (in px) from left edge of the screen to release touch events for swipe-back in app
   *
   * @default 20
   */
  edgeSwipeThreshold?: number;

  /**
   * Enable to release touch events on slider edge position (beginning, end) to allow for further page scrolling
   *
   * @default false
   */
  touchReleaseOnEdges?: boolean;

  /**
   * Passive event listeners will be used by default where possible to improve scrolling performance on mobile devices.
   * But if you need to use `e.preventDefault` and you have conflict with it, then you should disable this parameter
   *
   * @default true
   */
  passiveListeners?: boolean;

  // Touch Resistance

  /**
   * Set to `false` if you want to disable resistant bounds
   *
   * @default true
   */
  resistance?: boolean;

  /**
   * This option allows you to control resistance ratio
   *
   * @default 0.85
   */
  resistanceRatio?: number;

  // Swiping / No swiping
  /**
   * When enabled it won't allow to change slides by swiping or navigation/pagination buttons during transition
   *
   * @default false
   */
  preventInteractionOnTransition?: boolean;

  /**
   * Set to `false` to disable swiping to previous slide direction (to left or top)
   *
   * @default true
   */
  allowSlidePrev?: boolean;

  /**
   * Set to `false` to disable swiping to next slide direction (to right or bottom)
   *
   * @default true
   */
  allowSlideNext?: boolean;

  /**
   * Enable/disable swiping on elements matched to class specified in `noSwipingClass`
   *
   * @default true
   */
  noSwiping?: boolean;

  /**
   * Specify `noSwiping`'s element css class
   *
   * @default 'swiper-no-swiping'
   */
  noSwipingClass?: string;

  /**
   * Can be used instead of `noSwipingClass` to specify elements to disable swiping on.
   * For example `'input'` will disable swiping on all inputs
   *
   * @default
   */
  noSwipingSelector?: string;

  /**
   * String with CSS selector or HTML element of the container with pagination that will work as only available handler for swiping
   *
   * @default null
   */
  swipeHandler?: CSSSelector | HTMLElement | null;

  // Clicks
  /**
   * Set to `true` to prevent accidental unwanted clicks on links during swiping
   *
   * @default true
   */
  preventClicks?: boolean;

  /**
   * Set to `true` to stop clicks event propagation on links during swiping
   *
   * @default true
   */
  preventClicksPropagation?: boolean;

  /**
   * Set to `true` and click on any slide will produce transition to this slide
   *
   * @default false
   */
  slideToClickedSlide?: boolean;

  // Progress
  /**
   * Enable this feature to calculate each slides progress and visibility (slides in viewport will have additional visible class)
   *
   * @default false
   */
  watchSlidesProgress?: boolean;

  // Images
  /**
   * When enabled Swiper will force to load all images
   *
   * @default true
   */
  preloadImages?: boolean;

  /**
   * When enabled Swiper will be reinitialized after all inner images (<img> tags) are loaded. Required `preloadImages: true`
   *
   * @default true
   */
  updateOnImagesReady?: boolean;

  /**
   * Set to `true` to enable continuous loop mode
   *
   * Because of nature of how the loop mode works, it will add duplicated slides. Such duplicated slides will have additional classes:
   * - `swiper-slide-duplicate` - represents duplicated slide
   * - `swiper-slide-duplicate-active` - represents slide duplicated to the currently active slide
   * - `swiper-slide-duplicate-next` - represents slide duplicated to the slide next to active
   * - `swiper-slide-duplicate-prev` - represents slide duplicated to the slide previous to active
   *
   * @default false
   *
   * @note If you use it along with `slidesPerView: 'auto'` then you need to specify `loopedSlides` parameter with amount of slides to loop (duplicate). Should not be used together with `rewind` mode
   */
  loop?: boolean;

  /**
   * Set to `true` to enable "rewind" mode. When enabled, clicking "next" navigation button (or calling `.slideNext()`) when on last slide will slide back to the first slide. Clicking "prev" navigation button (or calling `.slidePrev()`) when on first slide will slide forward to the last slide.
   *
   * @default false
   *
   * @note Should not be used together with `loop` mode
   */
  rewind?: boolean;

  /**
   * Addition number of slides that will be cloned after creating of loop
   *
   * @default 0
   */
  loopAdditionalSlides?: number;

  /**
   * If you use `slidesPerView:'auto'` with loop mode you should tell to Swiper how many slides it should loop (duplicate) using this parameter
   *
   * @default null
   */
  loopedSlides?: number | null;

  /**
   * When enabled then amount of duplicated slides will not exceed amount of original slides. Useful to disable and increase `loopedSlides` when you have a lot of slides per view and not sufficient amount of original slides
   *
   * @default true
   */
  loopedSlidesLimit?: boolean;

  /**
   * Enable and loop mode will fill groups with insufficient number of slides with blank slides. Good to be used with `slidesPerGroup` parameter
   *
   * @default false
   */
  loopFillGroupWithBlank?: boolean;
  /**
   * When enabled it prevents Swiper slide prev/next transitions when transitions is already in progress (has effect when `loop` enabled)
   *
   * @default true
   */
  loopPreventsSlide?: boolean;

  /**
   * Allows to set different parameter for different responsive breakpoints (screen sizes). Not all parameters can be changed in breakpoints, only those which do not require different layout and logic, like `slidesPerView`, `slidesPerGroup`, `spaceBetween`, `grid.rows`. Such parameters like `loop` and `effect` won't work
   *
   * @example
   * ```js
   * const swiper = new Swiper('.swiper', {
   *   // Default parameters
   *   slidesPerView: 1,
   *   spaceBetween: 10,
   *   // Responsive breakpoints
   *   breakpoints: {
   *     // when window width is >= 320px
   *     320: {
   *       slidesPerView: 2,
   *       spaceBetween: 20
   *     },
   *     // when window width is >= 480px
   *     480: {
   *       slidesPerView: 3,
   *       spaceBetween: 30
   *     },
   *     // when window width is >= 640px
   *     640: {
   *       slidesPerView: 4,
   *       spaceBetween: 40
   *     }
   *   }
   * })
   * ```
   *
   * @example
   * ```js
   * const swiper = new Swiper('.swiper', {
   *   slidesPerView: 1,
   *   spaceBetween: 10,
   *   // using "ratio" endpoints
   *   breakpoints: {
   *     '@0.75': {
   *       slidesPerView: 2,
   *       spaceBetween: 20,
   *     },
   *     '@1.00': {
   *       slidesPerView: 3,
   *       spaceBetween: 40,
   *     },
   *     '@1.50': {
   *       slidesPerView: 4,
   *       spaceBetween: 50,
   *     },
   *   }
   * });
   * ```
   */
  breakpoints?: {
    [width: number]: SwiperOptions;
    [ratio: string]: SwiperOptions;
  };

  /**
   * Base for breakpoints (beta). Can be `window` or `container`. If set to `window` (by default) then breakpoint keys mean window width. If set to `container` then breakpoint keys treated as swiper container width
   *
   * @default 'window'
   *
   * @note Currently in beta and not supported by Swiper Angular, React, Svelte and Vue components
   */
  breakpointsBase?: string;

  // Observer
  /**
   * Set to `true` to enable Mutation Observer on Swiper and its elements. In this case Swiper will be updated (reinitialized) each time if you change its style (like hide/show) or modify its child elements (like adding/removing slides)
   *
   * @default false
   */
  observer?: boolean;
  /**
   * Set to `true` if you also need to watch Mutations for Swiper slide children elements
   *
   * @default false
   */
  observeSlideChildren?: boolean;
  /**
   * Set to `true` if you also need to watch Mutations for Swiper parent elements
   *
   * @default false
   */
  observeParents?: boolean;

  // Namespace
  /**
   * The beginning of the modifier CSS class that can be added to swiper container depending on different parameters
   *
   * @default 'swiper-'
   */
  containerModifierClass?: string;

  /**
   * CSS class name of slide
   *
   * @default 'swiper-slide'
   *
   * @note By changing classes you will also need to change Swiper's CSS to reflect changed classes
   *
   * @note Not supported in Swiper Angular/React/Svelte/Vue components
   */
  slideClass?: string;

  /**
   * CSS class name of currently active slide
   *
   * @default 'swiper-slide-active'
   *
   * @note By changing classes you will also need to change Swiper's CSS to reflect changed classes
   *
   * @note Not supported in Swiper Angular/React/Svelte/Vue components
   */
  slideActiveClass?: string;

  /**
   * CSS class name of duplicated slide which represents the currently active slide
   *
   * @default 'swiper-slide-duplicate-active'
   *
   * @note By changing classes you will also need to change Swiper's CSS to reflect changed classes
   *
   * @note Not supported in Swiper Angular/React/Svelte/Vue components
   */
  slideDuplicateActiveClass?: string;

  /**
   * CSS class name of currently visible slide
   *
   * @default 'swiper-slide-visible'
   *
   * @note By changing classes you will also need to change Swiper's CSS to reflect changed classes
   *
   * @note Not supported in Swiper Angular/React/Svelte/Vue
   */
  slideVisibleClass?: string;

  /**
   * CSS class name of slide duplicated by loop mode
   *
   * @default 'swiper-slide-duplicate'
   *
   * @note By changing classes you will also need to change Swiper's CSS to reflect changed classes
   *
   * @note Not supported in Swiper Angular/React/Svelte/Vue
   */
  slideDuplicateClass?: string;

  /**
   * CSS class name of slide which is right after currently active slide
   *
   * @default 'swiper-slide-next'
   *
   * @note By changing classes you will also need to change Swiper's CSS to reflect changed classes
   *
   * @note Not supported in Swiper Angular/React/Svelte/Vue
   */
  slideNextClass?: string;

  /**
   * CSS class name of duplicated slide which represents the slide next to active slide
   *
   * @default 'swiper-slide-duplicate-next'
   *
   * @note By changing classes you will also need to change Swiper's CSS to reflect changed classes
   *
   * @note Not supported in Swiper Angular/React/Svelte/Vue
   */
  slideDuplicateNextClass?: string;

  /**
   * CSS class name of slide which is right before currently active slide
   *
   * @default 'swiper-slide-prev'
   *
   * @note By changing classes you will also need to change Swiper's CSS to reflect changed classes
   *
   * @note Not supported in Swiper Angular/React/Svelte/Vue
   */
  slidePrevClass?: string;

  /**
   * CSS class name of duplicated slide which represents the slide previous to active slide
   *
   * @default 'swiper-slide-duplicate-prev'
   *
   * @note By changing classes you will also need to change Swiper's CSS to reflect changed classes
   *
   * @note Not supported in Swiper Angular/React/Svelte/Vue
   */
  slideDuplicatePrevClass?: string;

  /**
   * CSS class name of blank slide append to fill groups in loop mode when `loopFillGroupWithBlank` is also enabled
   *
   * @default 'swiper-slide-invisible-blank'
   *
   * @note By changing classes you will also need to change Swiper's CSS to reflect changed classes
   *
   * @note Not supported in Swiper Angular/React/Svelte/Vue
   */
  slideBlankClass?: string;

  /**
   * CSS class name of slides' wrapper
   *
   * @default 'swiper-wrapper'
   *
   * @note By changing classes you will also need to change Swiper's CSS to reflect changed classes
   *
   * @note Not supported in Swiper Angular/React/Svelte/Vue
   *
   */
  wrapperClass?: string;

  /**
   * Object with a11y parameters or boolean `true` to enable with default settings.
   *
   * @example
   * ```js
   * const swiper = new Swiper('.swiper', {
   *   a11y: {
   *     prevSlideMessage: 'Previous slide',
   *     nextSlideMessage: 'Next slide',
   *   },
   * });
   * ```
   */
  a11y?: A11yOptions;

  /**
   * Object with autoplay parameters or boolean `true` to enable with default settings
   *
   * @example
   * ```js
   * const swiper = new Swiper('.swiper', {
   *  autoplay: {
   *    delay: 5000,
   *  },
   *});
   * ```
   */
  autoplay?: AutoplayOptions | boolean;

  /**
   * Object with controller parameters or boolean `true` to enable with default settings
   *
   * @example
   * ```js
   * const swiper = new Swiper('.swiper', {
   *   controller: {
   *     inverse: true,
   *   },
   * });
   * ```
   */
  controller?: ControllerOptions;

  /**
   * Object with Coverflow-effect parameters.
   *
   * @example
   * ```js
   * const swiper = new Swiper('.swiper', {
   *   effect: 'coverflow',
   *   coverflowEffect: {
   *     rotate: 30,
   *     slideShadows: false,
   *   },
   * });
   * ```
   */
  coverflowEffect?: CoverflowEffectOptions;

  /**
   * Object with Cube-effect parameters
   *
   * @example
   * ```js
   * const swiper = new Swiper('.swiper', {
   *   effect: 'cube',
   *   cubeEffect: {
   *     slideShadows: false,
   *   },
   * });
   * ```
   */
  cubeEffect?: CubeEffectOptions;

  /**
   * Object with Fade-effect parameters
   *
   * @example
   * ```js
   * const swiper = new Swiper('.swiper', {
   *   effect: 'fade',
   *   fadeEffect: {
   *     crossFade: true
   *   },
   * });
   * ```
   */
  fadeEffect?: FadeEffectOptions;

  /**
   * Object with Flip-effect parameters
   *
   * @example
   * ```js
   * const swiper = new Swiper('.swiper', {
   *   effect: 'flip',
   *   flipEffect: {
   *     slideShadows: false,
   *   },
   * });
   * ```
   */
  flipEffect?: FlipEffectOptions;

  /**
   * Object with Creative-effect parameters
   *
   * @example
   * ```js
   * const swiper = new Swiper('.swiper', {
   *   effect: 'creative',
   *   creativeEffect: {
   *     prev: {
   *       // will set `translateZ(-400px)` on previous slides
   *       translate: [0, 0, -400],
   *     },
   *     next: {
   *       // will set `translateX(100%)` on next slides
   *       translate: ['100%', 0, 0],
   *     },
   *   },
   * });
   * ```
   */
  creativeEffect?: CreativeEffectOptions;

  /**
   * Object with Cards-effect parameters
   *
   * @example
   * ```js
   * const swiper = new Swiper('.swiper', {
   *   effect: 'cards',
   *   cardsEffect: {
   *     // ...
   *   },
   * });
   * ```
   */
  cardsEffect?: CardsEffectOptions;

  /**
   * Enables hash url navigation to for slides.
   * Object with hash navigation parameters or boolean `true` to enable with default settings
   *
   * @example
   * ```js
   * const swiper = new Swiper('.swiper', {
   *   hashNavigation: {
   *     replaceState: true,
   *   },
   * });
   * ```
   */
  hashNavigation?: HashNavigationOptions | boolean;

  /**
   * Enables history push state where every slide will have its own url. In this parameter you have to specify main slides url like `"slides"` and specify every slide url using `data-history` attribute.
   *
   * Object with history navigation parameters or boolean `true` to enable with default settings
   *
   * @example
   * ```js
   * const swiper = new Swiper('.swiper', {
   *   history: {
   *     replaceState: true,
   *   },
   * });
   * ```
   *
   * @example
   * ```html
   * <!-- will produce "slides/slide1" url in browser history -->
   * <div class="swiper-slide" data-history="slide1"></div>
   * ```
   */
  history?: HistoryOptions | boolean;

  /**
   * Enables navigation through slides using keyboard. Object with keyboard parameters or boolean `true` to enable with default settings
   *
   * @example
   * ```js
   * const swiper = new Swiper('.swiper', {
   *   keyboard: {
   *     enabled: true,
   *     onlyInViewport: false,
   *   },
   * });
   * ```
   */
  keyboard?: KeyboardOptions | boolean;

  /**
   * Enables images lazy loading. Object with lazy loading parameters or boolean `true` to enable with default settings
   *
   * @example
   * ```js
   * const swiper = new Swiper('.swiper', {
   *   lazy: {
   *     loadPrevNext: true,
   *   },
   * });
   * ```
   */
  lazy?: LazyOptions | boolean;

  /**
   * Enables navigation through slides using mouse wheel. Object with mousewheel parameters or boolean `true` to enable with default settings
   *
   * @example
   * ```js
   * const swiper = new Swiper('.swiper', {
   *   mousewheel: {
   *     invert: true,
   *   },
   * });
   * ```
   */
  mousewheel?: MousewheelOptions | boolean;

  /**
   * Object with navigation parameters or boolean `true` to enable with default settings.
   *
   * @example
   * ```js
   * const swiper = new Swiper('.swiper', {
   *   navigation: {
   *     nextEl: '.swiper-button-next',
   *     prevEl: '.swiper-button-prev',
   *   },
   * });
   * ```
   */
  navigation?: NavigationOptions | boolean;

  /**
   * Object with pagination parameters or boolean `true` to enable with default settings.
   *
   * @example
   * ```js
   * const swiper = new Swiper('.swiper', {
   *   pagination: {
   *     el: '.swiper-pagination',
   *     type: 'bullets',
   *   },
   * });
   * ```
   */
  pagination?: PaginationOptions | boolean;

  /**
   * Object with parallax parameters or boolean `true` to enable with default settings.
   *
   * @example
   * ```js
   * const swiper = new Swiper('.swiper', {
   *   parallax: true,
   * });
   * ```
   */
  parallax?: ParallaxOptions | boolean;

  /**
   * Object with scrollbar parameters or boolean `true` to enable with default settings.
   *
   * @example
   * ```js
   * const swiper = new Swiper('.swiper', {
   *   scrollbar: {
   *     el: '.swiper-scrollbar',
   *     draggable: true,
   *   },
   * });
   * ```
   */
  scrollbar?: ScrollbarOptions | boolean;

  /**
   * Object with thumbs component parameters
   *
   * @example
   * ```js
   * const swiper = new Swiper('.swiper', {
   *   ...
   *   thumbs: {
   *     swiper: thumbsSwiper
   *   }
   * });
   * ```
   */
  thumbs?: ThumbsOptions;

  /**
   * Enables virtual slides functionality. Object with virtual slides parameters or boolean `true` to enable with default settings.
   *
   * @example
   * ```js
   * const swiper = new Swiper('.swiper', {
   *   virtual: {
   *     slides: ['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4', 'Slide 5'],
   *   },
   * });
   * ```
   */
  virtual?: VirtualOptions | boolean;

  /**
   * Enables zooming functionality. Object with zoom parameters or boolean `true` to enable with default settings
   *
   * @example
   * ```js
   * const swiper = new Swiper('.swiper', {
   *   zoom: {
   *     maxRatio: 5,
   *   },
   * });
   * ```
   */
  zoom?: ZoomOptions | boolean;

  /**
   * Enables free mode functionality. Object with free mode parameters or boolean `true` to enable with default settings.
   *
   * @example
   * ```js
   * const swiper = new Swiper('.swiper', {
   *   freeMode: true,
   * });
   *
   * const swiper = new Swiper('.swiper', {
   *   freeMode: {
   *     enabled: true,
   *     sticky: true,
   *   },
   * });
   * ```
   */
  freeMode?: FreeModeOptions | boolean;

  /**
   * Object with grid parameters to enable "multirow" slider.
   *
   * @example
   * ```js
   * const swiper = new Swiper('.swiper', {
   *   grid: {
   *     rows: 2,
   *   },
   * });
   * ```
   */
  grid?: GridOptions;

  /**
   * !INTERNAL When enabled will emit "_containerClasses" and "_slideClass" events
   */
  _emitClasses?: boolean;
}

interface ManipulationMethods {
  /**
   * Add new slides to the end. slides could be
   * HTMLElement or HTML string with new slide or
   * array with such slides, for example:
   *
   * @example
   * ```js
   * appendSlide('<div class="swiper-slide">Slide 10"</div>')
   *
   * appendSlide([
   *  '<div class="swiper-slide">Slide 10"</div>',
   *  '<div class="swiper-slide">Slide 11"</div>'
   * ]);
   * ```
   */
  appendSlide(slides: HTMLElement | string | string[] | HTMLElement[]): void;

  /**
   * Add new slides to the beginning. slides could be
   * HTMLElement or HTML string with new slide or array with such slides, for example:
   *
   * @example
   * ```js
   * prependSlide('<div class="swiper-slide">Slide 0"</div>')
   *
   * prependSlide([
   *  '<div class="swiper-slide">Slide 1"</div>',
   *  '<div class="swiper-slide">Slide 2"</div>'
   * ]);
   * ```
   */
  prependSlide(slides: HTMLElement | string | string[] | HTMLElement[]): void;

  /**
   * Add new slides to the required index. slides could be HTMLElement or HTML string with new slide or array with such slides, for example:
   *
   * @example
   * ```js
   * addSlide(1, '<div class="swiper-slide">Slide 10"</div>')
   *
   * addSlide(1, [
   *  '<div class="swiper-slide">Slide 10"</div>',
   *  '<div class="swiper-slide">Slide 11"</div>'
   * ]);
   * ```
   */
  addSlide(index: number, slides: HTMLElement | string | string[] | HTMLElement[]): void;

  /**
   * Remove selected slides. slideIndex could be a number with slide index to remove or array with indexes.
   *
   * @example
   * ```js
   * removeSlide(0); // remove first slide
   * removeSlide([0, 1]); // remove first and second slides
   * removeAllSlides();    // Remove all slides
   * ```
   */
  removeSlide(slideIndex: number | number[]): void;

  /**
   * Remove all slides
   */
  removeAllSlides(): void;
}

interface SwiperClass<Events> {
  /** Add event handler */
  on<E extends keyof Events>(event: E, handler: Events[E]): void;
  /** Add event handler that will be removed after it was fired */
  once<E extends keyof Events>(event: E, handler: Events[E]): void;
  /** Remove event handler */
  off<E extends keyof Events>(event: E, handler: Events[E]): void;
  /** Remove all handlers for specified event */
  off<E extends keyof Events>(event: E): void;
  /** Fire event on instance */
  emit<E extends keyof Events>(event: E, ...args: any[]): void;
}

interface Swiper extends SwiperClass<SwiperEvents> {
  /**
   * Object with passed initialization parameters
   */
  params: SwiperOptions;

  /**
   * Object with original initialization parameters
   */
  originalParams: SwiperOptions;

  /**
   * Dom7 element with slider container HTML element. To get vanilla HTMLElement use `swiper.el`
   */
  $el: Dom7Array;

  /**
   * Slider container HTML element
   */
  el: HTMLElement;

  /**
   * Dom7 element with slider wrapper HTML element. To get vanilla HTMLElement use `swiper.wrapperEl`
   */
  $wrapperEl: Dom7Array;

  /**
   * Wrapper HTML element
   */
  wrapperEl: HTMLElement;

  /**
   * Dom7 array-like collection of slides HTML elements. To get specific slide HTMLElement use `swiper.slides[1]`
   */
  slides: Dom7Array;

  /**
   * !INTERNAL
   */
  loopedSlides: number | null;

  /**
   * Width of container
   */
  width: number;

  /**
   * Height of container
   */
  height: number;

  /**
   * Current value of wrapper translate
   */
  translate: number;

  /**
   * Current progress of wrapper translate (from 0 to 1)
   */
  progress: number;

  /**
   * Index number of currently active slide
   *
   * @note Note, that in loop mode active index value will be always shifted on a number of looped/duplicated slides
   */
  activeIndex: number;

  /**
   * Index number of currently active slide considering duplicated slides in loop mode
   */
  realIndex: number;

  /**
   * Index number of previously active slide
   */
  previousIndex: number;

  /**
   * Index number of current snap in `snapGrid`
   */
  snapIndex: number;

  /**
   * Slides snap grid
   */
  snapGrid: number[];

  /**
   * `true` if slider on most "left"/"top" position
   */
  isBeginning: boolean;

  /**
   * `true` if slider on most "right"/"bottom" position
   */
  isEnd: boolean;

  /**
   * `true` if slide is "locked" (by `watchOverflow`) and slides can not be, e.g. when amount of slides is less that slides per view
   */
  isLocked: boolean;

  /**
   * `true` if swiper is in transition
   */
  animating: boolean;

  /**
   * Object with the following touch event properties:
   *
   * - `swiper.touches.startX`
   * - `swiper.touches.startY`
   * - `swiper.touches.currentX`
   * - `swiper.touches.currentY`
   * - `swiper.touches.diff`
   */
  touches: {
    startX: number;
    startY: number;
    currentX: number;
    currentY: number;
    diff: number;
  };

  /**
   * Index number of last clicked slide
   */
  clickedIndex: number;

  /**
   * Link to last clicked slide (HTMLElement)
   */
  clickedSlide: HTMLElement;

  /**
   * Disable / enable ability to slide to the next slides by assigning `false` / `true` to this property
   */
  allowSlideNext: boolean;

  /**
   * Disable / enable ability to slide to the previous slides by assigning `false` / `true` to this property
   */
  allowSlidePrev: boolean;

  /**
   * Disable / enable ability move slider by grabbing it with mouse or by touching it with finger (on touch screens) by assigning `false` / `true` to this property
   */
  allowTouchMove: boolean;

  /**
   * Direction of sliding
   */
  swipeDirection: 'prev' | 'next';

  /**
   * !INTERNAL
   */
  rtlTranslate: boolean;

  /**
   * Disable Swiper (if it was enabled). When Swiper is disabled, it will hide all navigation elements and won't respond to any events and interactions
   *
   */
  disable(): void;

  /**
   * Enable Swiper (if it was disabled)
   *
   */
  enable(): void;

  /**
   * Set Swiper translate progress (from 0 to 1). Where 0 - its initial position (offset) on first slide, and 1 - its maximum position (offset) on last slide
   *
   * @param progress Swiper translate progress (from 0 to 1).
   * @param speed Transition duration (in ms).
   */
  setProgress(progress: number, speed?: number): void;

  /**
   * Run transition to next slide.
   *
   * @param speed Transition duration (in ms).
   * @param runCallbacks Set it to false (by default it is true) and transition will
   *  not produce transition events.
   */
  slideNext(speed?: number, runCallbacks?: boolean): void;

  /**
   * Run transition to previous slide.
   *
   * @param speed Transition duration (in ms).
   * @param runCallbacks Set it to false (by default it is true) and transition will
   *  not produce transition events.
   */
  slidePrev(speed?: number, runCallbacks?: boolean): void;

  /**
   * Run transition to the slide with index number equal to 'index' parameter for the
   *  duration equal to 'speed' parameter.
   *
   * @param index Index number of slide.
   * @param speed Transition duration (in ms).
   * @param runCallbacks Set it to false (by default it is true) and transition will
   *  not produce transition events.
   */
  slideTo(index: number, speed?: number, runCallbacks?: boolean): void;

  /**
   * Does the same as .slideTo but for the case when used with enabled loop. So this
   * method will slide to slides with realIndex matching to passed index
   *
   * @param index Index number of slide.
   * @param speed Transition duration (in ms).
   * @param runCallbacks Set it to false (by default it is true) and transition will
   *  not produce transition events.
   */
  slideToLoop(index: number, speed?: number, runCallbacks?: boolean): void;

  /**
   * Reset swiper position to currently active slide for the duration equal to 'speed'
   * parameter.
   *
   * @param speed Transition duration (in ms).
   * @param runCallbacks Set it to false (by default it is true) and transition will
   *  not produce transition events.
   */
  slideReset(speed?: number, runCallbacks?: boolean): void;

  /**
   * Reset swiper position to closest slide/snap point for the duration equal to 'speed' parameter.
   *
   * @param speed Transition duration (in ms).
   * @param runCallbacks Set it to false (by default it is true) and transition will
   *  not produce transition events.
   */
  slideToClosest(speed?: number, runCallbacks?: boolean): void;

  /**
   * Force swiper to update its height (when autoHeight enabled) for the duration equal to
   * 'speed' parameter
   *
   * @param speed Transition duration (in ms).
   */
  updateAutoHeight(speed?: number): void;

  /**
   * You should call it after you add/remove slides
   * manually, or after you hide/show it, or do any
   * custom DOM modifications with Swiper
   * This method also includes subcall of the following
   * methods which you can use separately:
   */
  update(): void;

  /**
   * recalculate size of swiper container
   */
  updateSize(): void;

  /**
   * recalculate number of slides and their offsets. Useful after you add/remove slides with JavaScript
   */
  updateSlides(): void;

  /**
   * recalculate swiper progress
   */
  updateProgress(): void;

  /**
   * update active/prev/next classes on slides and bullets
   */
  updateSlidesClasses(): void;

  /**
   * Changes slider direction from horizontal to vertical and back.
   *
   * @param direction New direction. If not specified, then will automatically changed to opposite direction
   * @param needUpdate Will call swiper.update(). Default true
   */
  changeDirection(direction?: 'horizontal' | 'vertical', needUpdate?: boolean): void;

  /**
   * Changes slider language
   *
   * @param direction New direction. Should be `rtl` or `ltr`
   */
  changeLanguageDirection(direction: 'rtl' | 'ltr'): void;

  /**
   * Detach all events listeners
   */
  detachEvents(): void;

  /**
   * Attach all events listeners again
   */
  attachEvents(): void;

  /**
   * !INTERNAL
   */
  loopCreate(): void;

  /**
   * !INTERNAL
   */
  loopDestroy(): void;

  /**
   * Initialize slider
   */
  init(el?: HTMLElement): Swiper;

  /**
   * Destroy slider instance and detach all events listeners
   *
   * @param deleteInstance Set it to false (by default it is true) to not to delete Swiper instance
   * @param cleanStyles Set it to true (by default it is true) and all custom styles will be removed from slides, wrapper and container.
   * Useful if you need to destroy Swiper and to init again with new options or in different direction
   */
  destroy(deleteInstance?: boolean, cleanStyles?: boolean): void;

  /**
   * Set custom css3 transform's translate value for swiper wrapper
   */
  setTranslate(translate: any): void;

  /**
   * Get current value of swiper wrapper css3 transform translate
   */
  getTranslate(): any;

  /**
   * Animate custom css3 transform's translate value for swiper wrapper
   *
   * @param translate Translate value (in px)
   * @param speed Transition duration (in ms)
   * @param runCallbacks Set it to false (by default it is true) and transition will not produce  transition events
   * @param translateBounds Set it to false (by default it is true) and transition value can extend beyond min and max translate
   *
   */
  translateTo(
    translate: number,
    speed: number,
    runCallbacks?: boolean,
    translateBounds?: boolean,
  ): any;

  /**
   * Unset grab cursor
   */
  unsetGrabCursor(): void;

  /**
   * Set grab cursor
   */
  setGrabCursor(): void;

  /**
   * Add event listener that will be fired on all events
   */
  onAny(handler: (eventName: string, ...args: any[]) => void): void;

  /**
   * Remove event listener that will be fired on all events
   */
  offAny(handler: (eventName: string, ...args: any[]) => void): void;

  /**
   * !INTERNAL
   */
  isHorizontal(): boolean;

  /**
   * !INTERNAL
   */
  getBreakpoint(breakpoints: SwiperOptions['breakpoints']): string;

  /**
   * !INTERNAL
   */
  setBreakpoint(): void;

  /**
   * !INTERNAL
   */
  currentBreakpoint: any;

  /**
   * !INTERNAL
   */
  destroyed: boolean;

  /**
   * !INTERNAL
   */
  modules: Array<SwiperModule>;

  a11y: A11yMethods;
  autoplay: AutoplayMethods;
  controller: ControllerMethods;
  coverflowEffect: CoverflowEffectMethods;
  cubeEffect: CubeEffectMethods;
  fadeEffect: FadeEffectMethods;
  flipEffect: FlipEffectMethods;
  creativeEffect: CreativeEffectMethods;
  cardsEffect: CardsEffectMethods;
  hashNavigation: HashNavigationMethods;
  history: HistoryMethods;
  keyboard: KeyboardMethods;
  lazy: LazyMethods;
  mousewheel: MousewheelMethods;
  navigation: NavigationMethods;
  pagination: PaginationMethods;
  parallax: ParallaxMethods;
  scrollbar: ScrollbarMethods;
  thumbs: ThumbsMethods;
  virtual: VirtualMethods;
  zoom: ZoomMethods;
  freeMode: FreeModeMethods;
}

interface Swiper extends ManipulationMethods {}

declare class Swiper implements Swiper {
  /**
   * Constructs a new Swiper instance.
   *
   * @param container Where Swiper applies to.
   * @param options   Instance options.
   */
  constructor(container: CSSSelector | HTMLElement, options?: SwiperOptions);
  /**
   * Installs modules on Swiper in runtime.
   */
  static use(modules: SwiperModule[]): void;

  /**
   * Swiper default options
   */
  static defaults: SwiperOptions;

  /**
   * Extend global Swiper defaults
   */
  static extendDefaults(options: SwiperOptions): void;

  /**
   * Object with global Swiper extended options
   */
  static extendedDefaults: SwiperOptions;
}

declare const A11y: SwiperModule;
declare const Autoplay: SwiperModule;
declare const Controller: SwiperModule;
declare const EffectCoverflow: SwiperModule;
declare const EffectCube: SwiperModule;
declare const EffectFade: SwiperModule;
declare const EffectFlip: SwiperModule;
declare const EffectCreative: SwiperModule;
declare const EffectCards: SwiperModule;
declare const HashNavigation: SwiperModule;
declare const History: SwiperModule;
declare const Keyboard: SwiperModule;
declare const Lazy: SwiperModule;
declare const Mousewheel: SwiperModule;
declare const Navigation: SwiperModule;
declare const Pagination: SwiperModule;
declare const Parallax: SwiperModule;
declare const Scrollbar: SwiperModule;
declare const Thumbs: SwiperModule;
declare const Virtual: SwiperModule;
declare const Zoom: SwiperModule;
declare const FreeMode: SwiperModule;
declare const Grid: SwiperModule;
declare const Manipulation: SwiperModule;

export { A11y, Autoplay, Controller, EffectCards, EffectCoverflow, EffectCreative, EffectCube, EffectFade, EffectFlip, FreeMode, Grid, HashNavigation, History, Keyboard, Lazy, Manipulation, Mousewheel, Navigation, Pagination, Parallax, Scrollbar, Swiper, SwiperOptions, Thumbs, Virtual, Zoom, Swiper as default };
