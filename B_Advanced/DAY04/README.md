###### JJ_CAMP_Advanced

[＜ INDEX](../../README.md)

## DAY 04
## DOM Helper Functions

### isDataType() 
- Javascript의 모든 데이터 유형을 올바르게 감지할 수 있는 헬퍼 함수

```javascript
function isDataType(data) {
  return Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
}
```

### detectFeature()
- 신기술을 체크하는 헬퍼함수

```javascript
function detectFeature(property) {
    validate( !isString(property), '첫번째 인자는 문자 유형이어야 합니디.');
    return property in detectFeature.style;
}
// 메모이제이션 패턴
detectFeature.style = createEl('div').style;
```

### detectFeatures()
#### 함수 선언식 + 메모이제이션

```javascript
function detectFeatures(properties, element) {
  detectFeatures.element = (element && isElement(element)) || detectFeatures.root_element;
  validate( !isArray(properties), 'properties는 배열 유형이어야 합니다.' );
  for( var property, i=properties.length; (property = properties[--i]); ) {
    detectFeatures.property = property;
    isValidate( detectFeature(property), detectFeatures.success, detectFeatures.fail );
  }
}
detectFeatures.element = null;
detectFeatures.property = null;
detectFeatures.root_element = document.documentElement;
detectFeatures.success = function(){
  detectFeatures.element.classList.add(detectFeatures.property);
};
detectFeatures.fail = function(){
  detectFeatures.element.classList.add('no-' + detectFeatures.property);
};
```
> 메모이제이션(Memoization) 패턴 : 
    함수에 속성을 추가하여 결과(반환 값)를 캐시(Cache)해두면 다음 호출 시점에 복잡한 연산을 반복하지 않아 효율적으로 활용할 수 있다. 
    이런 활용 법을 `메모이제이션 패턴`이라고 한다.

#### 함수 표현식 + 클로저

```javascript
var detectFeatures = (function(){
	// 외부와 단절된 독립된 공간이 형성
	// 지역(Local Scope)
	var el           = null;
	var property     = null;
	var root_element = document.documentElement; 
	function success(){ el.classList.add(property); }
	function fail(){ el.classList.add('no-' + property); }

	// 클로저 함수
	function _detectFetures(properties, element) {
		el = ((element && isElement(element)) && element) || root_element;
		validate( !isArray(properties), 'properties는 배열 유형이어야 합니다.' );
		for( var i=properties.length; properties[--i]; ) {
			property = properties[i];
			isValidate( detectFeature(property), success, fail );
		}
	}
	// 클로저 함수 반환
	return _detectFetures;
}());
```

### classEls()
- `document.getElementsByClassName` IE9+ 이상만 사용하기 때문에 하위브라우저도 사용할 수 있는 헬퍼함수 

#### 함수 표현식 + 클로저 사용

```javascript
var classEls = (function() {
    var _classEls = null;

    if( document.getElementsByClassName  ) {
        _classEls = function(name, context) {
            validate( !isString(name), 'name 인자는 문자열이어야 합니다.' );
            return ( ((context && isElement(context)) && context) || document).getElementsByClassName(name);
        };
    } else {
        _classEls = function(name, context) { 
            validate( !isString(name), 'name 인자는 문자열이어야 합니다.' );
            var all_els = tag('*', ((context && isElement(context)) && context) || document.body);
            var all_els_length = all_els.length; // 6
            var el = null;
            var class_name = '';
            var filtered_els = [];
            // 정규 표현식 사용
            // ^ :    시작 값을 검증
            // $ :    끝나는 값을 검증
            // \s:   공백을 검증
            // + :    1개 이상
            // ※ new RegExp() 사용 시에는 문자열 내부의 `\s` 사용 시, Escape 처리를 해야 한다. ==> \\s
            var reg = new RegExp('(^|\\s)+' + name + '(\\s|$)+');
            while(all_els_length--) { // 6, 5, 4, 3, 2, 1, 0
                // 5, 4, 3, 2, 1, 0
                el = all_els[all_els_length];
                class_name = el.getAttribute('class');
                if( reg.test(class_name) ) {
                    filtered_els.push(el);
                }
            }
            return filtered_els;
        }
    }
}());
```





















