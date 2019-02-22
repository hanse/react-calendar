## v3.0.0
* Stop mutating `date` in createDateObjects method (thanks @florentdestremau)
* Babel 6 -> 7. React 15.x is now minimum.

## v2.0.0
* Add `contentClassName` and `containerClassName` props.

**Breaking changes**
* Make it more flexible by removing the wrapping div in `renderDay`. You are now in full control of the rendering. The default implementation is:
```js
<Calendar
  renderDay={({ day, classNames, onPickDate }) => (
    <div
      key={day.format()}
      className={cx(
        'Calendar-grid-item',
        day.isSame(moment(), 'day') && 'Calendar-grid-item--current',
        classNames
      )}
      onClick={e => onPickDate(day)}
    >
      {day.format('D')}
    </div>
  )}
/>
```

## v1.3.0
* Add `renderHeader` to allow using a different header component.

## v1.2.1
* Remove lodash dependency

## v1.2.0
* Add `onChangeMonth` as a replacement for `onPrevMonth` and `onNextMonth`.

## v1.1.1
* Switch to the [prop-types](https://github.com/reactjs/prop-types) package.

## v1.1.0
* Upgrade to Babel 6 and allow React 15

## v1.0.0
* Use Babel and ES6
* Move state out of the component


## v0.2.0
* Added week day headers (optional)
* Added onPickDate callback

## v0.1.0
* `require('react-calendar-component')` returns an object with all the elements instead of just `<Calendar/>`.
