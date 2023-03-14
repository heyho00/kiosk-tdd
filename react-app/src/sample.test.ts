// function add(...numbers: number[]):number {
//   return (numbers[0] ?? 0) + (numbers[1] ?? 0) + (numbers[2] ?? 0);
// }

// function add(...numbers: number[]):number {
//   return (numbers[numbers.length - 3] ?? 0)
//   + (numbers[numbers.length - 2] ?? 0)
//   + (numbers[numbers.length - 1] ?? 0);
// }

// function add(...numbers: number[]):number {
//   if (numbers.length === 0) {
//     return 0;
//   }
//   if (numbers.length === 1) {
//     return numbers[0];
//   }
//   if (numbers.length === 2) {
//     return numbers[0] + numbers[1];
//   }
//   if (numbers.length === 3) {
//     return numbers[0] + numbers[1] + numbers[2];
//   }
//   return 0;
// }

function add(...numbers: number[]):number {
  if (numbers.length === 0) {
    return 0;
  }
  // 재귀
  // return add(...numbers.slice(0, numbers.length - 1))
  //   + numbers[numbers.length - 1];
  // 아니면
  return numbers.reduce((a, b) => a + b);
}
// 이렇게 테스트를 믿고 마음껏 리팩토링 할 수 있다.

// simple test
test('add', () => {
  expect(add(1, 2)).toBe(3);
});

// BDD style
describe('add', () => {
  it('두 숫자의 합을 리턴한다', () => {
    expect(add(1, 2)).toBe(3);
  });
});

// context를 이용해 여러 테스트 케이스를 추가할 수 있다.
const context = describe;
describe('add', () => {
  context('with no arguments', () => {
    expect(add()).toBe(0);
  });

  context('with two arguments', () => {
    expect(add(1, 2)).toBe(3);
  });

  context('with three arguments', () => {
    expect(add(1, 2, 3)).toBe(6);
  });
});
