# Jest

## 安装

1. `npm install jest -D`
2. 添加 `jest.config.js` 的配置文件
3. 安装配置中相应插件的依赖

## 配置文件

配置文件示例：

```js
module.exports = {
  // 模块文件的扩展名
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
    'vue'
  ],
  // 转译文件使用的插件
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.jsx?$': 'babel-jest'
  },
  // 在 import 时可以使用的别名
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  // 快照插件
  snapshotSerializers: [
    'jest-serializer-vue'
  ],
  // 要测试的文件
  testMatch: [
    '**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)'
  ],
  // 测试之前引入的文件
  'setupFiles': [
    '<rootDir>/tests/unit/setup/index.js'
  ],
  // 测试覆盖率导出目录
  'coverageDirectory': '<rootDir>/tests/unit/coverage',
  // 是否开启测试覆盖率
  'collectCoverage': true,
  // 测试覆盖率计算包含的文件
  'collectCoverageFrom': [
    '<rootDir>/src/utils/*.{js|vue}',
    '!**/node_modules/**'
  ],
  // 测试覆盖率导出报告的类型
  'coverageReporters': [
    'html'
  ],
  testURL: 'http://localhost/'
}
```

## 全局方法

1. `test(name, fn, timeout)` 运行测试的方法函数，别名 `it`

```js
test('测试的描述', () => {
  // 测试代码...
})
```

2. `describe` 将几个测试分组关联在一起，作用就是将测试代码分组分类。

```js
let user = {
  name: '测试用户',
  id: 1
}

describe('测试 user', () => {

  test('user name', () => {
    expect(user.name).toBe('测试用户')
  })

  test('user id', () => {
    expect(user.id).toBe(1)
  })

})
```

3. `afterAll`, `afterEach`, `beforeAll`, `beforeEach` 的执行顺序

注意：以上四个函数全部在 describe 块的内部使用

```js
describe('测试 user', () => {

  beforeAll(() => console.log('beforeAll'))
  beforeEach(() => console.log('beforeEach'))
  afterAll(() => console.log('afterAll'))
  afterEach(() => console.log('afterEach'))

  test('user name', () => {
    console.log('test user name')
  })

  test('user id', () => {
    console.log('test user id')
  })

})
/*
=> beforeAll

=> beforeEach
=> test user name
=> afterEach

=> beforeEach
=> test user id
=> afterEach

=> afterAll
*/
```

## 添加自定义全局属性/方法

1. 在 `jest.config.js` 文件中添加以下配置

```js
module.exports = {
  'setupFiles': [
    '<rootDir>/tests/unit/setup/index.js'
  ]
}
```

2. 然后添加上面设置中的文件 `index.js`

```js
import jQuery from 'jquery'

global.jQuery = jQuery
global.wx = {
  //...
}
```

有的时候你需要测试的文件中可能引入了一些全局的属性，
这时候就需要手动添加全局的属性使测试可以通过。

## expect(value). 的使用

1. `.toBe()`: 它调用 `Object.is()` 比较值，这比通过 `===` 严格相等运算符更好。[关于Object.is()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/is)

```js
test('toBe', () => {
  let obj = {
    name: 'pamplemousse',
    ounces: 12
  }
  expect(obj.name).toBe('pamplemousse')
  expect(obj.ounces).toBe(12)
})
```

注意：不要使用浮点数。例如，由于四舍五入，在JavaScript 0.2 + 0.1 中并不严格等于 0.3。
如果有浮点数，请尝试改为 `.toBeCloseTo`。

2. `.toBeTruthy()` 不关心值，只确保值存在即可。

```js
test('toBeTruthy', () => {
  expect(1).toBeTruthy()
  expect('test').toBeTruthy()
})
```

在JavaScript中，有六个 falsy 值：false，0，''，null，undefined，和NaN。其他一切都是真实的。

3. `.toBeFalsy()` 只要值为以下六个 falsy 的值。

在JavaScript中，有六个 falsy 值：false，0，''，null，undefined，和NaN。其他一切都是真实的。

```js
test('toBeFalsy', () => {
  expect(false).toBeFalsy()
  expect(0).toBeFalsy()
  expect('').toBeFalsy()
  expect(null).toBeFalsy()
  expect(undefined).toBeFalsy()
  expect(NaN).toBeFalsy()
})
```

