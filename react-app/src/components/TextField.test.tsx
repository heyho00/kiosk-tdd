import { fireEvent, render, screen } from '@testing-library/react';
import TextField from './TextField';

test('TextField', () => {
  // given
  let called = false;
  const setText = () => {
    called = true;
  };

  const label = 'Name';
  const text = 'harry';

  // when
  render((
    <TextField
      label={label}
      placeholder=""
      text={text}
      setText={setText}
    />
  ));

  // then
  //   const input = screen.getByLabelText('Name');
  //   expect(input.value).toBe('harry');
  // 이것도 됨
  screen.getByDisplayValue(text);

  // --------------

  //   setText를 이름을 바꾸거나 해도 이상이 없이 테스트 통과되어버린다... 그걸 잡아보자.
  // when
  fireEvent.change(screen.getByLabelText(label), {
    target: { value: 'New' },
  });
  //   제대로 인풋의 밸류가 변하는지 테스트

  // setText함수 실행여부 확인
//   expect(called).toBeTruthy();
});
