###### JJ_CAMP_Advanced

[＜ INDEX](../../README.md)

## DAY 07
- Event Capture vs Bubble
- stopImmediatePropagation()

## Event 
`Legacy DOM (DOM Lv0)` <br>
: 이벤트 속성에 `하나의 이벤트 핸들러`만 연결이 가능하다!<br>

`DOM Lv2, W3C Standard Event Model (2000)` <br>
: 이벤트 타입에 `다수의 이벤트 핸들러` 연결이 가능하다!

### Event Capture vs Bubble
`.addEventListener(‘type’, handler, false)`
- `type` 이벤트 타입 
- `handler` function
-  capturing(`true`), bubbling(`false`)

```javascript
    var using_capture = true; // 캡쳐링: true | 버블링: !true
    var confirmEventPropagation = function(event) {
        console.log('this:', this);
        console.log('event.target:', event.target);
        console.log('event.currentTarget:', event.currentTarget);
        console.log('%c----------------------------------------', 'color: #3d9a21');
    };

    [].forEach.call(all_divs, function(div, idx) {
        // console.log('div:', div);
        div.addEventListener('click', confirmEventPropagation, using_capture);
    });
```

### `stopImmediatePropagation()`
: 즉각 전파 중지! 동일한 이벤트 타겟에 걸린 다른 함수도 중지!

```javascript
    var using_capture = !true; // 캡쳐링 사용. | 버블링: !true
    var confirmEventPropagation = function(event) {
        console.log('this:', this);
        console.log('event.target:', event.target);
        console.log('event.currentTarget:', event.currentTarget);
        console.log('%c----------------------------------------', 'color: #3d9a21');

        var class_name = event.target.getAttribute('class');
        if ( class_name === 'grand-child' ) {
            // 버블링: 부모까지 전파되는 이벤트를 차단
            event.stopPropagation();
            // 즉각 전파 중지
            event.stopImmediatePropagation();
        }
    };

    var anotherEventAction = function() {
      console.log('anotherEventAction');  
    };
    
    [].forEach.call(all_divs, function(div, idx) {
        // console.log('div:', div);
        div.addEventListener('click', confirmEventPropagation, using_capture);
    });
```