4. `.toEqual()` 递归地比较对象实例的所有属性（也称为“深度”相等）。

```js
const user1 = {
  name: 'user',
  id: 1
}

const user2 = {
  name: 'user',
  id: 1
}

test('toEqual', () => {
  expect(user1).toEqual(user2)
})
```

5. `.toMatch(regexpOrString)` 使用 .toMatch 检查字符串中的正则表达式匹配。

```js
test('toMatch', () => {
  let str = 'grapefruits'
  expect(str).toMatch(/fruits$/)
  expect(str).toMatch(new RegExp('fruits'))
  expect(str).toMatch('fruits')
})
```

6. `.toMatchObject(object)` 检查对象的子集相匹配，也可以根据匹配器匹配属性。

```js
const houseForSale = {
  bath: true,
  bedrooms: 4,
  kitchen: {
    amenities: ['oven', 'stove', 'washer'],
    area: 20,
    wallColor: 'white',
  },
}
const desiredHouse = {
  bath: true,
  kitchen: {
    amenities: ['oven', 'stove', 'washer'],
    wallColor: expect.stringMatching(/white|yellow/),
  },
}

test('toMatchObject', () => {
  expect(houseForSale).toMatchObject(desiredHouse)
})
```

7. `.toContain(item)` 检查的项目是在数组中，还可以检查字符串是否是另一个字符串的子字符串。

```js
test('toContain(item)', () => {
  expect(['1', '2', 3]).toContain('2')
  expect(['1', '2', 3]).toContain(3)
  expect('testcontain').toContain('contain')
})
```

## expect. 的使用（匹配器）

1. `expect.anything()` 匹配任何东西，除了 null 或 undefined。

```js
test('expect.anything()', () => {
  let user1 = expect.anything()
  let user2 = 'user'
  expect(user2).toEqual(user1)
})
```

2. `expect.any(constructor)` 匹配使用给定构造函数创建的任何内容。

```js
test('expect.any(constructor)', () => {
  let user1 = expect.any(String)
  let user2 = 'user'
  expect(user2).toEqual(user1)
})
```

3. `expect.arrayContaining(array)` 匹配一个包含所需数组中所有元素的接收数组。

```js
test('expect.arrayContaining(array)', () => {
  let testArray = [1, 2, 3]
  expect([1, 2, 3, 4, 5]).toEqual(expect.arrayContaining(testArray))
})
```

4. `expect.assertions(number)` 验证在测试期间调用了一定数量 (number) 的断言。

```js
test('expect.assertions(number)', () => {
  expect.assertions(2)
  expect(1).toBe(1)
  expect(2).toBe(2)
})
```

5. `expect.hasAssertions()` 验证在测试期间至少调用一个断言。

```js
test('expect.hasAssertions()', () => {
  expect.hasAssertions();

  (function () {
    expect(1).toBe(1)
  })()
})
```

6. `.not` 如果你知道如何测试某些东西，.not那就让你测试它的反面。

```js
test('.not', () => {
  expect(1).not.toBe(2)
})
```

## 测试异步代码

1. 使用 es7 中的 async 函数

```js
test('async success', async () => {
  let res = await Promise.resolve('success')
  expect(res).toBe('success')
})

test('async fail', async () => {
  try {
    let res = await Promise.reject('fail')
  } catch (err) {
    expect(err).toBe('fail')
  }
})
```

2. 使用 `.resolves` 和 `.rejects`

```js
test('.resolves .rejects', async () => {
  await expect(Promise.resolve('success')).resolves.toBe('success')
  await expect(Promise.reject('fail')).rejects.toBe('fail')
  await expect(Promise.reject(new Error('fail'))).rejects.toThrow('fail')
})
```

## 使用 mock 模拟模块

1. 在需要被 mock 的模块文件同级目录下新建 `__mocks__` 文件夹

```
.
├── __mocks__
│   └── fs.js
├── utils
│   ├── __mocks__
│   │   └── deepCopy.js
│   └── deepCopy.js
├── node_modules
└── views
    ├── __tests__
    │   └── testFn.js
    └── testFn.js
```

注意：在需要被 mock 的模块同级新建 mock 文件夹；
node_modules 中的模块需要与 node_modules 文件夹同级。

