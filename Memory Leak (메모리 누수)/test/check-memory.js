const memoryUsage = process.memoryUsage()

console.log(memoryUsage);
/*
{
    rss: 28168192,
    heapTotal: 4849664,
    heapUsed: 3880432,
    external: 23288,
    arrayBuffers: 11182
}

    rss (Resident Set Size)
        - Node.js 프로세스가 운영 체제에서 차지하는 전체 메모리 크기
        - 포함된 메모리
            - 힙 메모리 : JavaScript 객체 저장
            - 스택 메모리 : 함수 호출 및 로컬 변수 저장
            - 코드 메모리 : Node.js 및 V8 코드
            - 네이티브 모듈 메모리 : C++ 확장 모듈에서 사용하는 메모리
            - 외부 메모리 : Buffer와 같은 V8 외부 데이터
            - GC 관련 메모리 : GC 실행 중 사용하는 메모리
            - 운영 체제가 관리하는 기타 메모리 : 프로세스 및 라이브러리 관련

    heapTotal
        - V8 엔진이 JavaScript 객체를 저장하기 위해 할당한 힙 메모리 총량
        - 힙 크기가 증가하면 애플리케이션이 많은 데이터를 처리 중임을 의미

    heapUsed
        - 현재 사용 중인 힙 메모리 크기
        - heapUsed가 heapTotal에 가까우면 GC가 제대로 작동하지 않거나 메모리 누수 가능성 존재

    external
        - V8 엔진 외부에서 할당된 메모리 크기
        EX) Buffer 객체 및 C++ 확장에서 사용하는 메모리

    arrayBuffers
        - ArrayBuffer와 SharedArrayBuffer가 사용하는 메모리 크기
        - external의 세부 항목으로, Buffer 객체 등 포함

    * 참고 사항 *
    heapUsed(할당값)와 heapUsed(사용값)의 차이 발생은 V8 엔진의 메모리 관리 전략 방식으로 효율성을 위해 메모리를 미리 확보해두기 때문임.
    이는 메모리 누수와는 관련이 없으며, 메모리 누수의 경우는 사용이 끝나 더 이상 필요 없음에도 GC가 회수하지 못한 경우를 말함.
*/

console.log(`RSS: ${memoryUsage.rss / 1024 / 1024} MB`);
console.log(`Heap Total: ${memoryUsage.heapTotal / 1024 / 1024} MB`);
console.log(`Heap Used: ${memoryUsage.heapUsed / 1024 / 1024} MB`);
console.log(`External: ${memoryUsage.external / 1024 / 1024} MB`);
console.log(`Array Buffers: ${memoryUsage.arrayBuffers / 1024 / 1024} MB`);