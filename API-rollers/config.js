module.exports = {
  PORT: 1234,
  CONNECTION_STRING:
    "mongodb://WakaAdmin:WuokaAdminis9@ds143614.mlab.com:43614/rollers",
  CONNECTION_STRING_TEST: "mongodb://localhost:27017/test",
  JWT_SECRET: "wakadakadoo",
  JWT_HEADER_KEY: "wakaton",
  TOKEN_TEST:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjVjMGY5M2VmNDE2MmEwMmUwNjY3YWE4YyIsImVtYWlsIjoiTWFyYm9uYXMifSwiaWF0IjoxNTQ0NTI2ODUxfQ.LtdeELwXKzNXNj-ugUpDJ6nmCVUUznz9cz1Hj3AcH_I",
  OAUTH: {
    GOOGLE: {
      clientID:
        "644141863184-gaq0jqehdebfeeldbufkvs50v2tur2bd.apps.googleusercontent.com",
      clientSecret: "XUn5Vk-2U5klFtJ8S8ufLOwB"
    },
    FACEBOOK: {
      clientID: "2258523207766329",
      clientSecret: "41036242ee3bc65bc2d19cde20336ff2"
    }
  }
};
