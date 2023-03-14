Feature('과제 테스트');

Scenario('메뉴판 필터링', ({ I }) => {
  I.amOnPage('/');

  I.see('푸드코트 키오스크');

  I.see('메가반점');
  I.see('메리김밥');
  I.see('혹등고래카레');

  I.click('중식');
  I.see('짜장면');
  I.dontSee('김밥');

  I.click('한식');
  I.see('메리김밥');
  I.see('김밥');
  I.see('제육김밥');

  I.click('전체');

  I.fillField('검색', '혹등');
  I.see('기본카레');
  I.see('소시지카레');
  I.dontSee('메리김밥');

  I.fillField('검색', ' ');

  I.see('메가반점');
  I.see('메리김밥');
  I.see('혹등고래카레');
});

Scenario('점심 바구니', ({ I }) => {
  I.amOnPage('/');

  I.see('푸드코트 키오스크');

  I.click({ name: '#짜장면' });
  I.click({ name: '#짬뽕' });
  I.click({ name: '#김밥' });
  I.click({ name: '#기본카레' });

  I.click('합계: 28,500원 주문');

  I.waitForText('주문번호');
  I.see('총 가격: 28,500원');

  I.wait(7);

  I.see('영수증 나오는 곳');
});
