import { fireEvent, render, screen } from '@testing-library/react';
import TextField from './TextField';

const context = describe;

describe('TextField', () => {
  const setText = jest.fn();
  const label = 'Name';
  const text = 'harry';

  beforeEach(() => { // 같은 걸 두군데서 따로 사용 -> 어디든 콜하면 콜된거. 테스트때마다 초기화 해줘야함.
    // setText.mockClear(); // 이거 아니면 밑에꺼로
    jest.clearAllMocks();
  });

  function renderTextField() {
    render((
      <TextField
        label={label}
        placeholder=""
        text={text}
        setText={setText}
      />
    ));
  }

  it('renders elements', () => {
    // when
    renderTextField(); // 같은 걸 두군데서 따로 사용 -> 어디든 콜하면 콜된거. 테스트때마다 초기화 해줘야함.
    // then
    screen.getByDisplayValue(text);
  });

  context('when user enters name', () => {
    it("calls 'setText' handler", () => {
      // given
      renderTextField(); // 같은 걸 두군데서 따로 사용 -> 어디든 콜하면 콜된거. 테스트때마다 초기화 해줘야함.
      // when
      fireEvent.change(screen.getByLabelText(label), {
        target: { value: 'New Name' },
      });

      expect(setText).toBeCalledWith('New Name');
    });
  });
});
