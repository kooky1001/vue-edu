# 강의순서
***
* ## intermediate
1. 프로젝트 구현 (vue-cli 2.xx)
    * 컴포넌트 구조
      * TodoHeader
      * TodoInput
      * TodoList
      * TodoFooter
    * localStorage 활용
2. 프로젝트 개선
   * 각 컴포넌트에서 localStorage에 데이터 저장/수정/삭제
   * 이 경우 데이터가 변경된다면 매번 새로고침해야 하는 문제점이 발생
   * App.vue(container)에서만 데이터를 관리하고 다른 컴포넌트에서는 화면만 조작하도록 변경
   * CSS 개선 (Vuetify 적용)
3. 사용자 경험 개선
   * 모달 컴포넌트 등록
   * 트렌지션 적용
4. ES6 적용
   * 속성명 축약
5. Vuex 적용 (vuex 3.xx)
   * state
   * getters
   * mutations(동기)
   * actions(비동기)
6. Vuex 헬퍼함수 적용
   * mapGetters
   * mapMutations
***