```js
// views/testFn.js
import fs from 'fs'
import deepCopy from '@/utils/deepCopy'

export default function (path) {
  let result = fs.readFileSync(path, 'utf-8')
  return deepCopy(result)
}

// utils/deepCopy.js
export default function (value) {
  return JSON.parse(JSON.stringify(value))
}

// utils/__mocks__/deepCopy.js
export default function (value) {
  return value
}

// __mocks__/fs.js
export default function () {
  return 'fs mock text'
}

// views/__tests__/testFn.js
jest.mock('../../utils/deepCopy')
jest.mock('fs')
import testFn from '../testFn.js'

test('testFn.js', () => {
  let result = testFn('test')
  expect(result).toBe('fs mock text')
})
```

## Vue 单元测试

被测试组件代码:

```html
<template>
  <div class="test-component" :class="{disabled}">
    <div class="header" @click="count++">{{ header }}</div>
    <div class="footer" @click="count--">{{ footer }}</div>
    <div class="emit" @click="emit">emit</div>
    <div class="count">{{ count }}</div>
    <div class="fetch" @click="fetch"></div>
  </div>
</template>

<script>
export default {
  props: {
    header: {
      type: String,
      default: ''
    },
    footer: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      count: 0
    }
  },
  methods: {
    /** 测试 $emit */
    emit () {
      this.$emit('click', 'test')
    },
    /** 测试异步 */
    fetch () {
      return new Promise((resolve, reject) => {
        this.count = 100
        resolve()
      })
    }
  }
}
</script>
```

测试文件代码:

```js
import { mount } from '@vue/test-utils'
import TestComponent from '../TestComponent.vue'
import flushPromises from 'flush-promises'

describe('测试组件', () => {
  test('isVueInstance', () => {
    const wrapper = mount(TestComponent)
    expect(wrapper.isVueInstance()).toBe(true)
  })

  test('prop: header', () => {
    const wrapper = mount(TestComponent, {
      propsData: {
        header: '测试文字'
      }
    })
    const header = wrapper.find('.header')
    expect(header.html()).toContain('测试文字')
  })

  test('prop: footer', () => {
    const wrapper = mount(TestComponent, {
      propsData: {
        footer: '测试文字'
      }
    })
    const footer = wrapper.find('.footer')
    expect(footer.html()).toContain('测试文字')
  })

  test('prop: disabled', () => {
    const wrapper = mount(TestComponent, {
      propsData: {
        disabled: true
      }
    })
    expect(wrapper.is('.disabled')).toBe(true)
  })

  test('click: header', () => {
    const wrapper = mount(TestComponent)
    const count = wrapper.find('.count')
    wrapper.find('.header').trigger('click')
    expect(wrapper.vm.count).toBe(1)
    expect(count.html()).toContain(1)
  })

  test('click: footer', () => {
    const wrapper = mount(TestComponent)
    const count = wrapper.find('.count')
    wrapper.find('.footer').trigger('click')
    expect(wrapper.vm.count).toBe(-1)
    expect(count.html()).toContain(-1)
  })

  test('event: click', () => {
    const wrapper = mount(TestComponent)
    const emit = wrapper.find('.emit')
    emit.trigger('click')
    expect(wrapper.emitted()['click']).toBeTruthy()
  })

  test('nextTick 方法', (done) => {
    const wrapper = mount(TestComponent)
    const fetch = wrapper.find('.fetch')
    fetch.trigger('click')
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.count).toBe(100)
      done()
    })
  })

  test('flushPromises 方法', async () => {
    const wrapper = mount(TestComponent)
    const fetch = wrapper.find('.fetch')
    fetch.trigger('click')
    await flushPromises()
    console.log(wrapper.vm.count)
    expect(wrapper.vm.count).toBe(100)
  })
})

```

## 相关文档地址

[Jest 配置文件](https://jestjs.io/docs/zh-Hans/configuration)

[Jest 全局方法](https://jestjs.io/docs/zh-Hans/api#testname-fn-timeout)

[Jest expect](https://jestjs.io/docs/zh-Hans/expect)

[Jest 异步测试](https://jestjs.io/docs/zh-Hans/tutorial-async)

[Jest mock](https://jestjs.io/docs/zh-Hans/manual-mocks)

[Vue 测试文档](https://vue-test-utils.vuejs.org/zh/)
