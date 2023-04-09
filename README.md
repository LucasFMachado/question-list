## Getting Started

First, install all project dependencies:
```bash
yarn
# or
npm install
```

Then, run the application:

```bash
yarn dev
# or
npm run dev
```

Finally, open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

<hr />

## Technical choices:

### **Project creation:**
  
  I created the project using create next-app (https://nextjs.org/docs/api-reference/create-next-app).
  I like using the project with next because, in my opinion, it only has advantages over create react-app (even when we don't use any of NextJS's features).


### **Architecture**

  I divided the project in a way that it could be scalable. I preferred to leave the styling files inside their respective folders (with the exception of the global and home styles), so that later maintenance would be easier.


### **Styles:**

  For the styling of the project, I used the styled-components library. I really like using this library because I think it keeps the code organized, and makes it much easier to style using cascade.


### **Code styling:**

  For pattern of project's code, I used the eslint and prettier libraries, so that coding rules and patterns could be implemented.


### **Main technologies used in the project:**

* [NextJS](https://nextjs.org)
* [TypesCript](https://www.typescriptlang.org)
* [Styled-Components](https://styled-components.com)
* [Axios](https://axios-http.com/docs/intro)
