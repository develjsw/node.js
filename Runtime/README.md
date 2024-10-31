## Node.js - Runtime

---

### Runtime
- 런타임은 프로그램이 실행되는 동안 해당 프로그램이 필요로 하는 다양한 리소스를 제공하는 코드 실행 환경을 의미함
  - 예시 : JavaScript는 브라우저에서 실행될 때 브라우저 런타임 환경에서 작동하며, 이 환경은 DOM 접근, 이벤트 처리, 브라우저 API 등 웹 애플리케이션이 실행되는 데 필요한 요소들을 포함함

### Node.js Runtime
- Node.js 런타임은 JavaScript가 서버 측에서도 실행될 수 있도록 설계된 환경임
- Node.js는 Google의 V8 엔진을 기반으로 하며, 서버 애플리케이션 개발에 필요한 여러 기능을 추가로 제공함

### Node.js Runtime 구성 요소
1. V8 엔진
   - Google이 Chrome 브라우저를 위해 개발한 고성능 JavaScript 엔진으로, JavaScript 코드를 빠르게 기계어로 변환하여 실행함
   - Node.js는 V8 엔진을 사용하여 서버 측에서 JavaScript 코드를 실행함
2. 이벤트 루프 (Event Loop)
   - Node.js의 핵심 요소 중 하나로, 비동기 처리를 지원하는 메커니즘
   - 이벤트 루프는 비동기 작업의 콜백 함수들을 큐에 넣고 순차적으로 실행하여 효율적인 비동기 I/O 처리를 가능하게 함
   - 이 구조 덕분에 Node.js는 높은 처리 성능을 유지하면서 비동기 처리를 쉽게 구현할 수 있음
3. 비동기 I/O
   - Node.js는 파일 시스템 접근, 네트워크 요청 등 I/O 작업을 비동기 방식으로 처리하여 시스템 자원을 효율적으로 사용함
   - 이벤트 루프와 함께 비동기 I/O 처리는 CPU가 아닌 I/O 중심의 작업(예: 파일 읽기, 네트워크 요청)을 효율적으로 수행할 수 있게 함
4. 내장 API
   - Node.js는 서버 개발에 필요한 여러 내장 API를 제공함. 예로 fs 모듈 (파일 시스템 접근), http 모듈 (HTTP 서버), crypto 모듈 (암호화 기능)이 있음
   - 이러한 API는 브라우저에서는 제공되지 않기 때문에, Node.js 환경에서 JavaScript가 서버 기능을 수행해야 함

### Node.js Runtime 특징
- 단일 스레드와 비동기 처리 : Node.js는 기본적으로 단일 스레드에서 실행되지만, 비동기 I/O와 이벤트 루프 덕분에 높은 동시성 처리가 가능
- 서버 사이드 JavaScript : Node.js는 JavaScript를 브라우저 외에 서버 측에서도 사용할 수 있게 하여, 풀스택 개발자가 동일한 언어로 서버와 클라이언트 모두를 다룰 수 있게 함
- 모듈 시스템 (CommonJS) : Node.js는 모듈화를 지원하여 코드의 재사용과 유지보수성 높임

---

** 참고사항 **
- JavaScript를 실행할 수 있는 엔진은 V8(Google) 뿐만 아니라 SpiderMonkey(Mozilla), JavaScriptCore(Apple), Chakra(Microsoft), Hermes(Meta) 등이 있음